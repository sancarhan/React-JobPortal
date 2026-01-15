import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar */}
      <div className='shadow py-4'>
        <div className='px-5 flex justify-between items-center'>
          <img
            onClick={() => navigate('/')}
            className='max-sm:w-32 cursor-pointer'
            src={assets.logo1}
            alt=""
          />

          <div className='flex items-center gap-3'>
            <p className='max-sm:hidden'>Hoşgeldin Oğuzhan</p>

            <div className='relative group'>
              <img
                className='w-8 border border-gray-100 rounded-full'
                src={assets.company_icon}
                alt=""
              />

              <div className='absolute hidden group-hover:block top-0 right-0 z-10 rounded pt-12'>
                <ul className='bg-white border  border-gray-100 rounded-md text-sm p-5'>
                  <li className='py-1 px-3 cursor-pointer border-b border-gray-400'>Profil</li>
                  <li className='py-1 px-3 cursor-pointer'>Çıkış</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex items-start">

        {/* Sol Panel */}
        <div className="inline-block min-h-screen border-r-2 border-gray-200">
          <ul className="flex flex-col items-start pt-5 text-gray-800">

           
              <NavLink
                to="/dashboard/add-job"
                className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:text-blue-600 ${isActive && 'bg-blue-100 border-r-2 border-blue-500'}`}
              >
                <img className='min-w-4' src={assets.add_icon} alt="" />
                <p className='max-sm:hidden'>İş Ekle</p>
              </NavLink>
        

           
              <NavLink
                to="/dashboard/manage-job"
                 className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:text-blue-600 ${isActive && 'bg-blue-100 border-r-2 border-blue-500'}`}
              >
                <img className='min-w-4' src={assets.home_icon} alt="" />
                <p className='max-sm:hidden'>İşleri Yönet</p>
              </NavLink>
         

         
              <NavLink
                to="/dashboard/view-applications"
                 className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:text-blue-600 ${isActive && 'bg-blue-100 border-r-2 border-blue-500'}`}
              >
                <img className='min-w-4' src={assets.person_tick_icon} alt="" />
                <p className='max-sm:hidden'>Uygulamaları Görüntüle</p>
              </NavLink>
 
          </ul>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
