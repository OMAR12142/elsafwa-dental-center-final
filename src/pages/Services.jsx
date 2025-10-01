import React from "react";
import { FaTooth, FaSmile, FaXRay, FaTeethOpen, FaUserMd, FaHospital } from "react-icons/fa";
import Services_section_one from "../services_sections/Services_section_one";
import FAQSection from "../componants/FAQSection";
import Home_third from "../Home_sections/home_third";



export default function Services() {
  return (
            <div className="container mx-auto px-4 font-[Cairo]">


<Services_section_one/>
    <Home_third/>

<FAQSection/>
    </div>
  )
}
