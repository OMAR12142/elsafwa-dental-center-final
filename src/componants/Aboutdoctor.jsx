import React from "react";
import doctorImg from "../imgs/gal/Aboutdoc.WebP";
import { Clock, Award, CheckCircle } from "lucide-react";

export default function Aboutdoctor() {
  const certifications = [
    "شهادة الجودة الطبية بالأكاديمية الكندية للدراسات المتقدمة",
    "عضو الأكاديمية الأمريكية لطب الأسنان التجميلي",
    "البورد الأمريكي لتطبيقات الليزر في طب الأسنان",
    "دراسات عليا تركيبات الأسنان",
    "زميل الجمعية العالمية لتقويم الأسنان"
  ];

  return (
    <section className="bg-gradient-to-b from-[#fefefe] to-[#f3f3f39a] rounded-md px-6 md:px-16 lg:px-24 py-16" dir="rtl">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-16">
        
        {/* Text Content */}
        <div className="w-full xl:w-2/3 text-center xl:text-right">
          {/* Welcome Section */}
          <div className="mb-8">

            {/* Doctor Name */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              الدكتور <span className="text-[#ed1c24]">/ محمد حلمي الحسيني</span>
            </h1>
          </div>

          {/* Certifications */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
                  <CheckCircle className="w-6 h-6 text-[#ed1c24] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 text-lg font-medium text-right leading-relaxed">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full xl:w-1/3 flex justify-center">
          {/* Background Shape */}
          <div className="absolute top-8 bottom-4 right-8 left-8 bg-gradient-to-br from-[#d7e4ff] to-[#a8c6ff] rounded-2xl transform rotate-1"></div>
          
          {/* Doctor Image */}
          <div className="relative z-10 group">
            <img
              src={doctorImg}
              alt="الدكتور محمد حلمي الحسيني"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover relative z-10 rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

        </div>
      </div>

    </section>
  );
}