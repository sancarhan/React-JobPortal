import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import  'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from './controllers/webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {clerkMiddleware} from '@clerk/express'
// express → Backend sunucusunu ve API’yi oluşturur
// cors → Frontend’in (React vb.) bu API’ye erişebilmesini sağlar
// dotenv/config → .env dosyasındaki gizli değişkenleri (PORT, DB_URL vb.) kullanmanı sağlar


// Express uygulaması oluşturma
const app = express()
// app → Senin backend uygulaman (sunucu)

// Database bağlantısı
await connectDB()
await connectCloudinary()

// Middleware’ler
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
// cors() → Tarayıcıdan gelen istekleri engellememesi için
// express.json() → req.body ile JSON veri alabilmek için
// (örneğin login, register, form gönderimleri)

// Test endpoint’i
app.get('/',(req,res)=> res.send("API Çalışıyor"))
// Tarayıcıda http://localhost:5000 açıldığında
// “API Çalışıyor” yazısını görürsün
// Sunucunun ayakta olduğunu test etmek için

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post('/webhooks',clerkWebhooks)
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/user', userRoutes)


// Port
const PORT = process.env.PORT || 5000

// .env içinde PORT varsa onu kullanır
// Yoksa 5000 portunda çalışır

Sentry.setupExpressErrorHandler(app);

// Sunucuyu başlatma
app.listen(PORT,()=>{
 console.log(`Sunucu ${PORT} numaralı portta çalışıyor.`);
 
})
// Backend’i ayağa kaldırır
// Konsolda çalıştığını bildirir