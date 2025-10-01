import { useEffect, useState } from "react";
import { Star, Award, Users, Clock } from "lucide-react";

export default function AboutusFirst() {
  const [count, setCount] = useState(0);
  const target = 20;

  useEffect(() => {
    let timer;
    if (count < target) {
      timer = setTimeout(() => setCount(count + 1), 80);
    }
    return () => clearTimeout(timer);     
  }, [count]);


  return (
    <section className="py-20 font-[Cairo] bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-[#ED1C24] text-4xl md:text-5xl font-extrabold mb-4">
            من نحن
          </h1>
          <div className="w-20 h-1 bg-[#ED1C24] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[#ED1C24] text-3xl md:text-4xl font-bold">
                  مركز الصفوة
                </h2>
              </div>
              
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
                في مركز الصفوة نقدم أفضل الخدمات الطبية منذ أكثر من عقدين من الزمن،
                مع التزام تام بالجودة والاحترافية في رعاية المرضى.
              </p>
            </div>

            {/* Features Grid */}
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
              {/* Animated Counter */}
              <div className="relative mb-4">
                <h3 className="relative text-6xl md:text-7xl font-extrabold text-[#ED1C24]">
                  {count}+
                </h3>
              </div>
              
              <p className="text-xl md:text-2xl text-[#ED1C24] font-bold">
                سنة خبرة
              </p>
              
              {/* Progress Bar */}
              <div className="w-32 h-2 bg-gray-200 rounded-full mt-4 mx-auto overflow-hidden">
                <div 
                  className="h-full bg-[#ED1C24] rounded-full transition-all duration-300"
                  style={{ width: `${(count / target) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#ED1C24] rounded-tr-lg"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#ED1C24] rounded-bl-lg"></div>
          </div>
        </div>

      </div>
    </section>
  );
}