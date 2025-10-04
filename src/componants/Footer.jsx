import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import logo from "../imgs/logo.webp";

export default function Footer() {
  const message = `👋 مرحباً، أود الاستفسار عن خدمات عيادة الصفوة.`;
  const whatsappUrl = `https://wa.me/201002414953?text=${encodeURIComponent(
    message
  )}`;

  function gowhats() {
    window.open(whatsappUrl, "_blank");
  }

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white text-gray-800 pt-12 pb-6 px-6 sm:px-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        <div className="text-center md:text-start">
          <img
            src={logo}
            alt="Logo"
            className="w-48 mx-auto md:mx-0 mb-6 drop-shadow-md"
          />
          <div className="flex justify-center md:justify-start gap-6 text-[#ed1c24] text-3xl">
            <a
              target="_blank"
              href="https://www.facebook.com/alsafwa.dental.center"
              className="hover:text-[#2a21a3] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCulCu50d0EzInaVuO8or-PA"
              className="hover:text-[#2a21a3] transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <button
              onClick={gowhats}
              className="hover:text-green-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </button>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Darb+Qeshtah+Alley+12,+Tanta,+Gharbia,+Egypt"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </a>
          </div>
        </div>

        <div className="text-center md:text-start">
          <h3 className="font-bold text-2xl mb-4 text-[#ed1c24]">الخدمات</h3>
          <ul className="space-y-3 text-lg leading-relaxed">
            <li>جراحات الفم </li>
            <li>زراعة الأسنان</li>
            <li>تقويم الأسنان</li>
            <li>طب أسنان الأطفال</li>
            <li>التركيبات الثابتة والمتحركة</li>
            <li>علاج اللثة</li>
            <li>حشو العصب</li>
            {/* <li>هوليود سمايل / فينير</li> */}
            <li>تبييض الأسنان بالليزر</li>
          </ul>
        </div>

        <div className="text-center md:text-start">
          <h3 className="font-bold text-2xl mb-4 text-[#ed1c24]">تواصل معنا</h3>
          <p className="text-lg mb-3">
            <span className="font-semibold">📞 رقم الهاتف:</span>
            <br /> +20 10 02414953 
            <br />040/3337526 
 
            
          </p>
          <p className="text-lg mb-3">
            <span className="font-semibold">📧 البريد الإلكتروني:</span>
            <br /> alsafwa.dentalcenter@gmail.com
          </p>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">🕒 مواعيد العمل:</span>
            <br /> من السبت للأربعاء من الساعة ٢ - ٩ مساءً <br />
            الحجز من ١٢ - ٢
            <br />
            <span className="text-red-500">الخميس والجمعة أجازة</span>
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t pt-4">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لعيادة الصفوة لطب الأسنان.
      </div>
    </footer>
  );
}
