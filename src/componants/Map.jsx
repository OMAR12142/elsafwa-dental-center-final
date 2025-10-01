import React from 'react'
import { MapPin } from "lucide-react";

export default function Map() {
  return (



    <section className="py-10 px-4  text-center mt-[1rem]">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">موقع العيادة</h1>
      <p className="mb-6 text-gray-700 text-lg">
        تقدر تزورنا في: طنطا - 12 شارع درب الإبشيهي متفرع من شارع المديرية - الدور الرابع
      </p>

      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-blue-300">
        <iframe
          title="عيادة الصفوة على الخريطة"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.7377861803675!2d30.996413075569136!3d30.785572277907246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79d54b7582451%3A0xf39992c3b58e2936!2sDarb%20Qeshtah%20Alley%2012%2C%20Tanta%2C%20Gharbia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2seg!4v1691945800958!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <a
        href="https://www.google.com/maps/place/Darb+Qeshtah+Alley+12,+Tanta,+Gharbia,+Egypt/@30.785572,30.998602,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
      >
        افتح على Google Maps
      </a>
    </section>

























)
}
