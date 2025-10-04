import React, { useEffect, useState } from "react";
import Doctor from "../imgs/doctor.WebP";
import Doctor2 from "../imgs/doctor2.WebP";
import Doctor6 from "../imgs/doctor6.WebP";
import { FaWhatsapp, FaClock, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

export default function HeroContactSection() {
  const images = [Doctor, Doctor2,Doctor6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, images.length]);

  const handleWhatsappClick = () => {
    const phoneNumber = "201002414953";
    const message = "مرحبًا، أودّ الاستفسار عن إحدى خدمات العيادة.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full mt-10">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bg-slide {
          transition: background-image 1s ease-in-out;
        }
        @media (max-width: 768px) {
          .mobile-full {
            height: 100dvh;
          }
        }
      `}</style>

      {/* HERO / SLIDER */}
      <div
        className="mobile-full md:h-[85vh] w-full relative overflow-hidden bg-slide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            aria-hidden={currentIndex !== idx}
            className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
              currentIndex === idx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15)), url(${img})`,
            }}
          />
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-0">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
              مركز الصفوة – خبرة 20 عامًا في طب وجراحة الفم والأسنان
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white/90 font-semibold mb-4">
               دكتور / محمد حلمي الحسيني
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-6">
              نلتزم بتقديم رعاية متقدمة بأحدث التقنيات وبإهتمام شخصي لكل مريض.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
              <button
                onClick={handleWhatsappClick}
                className="cursor-pointer relative inline-flex items-center gap-3 px-6 py-3 bg-[#ed1c24] text-white rounded-full font-semibold shadow-lg hover:scale-[1.03] transition transform"
              >
                <FaWhatsapp className="w-5 h-5" />
                احجز الآن
              </button>

              <a
                href="https://www.facebook.com/alsafwa.dentalcenter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/90 text-[#111827] rounded-full font-medium shadow-sm hover:shadow-md hover:scale-[1.03] transition transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.41h3.128V8.797c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.098 2.797.142v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
                </svg>
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* جدول مواعيد العمل الجديد */}
      <div className="relative z-30 -mt-10 sm:-mt-20 flex justify-center px-4">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-3xl animate-[fadeInUp_600ms_ease_1]">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#ed1c24] mb-6 text-center">
            مواعيد العمل
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-[#ed1c24] w-5 h-5" />
                <span className="font-medium  text-gray-800">من السبت - إلى الأربعاء</span>
              </div>
              <span className="text-[#ed1c24]  font-semibold">٢ مساءً  -  إلى ٩ مساءً</span>
            </div>

            <div className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#ed1c24] w-5 h-5" />
                <span className="font-medium text-gray-800">الحجز</span>
              </div>
              <span className="text-[#ed1c24] font-semibold">١٢ - ٢ ظهراً</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaClock className="text-[#ed1c24] w-5 h-5" />
                <span className="font-medium text-gray-800">الخميس - الجمعة</span>
              </div>
              <span className="text-[#ed1c24] font-bold">إجازة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
