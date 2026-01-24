import Job from "../models/Job.js";

// Tüm işleri al
export const getJobs = async (req, res) => {
  try {

    const jobs = await Job.find({ visible:true })
    .populate({path:'companyId',select:'-password'})

    res.json({success:true, jobs})

  } catch (error) {
   res.json({success:false, message:error.message})
  }
};

// Kimliğinizle tek bir iş bulun.
export const getJobById = async (req, res) => {
 try {
  
  const {id} = req.params

  const job = await Job.findById(id)
  .populate({
   path:'companyId',
   select:'-password'
  })

  if (!job) {
   return res.json({
    success:false,
    message:'İş bulunamadı'
   })
  }

  res.json({
   success:true,
   job
  })

 } catch (error) {
  res.json({success:false, message:error.message})
 }
};
