import Job from "../models/Job.js"
import JobApplication from '../models/JobApplication.js'
import User from '../models/User.js'
import { v2 as cloudinary } from "cloudinary"


// Kullanıcı verilerini al
export const getUserData = async(req,res) =>{
 
 const userId = req.auth.userId

 try {
  
  const user = await User.findById(userId)

  if (!user) {
   return res.json({ success:false, message:'Kullanıcı Bulunamadı' })
  }

  res.json({success:true, user})

 } catch (error) {
  res.json({success:false, message: error.message})
 }

}

// İş başvurusunda bulun
export const applyForJob = async(req,res) =>{

 const { jobId } = req.body

 const userId = req.auth.userId

 try {
  
  const isAlreadyApplied = await JobApplication.find({jobId,userId})

  if (isAlreadyApplied.length > 0) {
   return res.json({success:false, message:'Already Applied'})
  }

  const jobData = await Job.findById(jobId)

  if (!jobData) {
   return res.json({success:false, message:'İş Bulunamadı'})
  }

  await JobApplication.create({
   companyId: jobData.companyId,
   userId,
   jobId,
   date: Date.now()
  })

  res.json({ success: true, message:'Başvuru başarıyla tamamlandı.' })

 } catch (error) {
  res.json({success:false, message:error.message})
 }

}

// Kullanıcı tarafından uygulanan uygulamaları edinin
export const getUserJobApplication = async(req,res) =>{

 try {
  
  const userId = req.auth.userId

  const applications = await JobApplication.find({ userId })
  .populate('companyId','name email image')
  .populate('jobId','title description location category level salary')
  .exec()

  if (!applications) {
   return res.json({ success: false, message:'Bu kullanıcı için herhangi bir iş başvurusu bulunamadı.' })
  }

  return res.json({success:true, applications})

 } catch (error) {
  res.json({ success:false, message:error.message })
 }

}

// Kullanıcı profil güncelleme
export const updateUserResume = async(req,res) =>{

 try {
  
  const userId = req.auth.userId

  const resumeFile = req.resumeFile

  const userData = await User.findById(userId)

  if (resumeFile) {
   const resumeUpload = await cloudinary.uploader.upload(resumeFile.path)
   userData.resume = resumeUpload.secure_url
  }

  await userData.save()

  return res.json({ success:true, message:'CV Güncellendi' })

 } catch (error) {
  
  res.json({ success:false, message: error.message })

 }

}
