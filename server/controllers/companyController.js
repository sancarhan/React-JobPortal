import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";

// Yeni bir şirket kaydedin
export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;

  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.json({ success: false, message: "Eksik Ayrıntılar" });
  }

  try {
    const companyExists = await Company.findOne({ email });

    if (companyExists) {
      return res.json({ success: false, message: "Şirket zaten kayıtlı" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const company = await Company.create({
      name,
      email,
      password: hashPassword,
      image: imageUpload.secure_url,
    });

    res.json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    res.json({ success: true, message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------------

// Şirket Giriş
export const loginCompany = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Company.findOne({ email });

    if (bcrypt.compare(password, company.password)) {
      res.json({
        success: true,
        company: {
          _id: company._id,
          name: company.name,
          email: company.email,
          image: company.image,
        },
        token: generateToken(company._id),
      });
    } else {
      res.json({ success: false, message: "Geçersiz e-posta veya şifre" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------------

// Şirket verilerini alın
export const getCompanyData = async (req, res) => {
  
  try {
    const company = req.company
    
    res.json({success:true, company})

  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
  }
};

// --------------------------------------------------------------------------------------------------------

// Yeni İş İlanı
export const postJob = async (req, res) => {
  const { title, description, location, salary, level, category } = req.body;

  const companyId = req.company._id;

  try {
    const newJob = new Job({
      title,
      description,
      location,
      salary,
      companyId,
      date: Date.now(),
      level,
      category,
    });

    await newJob.save();

    res.json({ success: true, newJob });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------------

// Şirket iş başvurularını alın
export const getCompanyJobApplicants = async (req, res) => {};

// --------------------------------------------------------------------------------------------------------

// Şirket tarafından yayınlanan işleri alın
export const getCompanyPostedJobs = async (req, res) => {
  try {
    
    const companyId = req.company._id
    const jobs = await Job.find({companyId})
    
    // (ToDo) Verilere başvuru sayısı bilgisini eklemek

    res.json({success:true, jobsData: jobs})

  } catch (error) {
    res.json({success:false, message: error.message})
  }
};

// --------------------------------------------------------------------------------------------------------

// İş başvurusu durumunu değiştir
export const ChangeJobApplicationsStatus = async (req, res) => {};

// --------------------------------------------------------------------------------------------------------

// İş görünürlüğünü değiştirme
export const ChangeVisiblity = async (req, res) => {
  try {
    
    const {id} = req.body

    const companyId = req.company._id

    const job = await Job.findById(id)

    if (companyId.toString() === job.companyId.toString()) {
      job.visible = !job.visible
      
    }

    await job.save()

    res.json({success:true, job})

  } catch (error) {
    res.json({success:false, message:error.message})
  }
};
