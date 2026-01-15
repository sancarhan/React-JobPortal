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

# 🧠 Projenin Amacı

## 📌 React-JobPortal, React ile geliştirilmiş bir iş ilanları ve başvuru portalı uygulamasıdır. Amacı, kullanıcıların (iş arayanlar ve belki iş verenler) bir web arayüzü üzerinden iş ilanlarını görmesini, filtrelemesini ve başvurmasını sağlayabilecek basit ama işlevsel bir portal oluşturmaktır. Bu tür projeler genellikle şöyle problemlere çözüm getirir:

İş ilanlarının kullanıcı dostu bir arayüzle listelenmesi.

Kullanıcıların ilanlara göz atabilmesi ve seçim yapabilmesi.

Modern web teknolojileri (SPA — tek sayfa uygulama gibi) kullanılarak dinamik bir kullanıcı deneyimi sunmak.
Bu tarz iş ilanı portalları, gerçek hayattaki Monster, Indeed, LinkedIn gibi sitelerin mini versiyonlarıdır; proje hem öğrenme hem de portfolyo için faydalıdır.

Bu tip projeler genelde full-stack uygulamalar olarak da geliştirilir (React frontend, backend API + veri tabanı), ancak GitHub sayfasında yalnızca frontend kısmı gösteriliyor gibi görünüyor.

# 🛠️ Ne İçeriyor? (Öne Çıkan Özellikler)

## 📌 Proje README’sinde yer alan kurulum ve kullanılan araçlardan anlaşıldığı kadarıyla:

⚙️ Kullanılan Teknolojiler

🚀 React (Vite veya Create-React-App) – UI oluşturmak için.

📍 React Router – Sayfalar arası gezinme için.

🔔 React-Toastify – Kullanıcı bildirimleri (toast mesajlar) için.

✍️ Quill gibi zengin metin editörü – (Belki iş ilanı açıklamalarını düzenlemek için).

💅 Tailwind CSS – Stil & tasarım.

👤 Clerk / Google login – Kullanıcı kimlik doğrulama seçenekleri için.

## 📌 Yani bu projede modern frontend geliştirme araçlarının çoğu bir arada kullanılıyor: responsive CSS, routing, kullanıcı giriş/çıkış akışları gibi.

## 📌 Temel Özellikler (Olası / Varsayılan)

Not: README detaylı özellikleri doğrudan listelemiyor; ancak projeler genelde benzer işlevlere sahiptir.

✅ İş İlanlarını Listeleme:
Kullanıcıların mevcut iş ilanlarını görebildiği bir liste sayfası.

✅ İlan Arama / Filtreleme:
Belirli alanlara göre ilanların filtrelenebilmesi (örneğin pozisyon adı, konum gibi). Bu özellik birçok job portal projesinde bulunur.

✅ Kullanıcı Kimlik Doğrulama:
Clerk veya başka bir yöntemle kullanıcıların giriş yapabilmesi / kaydolabilmesi.

✅ Bildirimler & UI Etkileşimi:
React-Toastify ile kullanıcıya başarılı veya başarısız işlemlerde mesaj gösterimi.

## 📌 Eğer backend API bağlanmış olsaydı (örneğin Node.js, Express gibi), kullanıcılar ilanlara başvurabilir, ilanlar ekleyebilir veya favorilere ekleme gibi işler de yapabilirdi. Çoğu iş portalı projesinde bu işlevler de bulunur.

# 💡 Projeyi Neden Yazdım?

🎯 React öğrenimini pekiştirmek: Routing, state management, kullanıcı etkileşimi gibi React konseptlerini uygulamalı öğrenmek.
🎯 Web uygulaması geliştirme pratiği: Modern frontend araç zincirini (Vite, Tailwind, bildirim kütüphaneleri, authentication) kullanmayı öğrenmek.
