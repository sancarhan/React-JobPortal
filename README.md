# Gerekli kurulumlar için

## npm create vite@latest - Proje için ortamı kurduktan sonra

## npm install tailwindcss @tailwindcss/vite - tailwindcss ile CSS framework'ünü kuruyoruz

## Akabinde -vite.config.js- dosyasına yoksa eğer projemizin ana dizinine açabilirsiniz

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
## Bu kodu yapıştırıyoruz

## Daha sonra index.css dosyasına @import "tailwindcss"; import ediyoruz
## Ve CSS frameworklerimiz hazır
