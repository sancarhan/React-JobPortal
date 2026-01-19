import express from 'express'
import { ChangeJobApplicationsStatus, ChangeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'

const router = express.Router()

// Bir şirket kaydedin
router.post('/register', upload.single('image'), registerCompany)

// Şirket giriş
router.post('/login', loginCompany)

// // Şirket verilerini alın
router.get('/company', getCompanyData)

// Yeni İş İlanı
router.post('/post-job', postJob)

// Şirket iş başvurularını alın
router.get('/applicants', getCompanyJobApplicants)

// Şirket tarafından yayınlanan işleri alın
router.get('/list-jobs', getCompanyPostedJobs)

// İş başvurusu durumunu değiştir
router.post('/change-status', ChangeJobApplicationsStatus)

// İş görünürlüğünü değiştirme
router.post('/change-visiblty', ChangeVisiblity)

export default router