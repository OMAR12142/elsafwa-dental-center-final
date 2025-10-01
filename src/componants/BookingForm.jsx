import { useState } from "react";
import { FaWhatsapp, FaUser, FaPhone, FaTooth, FaCalendarCheck } from "react-icons/fa";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "جراحات الفم",
    "حشو العصب",
    "تقويم الأسنان",
    "زراعة الأسنان",
    "علاج اللثة",
    "تبييض الأسنان",
    "التركيبات الثابتة والمتحركة",
    "طب أسنان الأطفال"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const { name, phone, service } = formData;
    
    if (!name || !phone || !service) {
      alert("من فضلك املأ كل البيانات المطلوبة");
      return;
    }

    setIsSubmitting(true);

    const message = `👋 مرحباً،
أنا ${name}
📱 رقم الهاتف: ${phone}
🦷 الخدمة المطلوبة: ${service}

أرغب في حجز موعد في مركز الصفوة لطب الأسنان`;

    const whatsappNumber = "201002414953"; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-12 px-6 sm:px-8 md:px-16 rounded-3xl shadow-2xl max-w-4xl mx-auto mt-10 border border-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#ED1C24] mb-3">
          احجز موعدك الآن
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          اختر الخدمة المطلوبة واملأ بياناتك وسيتم التواصل معك لتأكيد الموعد
        </p>
      </div>

      {/* Form */}
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaUser />
          </div>
          <input
            type="text"
            name="name"
            placeholder="الاسم بالكامل"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/50 focus:border-[#ED1C24] transition-all duration-300 bg-white"
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaPhone />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/50 focus:border-[#ED1C24] transition-all duration-300 bg-white"
          />
        </div>

        <div className="relative">
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaTooth />
          </div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED1C24]/50 focus:border-[#ED1C24] transition-all duration-300 bg-white appearance-none cursor-pointer"
          >
            <option value="">اختر الخدمة المطلوبة</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-l cursor-pointer bg-[#ED1C24]  transform hover:scale-105 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 text-white border-white border-t-transparent rounded-full animate-spin"></div>
              جاري التحميل...
            </>
          ) : (
            <>
              <FaWhatsapp className="text-xl text-white" />
             <p className="text-white">
              احجز عبر واتساب
              
              </p>  
            </>
          )}
        </button>
      </div>

    </section>
  );
};

export default BookingForm;