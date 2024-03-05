import React from 'react'
import {Link} from 'react-router-dom'
import '../css/stayl.css'

export default function nav() {
  return (
    <header>
      <div className='navdiv'>
      <div className='navdiv1'>
      <button type="button" class="btn btn-danger">Скидки </button>
      <Link>Адрес магазинов</Link>
      <Link>Статус рассрочки</Link>

      </div>
      <div className='navdiv2'>
      <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Dropdown button
         </button>
      <ul class="dropdown-menu">
       <li><a class="dropdown-item" href="#"><img width={20} src="https://www.state.gov/wp-content/uploads/2018/08/rs-lgflag.gif" alt="" /> Рус</a></li>
         <li><a class="dropdown-item" href="#"><img width={20} src="https://new.standart.uz/upload/image/getpdf_1.png" alt="" />  O'zb</a></li>
      </ul>
         </div>
      </div>
      </div>
      <nav className='nav'>
         <div className='divnav' >
           <img width={200} height={60}ma src="https://elmakon.uz/images/logos/8/elmakon.png" alt="" />
         </div>
         <div className='divnav1'> 
           <ul>
            <li><Link >Смартфоны</Link></li>
            <li><Link>Ноутбуки</Link></li>
            <li><Link>Телевизоры</Link></li>
            <li><Link>Обогреватели</Link></li>
            <li><Link>Кондиционеры</Link></li>
            <li><Link>Холодильники</Link></li>
           </ul>
         </div>
         <div className='divnav2'>
              <div class="btn-group" role="group" aria-label="Basic example">
                  <button id='button' type="button" class="btn btn-white"><i class="fa-regular fa-heart"></i></button>
                  <button type="button" class="btn btn-white"><i class="fa-solid fa-chart-simple"></i></button>
               </div>
               <h1 id='h'>+998-71-203-1203</h1>
         </div>
         
      </nav>
      <div className='divnav3'>
            <div className='divnav4'>
            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
            </div>
            <div className='divnav5'>
               <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                 <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
       
               </div>
            </div>
            <div className='divnav6'>
            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"><img width={25} src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" /> Войти</button>
            <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?"><i class="fa-solid fa-cart-shopping"></i>  Корзина</button>
            </div>
      </div>
    </header>
  )
}
