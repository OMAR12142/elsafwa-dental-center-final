import { Link } from 'react-router'
import Services from './../pages/Services';
import Logo from '../imgs/logo.png';
import { IoMenu } from "react-icons/io5";
import Mobilemenu from './Mobilemenu';
import { useState } from 'react';
import Before_after from '../pages/Before_after';
export default function Navbar() {


  const [activeLink, setActiveLink] = useState("/");

  const [isShowmenu, setisShowmenu] = useState(false)
  return (
    <>
      <div className='nav flex z-50'  >
        <div className='logo '>
          <Link to="/" onClick={() => setActiveLink("/")}>      
           <img className='h-25 w-25 sm:h-8 sm:w-8 object-contain' src={Logo} alt="logo-img" />
          </Link>

        </div>
        <div className='links hidden md:flex gap-2 text-gray-700 font-medium '>
          <ul className='ul hidden md:flex gap-2 text-gray-700 font-medium'>
            <li className={activeLink === "/" ? "active" : ""}>
              <Link to="/" onClick={() => setActiveLink("/")}>الرئيسيه</Link>
            </li>
            <li className={activeLink === "/Services" ? "active" : ""}>
              <Link to="/Services" onClick={() => setActiveLink("/Services")}>الخدمات</Link>
            </li>
            <li className={activeLink === "/Aboutus" ? "active" : ""}>
              <Link to="/Aboutus" onClick={() => setActiveLink("/Aboutus")}>من نحن</Link>
            </li>
            <li className={activeLink === "/Before_after" ? "active" : ""}>
              <Link to="/Before_after" onClick={() => setActiveLink("/Before_after")}>حالات قبل وبعد</Link>
            </li>
            <li className={activeLink === "/Contactus" ? "active" : ""}>
              <Link to="/Contactus" onClick={() => setActiveLink("/Contactus")}>تواصل معنا </Link>
            </li>
          </ul>
        </div>
        <div className='icon  md:hidden block text-gray-600 focus:outline-none cursor-pointer '>
          <IoMenu className='text-[#2e3192]' size={30} onClick={() => setisShowmenu(true)} />
          <Mobilemenu isShowmenu={isShowmenu} setisShowmenu={setisShowmenu} />

        </div>




      </div>






    </>



  )
}
