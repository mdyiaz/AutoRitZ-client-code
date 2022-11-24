import React from 'react';
import car_1 from '../../../assets/Banner/car_1.jpg'
import car_2 from '../../../assets/Banner/car_2.jpg'
import car_3 from '../../../assets/Banner/car_3.jpg'
import car_4 from '../../../assets/Banner/car_4.webp'

const Banner = () => {
    return (
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 pt-10 pb-10'>


<div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={car_1} alt="" className="w-full h-4/5 rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={car_2} alt="" className="w-full h-4/5" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={car_3} alt="" className="w-full h-4/5" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={car_4} alt="" className="w-full h-4/5" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

</div>

<div>
<h2 className='px-40 text-5xl font-bold pb-5'>Easy And Fast Way To Buy & Sell Car On Our Platform</h2>
<p className='px-40 text-2xl'>We will help you sell or buy your dream car here easily and quickly that is reliable</p>
</div>


       </div>

    );
};

export default Banner;