# Gerekli kurulumlar için

## React uygulamalarında sayfalar arası geçiş (routing) yapmak için 👉 (npm install react-router-dom) kurulumu yapıyoruz.

## React uygulamalarında kullanıcıya bildirim (toast / popup mesaj) göstermek için kullanılan kütüphaneyi 👉 (npm install react-toastify) kuruyoruz.

## React (veya düz JS) projelerinde zengin metin editörü (rich text editor) kullanmak için Quill kütüphanesini 👉 (npm install quill) kuruyoruz.

## npm create vite@latest - Proje için ortamı kurduktan sonra.

## npm install tailwindcss @tailwindcss/vite - tailwindcss ile CSS framework'ünü kuruyoruz.

## Akabinde -vite.config.js- dosyasına yoksa eğer projemizin ana dizinine açabilirsiniz.

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
## Bu kodu yapıştırıyoruz.

## Daha sonra index.css dosyasına @import "tailwindcss"; import ediyoruz.
## Ve CSS frameworklerimiz hazır.
