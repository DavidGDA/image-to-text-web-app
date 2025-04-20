# Image-to-Text Web App

Este proyecto es una aplicación web que permite convertir imágenes en texto utilizando reconocimiento óptico de caracteres (OCR).

## Despliegue

[![Deployed on Render](https://img.shields.io/badge/Deployed_on_Render-%23000000.svg?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

**¡Puedes ver la aplicación en funcionamiento en [https://image-to-text-br9y.onrender.com](https://image-to-text-br9y.onrender.com)!**

> [!NOTE]
> La aplicación puede tardar un poco en cargar la primera vez que la abras, ya que Render necesita inicializar el contenedor. Si no ves la aplicación de inmediato, espera unos minutos y vuelve a intentarlo.

## Tech stack

Esta aplicación está construida utilizando las siguientes tecnologías:

- [![Tesseract](https://img.shields.io/badge/Tesseract-green?style=for-the-badge&logo=tesseract)](https://tesseract-ocr.github.io/) ![5.5.0](https://img.shields.io/badge/5.5.0-gray?style=for-the-badge)
- [![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/) ![3.13.2](https://img.shields.io/badge/3.13.3-gray?style=for-the-badge)
- [![PyTesseract](https://img.shields.io/badge/PyTeserract-green?style=for-the-badge&logo=python&logoColor=white)](https://pypi.org/project/pytesseract/) ![0.3.13](https://img.shields.io/badge/0.3.13-gray?style=for-the-badge)
- [![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/) ![0.115.12](https://img.shields.io/badge/0.115.12-gray?style=for-the-badge)
- [![Typescript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) ![5.7.3](https://img.shields.io/badge/5.7.3-gray?style=for-the-badge)
- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) ![22.14.0](https://img.shields.io/badge/22.14.0-gray?style=for-the-badge)
- [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) ![6.3.2](https://img.shields.io/badge/6.3.2-gray?style=for-the-badge)
- [![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/) ![19.1.0](https://img.shields.io/badge/19.1.0-gray?style=for-the-badge)
- [![Docker](https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) ![28.0.4](https://img.shields.io/badge/28.0.4-gray?style=for-the-badge)

## Instalación del proyecto

### Clona este repositorio

```bash
git clone https://github.com/DavidGDA/image-to-text-web-app.git
cd image-to-text-web-app
```

### Instala Tesseract OCR en tu sistema

- En Ubuntu / Debian:

```bash
sudo apt-get install tesseract-ocr
```

- En MacOS:

```bash
brew install tesseract
```

- En Windows:

Puedes descargar el instalador desde la página de lanzamientos del repositorio oficial, puedes visitarla [haciendo click aquí](https://github.com/tesseract-ocr/tesseract/releases)

### Agrega Tesseract OCR al PATH del archivo .env

Crea un archivo `.env` **en la carpeta raíz del proyecto** y agrega la siguiente línea:

```bash
TESSERACT_EXE_PATH="C:\path\to\tesseract.exe" # Si estas usando Windows
```

```bash
TESSERACT_EXE_PATH="/path/to/tesseract" # Si estas usando macOS o Linux
```

La ruta tiene que ser igual al archivo binario de teserract llamado `tesseract.exe`, verifica que el archivo `tesseract.exe` esté en esa ubicación.

### Instala las dependencias del frontend

Abre una terminal y navega a la carpeta del frontend

```bash
   # Desde la raíz del proyecto
   cd app/frontend
   npm install
```

### Instala las dependencias del backend

Navega a la carpeta del backend

```bash
   # Desde la raíz del proyecto
   cd app/backend
   pip install -r requirements.txt
```

## Uso

### Inicia el servidor del backend

**Asegúrate de que Tesseract OCR esté instalado y la variable de entorno TESERRACT_EXE_PATH bien configurada en tu archivo `.env`**, luego, navega a la carpeta del backend y ejecuta el siguiente comando:

```bash
   # Desde la raíz del proyecto
   cd app/backend
   uvicorn app:app --reload
```

### Inicia el servidor del frontend

```bash
   # Desde la raíz del proyecto
   cd app/frontend
   npm run dev
```

### Abre la aplicación en tu navegador en [http://localhost:10000](http://localhost:10000)

### Y listo, ya puedes usar la aplicación localmente para convertir imágenes en texto

## Contribuciones

Las contribuciones son bienvenidas. Por favor, si deseas contribuir, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
3. Realiza tus cambios y haz commit (git commit -m 'Añadir nueva característica').
4. Sube tus cambios (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request.
