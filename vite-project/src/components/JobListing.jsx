import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'

const JobListing = () => {

  const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)

  const [showFilter, setShowFilter] = useState(false)

  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
      
      {/* Sidebar */}
      <div className='w-full lg:w-1/4 bg-white px-4'>
        {/* Arama kısmı sağ taraf */}
        {
          isSearched && ( searchFilter.title !== "" || searchFilter.location !== "" ) && (
            <>
            <h3 className='font-medium text-lg mb-4'>Mevcut Arama</h3>
            <div className='mb-4 text-gray-600'>
              {searchFilter.title && (
                <span className='inline-flex items-center gap-2.5 text-xs bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                  {searchFilter.title}
                  <img onClick={e => setSearchFilter(prev => ({...prev,title:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
              )}
              {searchFilter.location && (
                <span className='ml-2 inline-flex items-center gap-2.5 text-xs bg-purple-50 border border-purple-200 px-4 py-1.5 rounded'>
                  {searchFilter.location}
                    <img onClick={e => setSearchFilter(prev => ({...prev,location:""}))} className='cursor-pointer' src={assets.cross_icon} alt="" />
                </span>
              )}
            </div>
            </>
          )
        }

        <button onClick={e => setShowFilter(prev => !prev)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
          {
            showFilter ? "Kapat" : "Filtreler"
          }
        </button>

        {/* Kategori Filtresi */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4'>Kategorilere Göre Ara</h4>
          <ul className='space-y-4 text-gray-600 text-xs'>
            {
              JobCategories.map((category,index)=>(
                <li className='flex gap-3 items-center' key={index}>
                  <input className='scale-125' type="checkbox" name="" id="" />
                  {category}
                </li>
              ))
            }
          </ul>
        </div>

        {/* Konum Filtresi */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className='font-medium text-lg py-4 pt-14'>Konuma Göre Ara</h4>
          <ul className='space-y-4 text-gray-600 text-xs'>
            {
              JobLocations.map((location,index)=>(
                <li className='flex gap-3 items-center' key={index}>
                  <input className='scale-125' type="checkbox" name="" id="" />
                  {location}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      {/* İş Listesi */}
      <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
        <h3 className='font-medium text-3xl py-2' id='job-list'>Yayınlana İşler</h3>
        <p className='mb-8'>En iyi şirketlerden istediğiniz işi alın.</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
          {jobs.map((job,index)=>(
            <JobCard key={index} job={job}/>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JobListing
