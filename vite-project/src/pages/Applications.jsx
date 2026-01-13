import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import 'moment/locale/tr'  
import Footer from '../components/Footer'
moment.locale('tr')

const Applications = () => {

  const [isEdit, setIsEdit] = useState(false)
  const [resume,setResume] = useState(null)

  return (
    <>
      <Navbar/>
      <div className='container px-4 min-h-[65v] 2xl:px-20 mx-auto my-10'>
        <h2 className='text-xl font-semibold'>Özgeçmişiniz</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {
            isEdit
             ? <>
             <label className='flex items-center' htmlFor="resumeUpload">
              <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Devam Et'i seçin</p>
              <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
              <img src={assets.profile_upload_icon} alt="" />
             </label>
             <button onClick={e => setIsEdit(false)} className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'>Kaydet</button>
             </>
             : <div className='flex gap-2'>
              <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg' href="">
                Yükle
              </a>

              <button onClick={()=>setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>
                Düzenle
              </button>
             </div>
          }
        </div>
        <h2 className='text-xl font-semibold mb-4'>Başvurulan İşler</h2>
        <table className='min-w-full bg-white border border-gray-300 shadow-xl rounded-2xl'>
          <thead>
            <tr>
              <th className='py-3 px-4 border-b border-gray-300 text-left'>Şirket</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left' >İş Unvanı</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left max-sm:hidden' >Konum</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left max-sm:hidden' >Tarih</th>
              <th className='py-3 px-4 border-b border-gray-300 text-left' >Durum</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job,index)=> true ? (
              <tr className='py-2 px-4 border-b border-gray-300'>
                <td className='py-3 px-4 flex items-center gap-2'>
                  <img className='w-8 h-8' src={job.logo} alt="" />
                  {job.company}
                </td>
                <td className='py-2 px-4 border-b border-gray-300'>{job.title}</td>
                <td className='py-2 px-4 border-b border-gray-300 max-sm:hidden'>{job.location}</td>
                <td className='py-2 px-4 border-b border-gray-300 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-2 px-4 border-b border-gray-300'>
                  <span className={`${job.status === 'Kabul edildi' ? 'bg-green-100' : job.status === 'Reddedildi' ? 'bg-red-100' : 'bg-blue-100'} px-4 py-1.5 rounded`}>
                    {job.status}
                  </span></td>
              </tr>
            ) : (null) )}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  )
}

export default Applications
