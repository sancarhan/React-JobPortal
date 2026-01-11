# -- Gerekli Kurulumlar --

## 1.React uygulamalarında sayfalar arası geçiş (routing) yapmak için 👉 (npm install react-router-dom) kurulumu yapıyoruz.

## 2.React uygulamalarında kullanıcıya bildirim (toast / popup mesaj) göstermek için kullanılan kütüphaneyi 👉 (npm install react-toastify) kuruyoruz.

## 3.React (veya düz JS) projelerinde zengin metin editörü (rich text editor) kullanmak için Quill kütüphanesini 👉 (npm install quill) kuruyoruz.

## 4.npm create vite@latest - Proje için ortamı kurduktan sonra.

## 5.npm install tailwindcss @tailwindcss/vite - tailwindcss ile CSS framework'ünü kuruyoruz.

## 6.Akabinde -vite.config.js- dosyasına yoksa eğer projemizin ana dizinine açabilirsiniz.

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

## 7.Bu kodu yapıştırıyoruz.

## 8.Daha sonra index.css dosyasına @import "tailwindcss"; import ediyoruz. Ve CSS frameworklerimiz hazır.

## 9.Next.js dışındaki React projelerinde (Vite, CRA vb.) Clerk ile kullanıcı kimlik doğrulama (auth) yapmak için kullanılan sistemi kurmak için 👉 (npm install @clerk/clerk-react) kurulumu yapıyoruz

## 10.Clerk ile google hsabı ile giriş yapılabiliyor, filtrelem ile arama çalışıyor
<img width="1594" height="1240" alt="localhost_5174_" src="https://github.com/user-attachments/assets/5d1e1a7a-0992-41d4-bdcb-ebae4e95aeed" />
