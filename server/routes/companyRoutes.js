import express from 'express'
import { ChangeJobApplicationsStatus, ChangeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middleware/authMiddleware.js'

const router = express.Router()

// Bir şirket kaydedin
router.post('/register', upload.single('image'), registerCompany)

// Şirket giriş
router.post('/login', loginCompany)

// // Şirket verilerini alın
router.get('/company', protectCompany, getCompanyData)

// Yeni İş İlanı
router.post('/post-job', protectCompany, postJob)

// Şirket iş başvurularını alın
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// Şirket tarafından yayınlanan işleri alın
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

// İş başvurusu durumunu değiştir
router.post('/change-status', protectCompany, ChangeJobApplicationsStatus)

// İş görünürlüğünü değiştirme
router.post('/change-visiblty', protectCompany, ChangeVisiblity)

export default router