import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import 'moment/locale/tr'  
import { useNavigate } from 'react-router-dom'
moment.locale('tr')

const ManageJobs = () => {

  const navigate = useNavigate()

  return (
    <div className='container p-4 max-w-5xl'>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border border-gray-200 max-sm:text-sm'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 border-b text-left'>İş</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Tarih</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Lokasyon</th>
              <th className='py-2 px-4 border-b text-center'>Başvuru Sahipleri</th>
              <th className='py-2 px-4 border-b text-left'>Görünür</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job,index)=>(
              <tr key={index} className='text-gray-700 border-b border-gray-400'>
                <td className='py-2 px-4 max-sm:hidden'>{index+1}</td>
                <td className='py-2 px-4'>{job.title}</td>
                <td className='py-2 px-4 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-2 px-4 max-sm:hidden '>{job.location}</td>
                <td className='py-2 px-4 text-center'>{job.applicants}</td>
                <td className='py-2 px-4'>
                  <input className='scale-125 ml-4' type="checkbox"/>
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      <div className='mt-4 flex justify-end'>
        <button onClick={()=>navigate('/dashboard/add-job')} className='bg-black text-white py-2 px-4 rounded'>Yeni İş Yayınla</button>
      </div>
    </div>
  )
}

export default ManageJobs
