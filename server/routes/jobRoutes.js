import express from 'express'
import { getJobById, getJobs } from '../controllers/jobController.js';

const router = express.Router()

// Tüm iş verilerini almak için rota
router.get('/',getJobs)

// Kimlik numarasına göre tek bir işe ulaşma yolu
router.get('/:id', getJobById)

export default router;