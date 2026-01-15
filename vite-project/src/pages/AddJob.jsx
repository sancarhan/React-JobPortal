import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { JobCategories, JobLocations } from '../assets/assets';

const AddJob = () => {

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('İstanbul');
  const [category, setCategory] = useState('Back-End Developer');
  const [level, setLevel] = useState('Jr. Developer');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  useEffect(()=>{
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current,{
        theme:'snow',
      })
    }
  },[])


  return (
    <form className='container p-4 flex flex-col w-full items-start gap-3'>

      <div className='w-full'>
        <p className='mb-2'>İş Ünvanı</p>
        <input type="text" onChange={e => setTitle(e.target.value)} value={title}
        required className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'/>
      </div>

      <div className=' w-full max-w-lg'>
        <p className='my-2'>İş Tanımı</p>
        <div ref={editorRef}>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Kategori</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setCategory(e.target.value)}>
            {JobCategories.map((category,index)=>(
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div >
          <p className='mb-2'>Seviye</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLevel(e.target.value)}>
            <option value="Jr. Seviye">Jr. Seviye</option>
            <option value="Mid Seviye">Mid Seviye</option>
            <option value="Senior Seviye">Senior Seviye</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Lokasyon</p>
          <select className='w-full px-3 py-2 border-2 border-gray-300 rounded' onChange={e => setLocation(e.target.value)}>
            {JobLocations.map((location,index)=>(
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>

      </div>
      <div>
        <p className='mb-2'>Aylık Ücret</p>
        <input className='w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]' onChange={e => setSalary(e.target.value)} type="number" placeholder='Aylık Ücret Giriniz'/>
      </div>
      <button className='w-28 py-3 mt-4 bg-black text-white cursor-pointer rounded'>Yayınla</button>
    </form>
  )
}

export default AddJob
