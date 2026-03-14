# SimpleTool – Multi Utility Web App

A modern, responsive **multi-utility web application UI** built with **React, TypeScript, Vite, and Tailwind CSS**.  
This project provides a single interface for common utilities like **PDF tools, image tools, file converters, and a matrix calculator**.

> ⚠️ This is a **frontend-only project**. All tools currently contain UI scaffolding and are ready for backend integration.

---

## 🚀 Features

- 📄 **PDF → Image (ZIP)** – UI for extracting PDF pages as images  
- 📝 **PDF → Text** – UI for converting PDF content into selectable text  
- ➗ **Matrix Calculator** – Add, subtract, and multiply matrices  
- 🔄 **File Format Converter** – Convert between PDF, DOCX, PPTX, TXT  
- 🖼 **Image Converter** – Convert between PNG, JPG, JPEG, WEBP  
- 📐 **Image Resizer** – Resize images with optional aspect-ratio lock  
- 🎨 **Modern Glassmorphism UI** with Tailwind CSS  
- ⚡ **Fast development** using Vite + HMR  
- 🧩 **Component-based architecture**

---

## 🛠 Tech Stack

- **React** (Functional Components & Hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Icons**

---

## 📂 Project Structure

src/
├── App.tsx
├── main.tsx
├── index.css
├── assets/
└── components/ (can be extracted later)


---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/simpletool.git
cd simpletool


### 2️⃣ Install dependencies
npm install

### 3️⃣ Start the development server
npm run dev


Open 👉 http://localhost:5173

Backend Integration (Future Scope)

Each tool is designed to be easily connected to backend services:

PDF processing (pdf-lib / pdf.js / backend APIs)

Image processing (Sharp / Canvas / WASM)

File conversion pipelines

Streaming downloads and previews

Helper text is already present in the UI to guide integration logic.
