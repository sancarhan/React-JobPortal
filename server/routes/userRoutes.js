import express from 'express'
import { applyForJob, getUserData, getUserJobApplication, updateUserResume } from '../controllers/userController.js'
import upload from '../config/multer.js'

const  router = express.Router()

// Kullanıcı verilerini alın
router.get('/user', getUserData)

// İş başvurusunda bulunun
router.post('/apply', applyForJob)

// Uygulanan iş verilerini alın
router.get('/applications', getUserJobApplication)

// Kullanıcı profil güncelleme
router.post('/update-resume', upload.single('resume'),updateUserResume)

export default router;