import { useRef, useState } from "react";

export default function FileSelector() {
  const [file, setFile] = useState<File | null>(null);
  const [view, setView] = useState<string>("select-file");
  const [text, setText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  let apiURL: string = "";

  if (import.meta.env.MODE === "production") {
    apiURL = import.meta.env.VITE_BACKEND_URL;
  } else {
    apiURL = "http://localhost:8000";
  }

  const handleUpload = async () => {
    if (error) {
      setError(null);
    }

    const formData = new FormData();

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Selecciona un tipo de imagen admitida");
      }
      formData.append("file", file);
    } else {
      setError("No se ha seleccionado ningun archivo");
      return;
    }

      setView("loading");

      const response = await fetch(`${apiURL}/ocr/`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setText(data.text);
      setView("results");
  };

  const handleCopyText = async () => {
    if (textareaRef.current) {
      await navigator.clipboard.writeText(text);
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    if (view === "select-file") {
      const clipboardItems: DataTransferItemList = event.clipboardData?.items;
      if (clipboardItems) {
        for (const item of clipboardItems) {
          if (item.type.startsWith("image/")) {
            const pasteFile: File | null = item.getAsFile();
            if (pasteFile) {
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(pasteFile);
              fileInputRef.current!.files = dataTransfer.files;
              setFile(pasteFile);
              return;
            }
          }
        }
      }
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    if (fileInputRef.current && event.dataTransfer?.files) {
      fileInputRef.current.files = event.dataTransfer.files;
      setFile(fileInputRef.current.files[0]);
    }
  };

  const handleReturnToFileSelection = () => {
    setFile(null);
    setText("");
    setView("select-file");
  };

  if (view === "loading") {
    return (
      <section className="file-selection-section">
        <p>
          <strong>Cargando, esto puede tomar algunos segundos</strong>
        </p>
        <span id="loader"></span>
      </section>
    );
  }

  if (view === "results") {
    return (
      <section className="text-results-section">
        <h2>Este fue el texto encontrado</h2>
        <p>Puedes editarlo a tu gusto antes de copiarlo</p>
        <textarea
          id="text-result"
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <button onClick={handleCopyText}>Copiar texto</button>
          <button onClick={handleReturnToFileSelection}>
            Escanear otro archivo
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="file-selection-section"
      onPaste={handlePaste}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <strong>Selecciona, pega o arrastra una imagen</strong>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={handleUpload}>Extraer texto</button>
      {error ? (
        <span>
          <p id="error-text">{error}</p>
        </span>
      ) : (
        ""
      )}
      <span>
        <p>Tipos de archivos admitidos: .png, .jpg, .jpeg</p>
      </span>
    </section>
  );
}
