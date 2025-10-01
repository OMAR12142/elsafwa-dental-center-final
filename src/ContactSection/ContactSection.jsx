import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/201002414953?text=${encodeURIComponent(
    "مرحبا، أود حجز موعد"
  )}`;

  const contactCards = [
    {
      icon: <FaPhoneAlt className="text-[#ED1C24] text-3xl mb-3" />,
      title: "الهاتف",
      content: (
        <a
          href="tel:+201002414953"
          className="text-gray-600 hover:text-[#ED1C24] transition"
        >
          +20 100 2414953
          <br />040/3337526
        </a>
      ),
    },
    {
      icon: <FaEnvelope className="text-[#ED1C24] text-3xl mb-3" />,
      title: "البريد الإلكتروني",
      content: (
        <a
          href="mailto:alsafwa.dentalcenter@gmail.com"
          className="text-gray-600 hover:text-[#ED1C24] transition break-words"
        >
          alsafwa.dentalcenter@gmail.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-[#ED1C24] text-3xl mb-3" />,
      title: "العنوان",
      content: (
        <a
          href="https://www.google.com/maps/place/Darb+Qeshtah+Alley+12,+Tanta,+Gharbia,+Egypt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          طنطا، شارع درب قشطه
        </a>
      ),
    },
    {
      icon: <FaClock className="text-[#ED1C24] text-3xl mb-3" />,
      title: "ساعات العمل",
      content: "٢ مساءً – ٩ مساءً",
    },
    
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 mt-20 font-[Cairo]">
      {/* عنوان الصفحة */}
      <header className="text-center mb-14">
        <h1 className="text-[#ED1C24] text-4xl font-extrabold mb-4 relative inline-block">
          تواصل معنا
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          نحن هنا للإجابة على أسئلتك وحجز مواعيدك بسهولة. يمكنك الاطلاع على
          مواعيد العمل بالأسفل والتواصل معنا عبر الواتساب أو أي وسيلة من وسائل
          الاتصال.
        </p>
      </header>

      {/* جدول المواعيد */}
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden mb-10">
        <table className="w-full text-center text-gray-700">
          <thead className="bg-[#ED1C24] text-white">
            <tr>
              <th className="py-3 px-4 text-lg">اليوم</th>
              <th className="py-3 px-4 text-lg">الوقت</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">السبت – الأربعاء</td>
              <td className="py-3 px-4">٢ مساءً – ٩ مساءً</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">الحجز</td>
              <td className="py-3 px-4">١٢ ظهرًا – ٢ ظهرًا</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium">الخميس والجمعة</td>
              <td className="py-3 px-4 text-red-500 font-bold">إجازة</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* زر واتساب */}
      <div className="text-center mb-14">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white text-lg rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105"
        >
          <FaWhatsapp size={26} />
          تواصل عبر واتساب
        </a>
      </div>

      {/* كروت بيانات التواصل */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {contactCards.map((card, idx) => (
          <div
            key={idx}
            className="cursor-pointer bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:bg-gray-50"
          >
            {card.icon}
            <h4 className="font-bold text-lg mb-1 text-gray-800">{card.title}</h4>
            <div className="text-base">{card.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
