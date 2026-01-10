import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-blue-800 to-blue-950 text-white py-16 text-center mx-2 rounded-xl">
       <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Başvurabileceğiniz 10.000'den fazla iş ilanı</h2>
       <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">Kariyerinizdeki Bir Sonraki Büyük Adım Tam Burada Başlıyor - En İyi İş Fırsatlarını Keşfedin ve Geleceğinize Doğru İlk Adımı Atın!</p>
       <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 sm:mx-auto">
        <div className="flex items-center">
         <img className="h-4 sm:h-5" src={assets.search_icon} alt="" />
         <input type="text" 
         placeholder="İş Arayın"
         className="max-sm:text-xs p-2 rounded outline-none w-full  bg-white text-gray-600"/>
        </div>
        <div className="flex items-center">
         <img className="h-4 sm:h-5" src={assets.location_icon} alt="" />
         <input type="text" 
         placeholder="Konum"
         className="max-sm:text-xs p-2 rounded outline-none w-full bg-white text-gray-600"/>
        </div>
        <button className="bg-blue-600 px-6 py-2 rounded text-white m-1">Ara</button>
       </div>
      </div>
    </div>
  );
};

export default Hero;
