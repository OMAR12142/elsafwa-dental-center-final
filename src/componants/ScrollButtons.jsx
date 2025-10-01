import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollButtons() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/201002414953?text=${encodeURIComponent(
      "مرحبا، أود الاستفسار عن خدمات العيادة"
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#ed1c24] text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
      <button
        onClick={goToWhatsApp}
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={22} />
      </button>
    </div>
  );
}
