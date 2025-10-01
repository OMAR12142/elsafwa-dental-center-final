import React from 'react';
import { FaVideo } from 'react-icons/fa';

const videos = [
  'QJURr4tm5Nk',
  'gL-uGQbgwa0',
  'weLXzrx-HZs',
  '5LasuNyOT5o',
  'Fan7H30rAUo',
  '93z5UfK1qF8'
];

export default function Doctorintv() {
  return (
    <section className="relative bg-gradient-to-b from-[#fefefe] to-[#f5f5f5] py-16 px-4 md:px-10 overflow-hidden">

      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ED1C24]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1A237E]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-white bg-[#ED1C24] px-6 py-3 rounded-full shadow-lg inline-flex items-center gap-3 animate-fadeIn">
        <FaVideo className="text-white text-xl" />
        حلقات من قناة مركز الصفوة لطب الاسنان
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((id, index) => (
          <div
            key={index}
            className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 transform transition-transform duration-300 hover:scale-105 animate-slideUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}`}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </section>
  );
}
