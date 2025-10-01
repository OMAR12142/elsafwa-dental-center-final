import React from "react";
import { Link } from "react-router-dom";
import {
  FaTeethOpen,
  FaSeedling,
  FaSmile,
  FaTooth,
  FaUserMd,
  FaChild,
} from "react-icons/fa";

export default function Services_section_one() {
  const services = [
    {
      title: "التقويم",
      desc: "تصحيح اصطفاف الأسنان للحصول على ابتسامة مثالية.",
      icon: <FaTeethOpen />,
    },
    {
      title: "جراحات الفم و الزراعة",
      desc: "تعويض الأسنان المفقودة بأحدث تقنيات الزراعة.",
      icon: <FaSeedling />,
    },
    {
      title: "الحشوات التجميلية",
      desc: "استعادة شكل ووظيفة الأسنان بمظهر طبيعي.",
      icon: <FaSmile />,
    },
    {
      title: " التركيبات الثابتة والمتحركة" ,
      desc: "تركيبات ثابتة تدوم طويلاً وتعيد الجمال لابتسامتك.",
      icon: <FaTooth />,
    },
    {
      title: "حشو العصب",
      desc: "الحفاظ على الأسنان المصابة ومعالجة الألم.",
      icon: <FaUserMd />,
    },
    {
      title: "طب أسنان الأطفال    ",
      desc: "الحفاظ على الأسنان المصابة ومعالجة الألم.",
      icon: <FaChild />,
    },
  ];

  return (
    <section className="py-20 mt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-[#ED1C24] relative inline-block">
            خدماتنا
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            نقدم لك أفضل الخدمات بأحدث التقنيات الطبية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link to="/before_after" key={index}>
              <div className="bg-white p-8 rounded-2xl shadow-md cursor-pointer flex flex-col items-center text-center 
                transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#ED1C24] group">
                
                <div className="text-6xl text-[#ED1C24] mb-4 transition-all duration-300 
                  group-hover:text-white group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
