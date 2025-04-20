import "./components/fileSelector"
import './App.css'
import FileSelector from "./components/fileSelector"

function App() {

  return (
    <>
      <header>
        <h1 id="header-page-name-title">Imagen a texto</h1>
      </header>
      <main>
        <section id="information-section">
          <h2>Obtén el texto de tus imágenes</h2>
          <p>Únicamente sube la imagen de la cual obtener el texto, y rápidamente obtendrás este</p>
          <p>Esta aplicación utiliza un modelo de OCR para extraer el texto de la imagen, <strong>el texto en la imágen debe ser digital, no manuscrito.</strong></p>
        </section>
        <FileSelector />
      </main>
    </>
  );
}

export default App
