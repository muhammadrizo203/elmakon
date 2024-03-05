import React, { Component } from 'react'
import Nav from '../components/nav'
export default class birinchi extends Component {
  render() {
    return (
      <div>
          <header>
              <Nav/>
               <div className='div'>
               <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img  id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/42/1920x450_ru__7_.jpg" class="d-block w-100" alt="..."/>
             </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img  id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/42/1920x450_ru_xyyw-t6.jpg" class="d-block w-100" alt="..."/>
              </div>
             <div class="carousel-item">
               <img  id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/42/elmakon_1240x450_rus.jpg" class="d-block w-100" alt=""/>
             </div>
             <div class="carousel-item">
               <img  id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/42/ru__2_.jpg" class="d-block w-100" alt="..."/>
             </div>
             <div class="carousel-item">
               <img id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/40/1240x450_ru_rnba-0y.jpg" class="d-block w-100 " alt="..."/>
             </div>
             <div class="carousel-item">
               <img id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/39/1240x450_Rus.png" class="d-block w-100" alt="..."/>
             </div>
             <div class="carousel-item">
               <img  id='img' src="https://elmakon.uz/images/abt__ut2/banners/all/36/банер-для-сайта-версия-2.png" class="d-block w-100" alt="..."/>
             </div>
             </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
           </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
               </div>
               <div className='div1'>
                   <div className='div2' >
                    <h1>Смартфоны</h1>
                     <img className='img7' src="https://elmakon.uz/images/abt__ut2/banners/all/34/Smartfon__2_.png" alt="" />
                   </div>
                   <div className='div4'>
                   <h1>Обогреватели</h1>
                      <img className='img5' src="https://elmakon.uz/images/abt__ut2/banners/all/37/Obogrev.png" alt="" />
                   </div>
                   <div className='div5'> 
                   <h1>Техника для кухни</h1>
                     <img className='img' src="https://elmakon.uz/images/abt__ut2/banners/all/34/Dud__2__2ia0-97.png" alt="" />
                     
                   </div>
                   <div className='div6' >
                    <h1>Бытовая <br /> техника</h1>
                       <img className='img1' src="https://elmakon.uz/images/abt__ut2/banners/all/34/Maishiy__2_.png" alt="" />
                   </div>
             
               </div>
               <div className='div3'>
                
                   <div className='div7'>
                    <h1>Gaming</h1>
                      <img className='img6' src="https://elmakon.uz/images/abt__ut2/banners/all/34/Gaming__2__br71-3y.png" alt="" />
                   </div>
                   <div className='div8'>
                    <h1>Авто <br /> товары</h1>
                     <img className='img2' src="https://elmakon.uz/images/abt__ut2/banners/all/34/Avto__2__bugz-k9.png" alt="" />
                   </div>
                 
                   <div className='div9'>
                   <h1>Ноутбуки</h1>
                     <img className='img3' src="https://elmakon.uz/images/abt__ut2/banners/all/34/Noutbuk__3__spmx-xe.png" alt="" />
                   </div>

                   <div className='div10'>
                   <h1>TV <br /> AUDIO</h1>
                      <img className='img4' src="https://elmakon.uz/images/abt__ut2/banners/all/34/TV_audio__2__y8o3-73.png" alt="" />
                   </div>
               </div>
          </header>

          <main>

          </main>


        
      </div>
    )
  }
}
