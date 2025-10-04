import React from "react";
import BookingForm from "../componants/BookingForm";
import logo from "../imgs/logo.webp";
import { FaAward, FaTooth, FaTools, FaUserFriends, FaMapMarkerAlt } from "react-icons/fa";

export default function SecondSection() {
  const features = [
    {
      icon: <FaAward className="text-3xl text-[#ED1C24]" />,
      title: "خبرة 20 سنة",
      desc: "نتميز بخبرة طويلة بنضمن بيها أعلى جودة خدمة وراحة للمريض.",
    },

 {
      icon: <FaUserFriends className="text-3xl text-[#ED1C24]" />,
      title: "رعاية شخصية",
      desc: "من أول اتصال حتى نهاية خطة علاجك، نهتم بك بأدق التفاصيل.",
    },





    {
      icon: <FaTools className="text-3xl text-[#ED1C24]" />,
      title: "أحدث التقنيات",
      desc: "بنستخدم أحدث الأجهزة والتقنيات لضمان نتائج دقيقة وآمنة.",
    },
    {
      icon: <FaTooth className="text-3xl text-[#ED1C24]" />,
      title: "تنوع في الخدمات",
      desc: "جراحات ، زراعة ، تقويم  ، علاج اللثة ,  تبييض ، فينير ، تركيبات وغيرهم.",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#ED1C24]" />,
      title: "موقع مميز",
      desc: "موقع يسهل الوصول إليه ويوفر لك كل سُبل الراحة.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl font-extrabold text-[#ED1C24] relative inline-block">
          الصفوة... 20 عاماً من الخبرة
        </h1>
        <p className="mt-4 text-gray-600 text-2xl">
           في رعاية ابتسامتك بأحدث التقنيات وأفضل الخبرات
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center px-4">
        
        <div className="md:col-span-5 space-y-6">
          <div>
            <h2 className="text-gray-700 font-medium text-2xl mb-3 mr-3">لا تتردد في اختيار</h2>
            <img className="w-3/4" src={logo} alt="Logo" />
          </div>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 p-6 rounded-2xl">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
