import React from 'react'
import { IoClose } from "react-icons/io5";
import Services from '../pages/Services';
import Before_after from '../pages/Before_after';
import Aboutus from '../pages/Aboutus';
import Home from '../pages/Home';
import Contactus from '../pages/Contactus';
import { Link } from 'react-router'




export default function Mobilemenu({isShowmenu , setisShowmenu}) {
  return (  
    <div className={` fixed top-0 left-0 ${isShowmenu ? " opacity-[100%] pointer-events-auto" : "opacity-0 pointer-events-none"} duration-500 right-0 w-full h-full `}>
        <div className={ `w-full absolute ${isShowmenu ? "left-0" : "left-[-100%]"} duration-600  bg-white h-full p-2`}>
        <div className=' flex justify-end cursor-pointer'>
           <IoClose size={20} onClick={()=>setisShowmenu(false)}/>
        </div>
<div className='respon-nav list-none p-4 flex flex-col justify-center gap-4 w-[50%]  text-center m-auto rounded-2xl  '>
      <li className='active respon-nav-li text-gray-700 font-medium'> <Link to={"/"} onClick={()=>setisShowmenu(false)}>الرئيسيه </Link> </li>
      <li className='respon-nav-li text-gray-700 font-medium'> <Link to={'/Services'} onClick={()=>setisShowmenu(false)}>خدماتنا </Link> </li>
      <li className='respon-nav-li text-gray-700 font-medium'> <Link to={"Contactus"} onClick={()=>setisShowmenu(false)}>توصل معنا </Link> </li>
      <li className='respon-nav-li text-gray-700 font-medium'> <Link to={"Aboutus"} onClick={()=>setisShowmenu(false)} >من نحن  </Link> </li>
      <li className='respon-nav-li text-gray-700 font-medium'> <Link  to={"Before_after"} onClick={()=>setisShowmenu(false)}> حالات قبل وبعد  </Link> </li>

</div>
        </div>


    </div>
  )
}
