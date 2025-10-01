import React from "react";
import { FaTooth, FaPlay, FaYoutube, FaHeart } from "react-icons/fa";

export default function Maindoctor() {
  const videoData = {
    title: "لقاء الدكتور محمد حلمي الحسيني على قناة الصحة والجمال",
    channel: "الصحة والجمال",
    description: "يوضح الدكتور محمد حلمي الحسيني أبرز المفاهيم الخاطئة والشائعة بين المرضى حول صحة الفم والأسنان، ويقدم تصحيحًا علميًا مبنيًا على الخبرة والممارسة الطبية الحديثة.",
    videoId: "QJURr4tm5Nk"
  };

  return (
    <div className="relative bg-gradient-to-br from-[#fefefe] via-blue-50/30 to-[#f5f5f5] py-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 text-[#ED1C24]/10">
        <FaTooth className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 text-[#1A237E]/10">
        <FaHeart className="w-full h-full" />
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Header Section */}
        <div className="mb-8 opacity-0 animate-fadeInUp">
          <h1  className="text-3xl text-[#ED1C24] font-bold mb-2">
             في لقاء تلفزيوني  
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed mb-8 opacity-0 animate-fadeInUp delay-400">
          في لقاء تلفزيوني على قناة{" "}
          <span className="font-bold text-[#ED1C24] bg-blue-50 px-2 py-1 rounded-lg">
            {videoData.channel}
          </span>
          ، يوضح الدكتور محمد حلمي الحسيني أبرز المفاهيم الخاطئة والشائعة بين المرضى
          حول صحة الفم والأسنان، ويقدم تصحيحًا علميًا مبنيًا على الخبرة والممارسة
          الطبية الحديثة.
        </p>

        {/* Video Container */}
        <div className="w-full max-w-4xl opacity-0 animate-fadeInUp delay-600">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-sm border border-white/50">
            {/* Video Header */}
            <div className="bg-gradient-to-r from-[#1A237E] to-[#303f9f] p-4 flex items-center gap-3">
              <FaYoutube className="text-white text-xl" />
              <span className="text-white font-bold text-lg">
                {videoData.title}
              </span>
            </div>
            
            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoData.videoId}`}
                title={videoData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Video Footer */}
            <div className="bg-white p-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                {videoData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}