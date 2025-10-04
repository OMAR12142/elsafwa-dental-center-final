import React, { useState } from "react";
import { FaTooth, FaSeedling, FaSmileBeam, FaTeethOpen, FaProcedures, FaChild } from "react-icons/fa";


// التركيبات
import case1 from "../imgs/تركيبات/1.webp";
import case2 from "../imgs/تركيبات/2.webp";
import case3 from "../imgs/تركيبات/3.webp";
import case4 from "../imgs/تركيبات/4.webp";
import case5 from "../imgs/تركيبات/5.webp";
import case6 from "../imgs/تركيبات/6.webp";
import case7 from "../imgs/تركيبات/7.webp";
import case8 from "../imgs/تركيبات/8.webp";
import case9 from "../imgs/تركيبات/9.webp";
import case10 from "../imgs/تركيبات/10.webp";
import case11 from "../imgs/تركيبات/11.webp";
import case12 from "../imgs/تركيبات/12.webp";
import case13 from "../imgs/تركيبات/13.webp";
import case14 from "../imgs/تركيبات/14.webp";
import case15 from "../imgs/تركيبات/15.webp";
import case16 from "../imgs/تركيبات/16.webp";
import case17 from "../imgs/تركيبات/17.webp";
import case18 from "../imgs/تركيبات/18.webp";
import case19 from "../imgs/تركيبات/19.webp";
import case20 from "../imgs/تركيبات/20.webp";

// الحشوات التجميليه 

import case50 from "../imgs/الحشوات التجميلية/50.webp";
import case51 from "../imgs/الحشوات التجميلية/51.webp";
import case52 from "../imgs/الحشوات التجميلية/52.webp";
import case53 from "../imgs/الحشوات التجميلية/53.webp";
import case54 from "../imgs/الحشوات التجميلية/54.webp";
import case55 from "../imgs/الحشوات التجميلية/55.webp";
import case56 from "../imgs/الحشوات التجميلية/56.webp";
import case57 from "../imgs/الحشوات التجميلية/57.webp";
import case58 from "../imgs/الحشوات التجميلية/58.webp";
import case59 from "../imgs/الحشوات التجميلية/59.webp";
import case60 from "../imgs/الحشوات التجميلية/60.webp";
import case61 from "../imgs/الحشوات التجميلية/61.webp";



// التقويم

import case100 from "../imgs/التقويم/100.webp";
import case101 from "../imgs/التقويم/101.webp";
import case102 from "../imgs/التقويم/102.webp";
import case103 from "../imgs/التقويم/103.webp";
import case104 from "../imgs/التقويم/104.webp";
import case105 from "../imgs/التقويم/105.webp";
import case106 from "../imgs/التقويم/106.webp";
import case107 from "../imgs/التقويم/107.webp";
import case108 from "../imgs/التقويم/108.webp";


// جراجه الفم والزراعه 

import casea from "../imgs/جراحة الفم والزراعة/a.webp";
import caseb from "../imgs/جراحة الفم والزراعة/b.webp";
import casec from "../imgs/جراحة الفم والزراعة/c.webp";
import cased from "../imgs/جراحة الفم والزراعة/d.webp";
import casee from "../imgs/جراحة الفم والزراعة/e.webp";
import casel from "../imgs/جراحة الفم والزراعة/l.webp";
import caseg from "../imgs/جراحة الفم والزراعة/g.webp";
import caseh from "../imgs/جراحة الفم والزراعة/h.webp";
import casem from "../imgs/جراحة الفم والزراعة/m.webp";
import casen from "../imgs/جراحة الفم والزراعة/n.webp";
import caseo from "../imgs/جراحة الفم والزراعة/o.webp";
import caseq from "../imgs/جراحة الفم والزراعة/q.webp";
import caser from "../imgs/جراحة الفم والزراعة/r.webp";
import casev from "../imgs/جراحة الفم والزراعة/v.webp";
import casew from "../imgs/جراحة الفم والزراعة/w.webp";
import casex from "../imgs/جراحة الفم والزراعة/x.webp";
import casey from "../imgs/جراحة الفم والزراعة/y.webp";
import casez from "../imgs/جراحة الفم والزراعة/z.webp";
import caseAa from "../imgs/جراحة الفم والزراعة/a (2).webp";
import caseBA from "../imgs/جراحة الفم والزراعة/b (2).webp";


// علاج العصب 

import case30 from "../imgs/حشو العصب/30.webp";
import case31 from "../imgs/حشو العصب/31.webp";
import case32 from "../imgs/حشو العصب/32.webp";
import case33 from "../imgs/حشو العصب/33.webp";
import case34 from "../imgs/حشو العصب/34.webp";
import case35 from "../imgs/حشو العصب/35.webp";
import case36 from "../imgs/حشو العصب/36.webp";
import case37 from "../imgs/حشو العصب/37.webp";
import case38 from "../imgs/حشو العصب/38.webp";
import case39 from "../imgs/حشو العصب/39.webp";
import case40 from "../imgs/حشو العصب/40.webp";
import case41 from "../imgs/حشو العصب/000.webp";
import case42 from "../imgs/حشو العصب/42.webp";
import case44 from "../imgs/حشو العصب/44.webp";
import case45 from "../imgs/حشو العصب/45.webp";
import case46 from "../imgs/حشو العصب/46.webp";
import case47 from "../imgs/حشو العصب/47.webp";
import case48 from "../imgs/حشو العصب/48.webp";
import case49 from "../imgs/حشو العصب/49.webp";
import case499 from "../imgs/حشو العصب/499.webp";
import case123 from "../imgs/حشو العصب/123.webp";






// طب اسنان الاطفال

import case6000 from "../imgs/طب اسنان الاطفال/60.webp";
import case6100 from "../imgs/طب اسنان الاطفال/61.webp";
import case65 from "../imgs/طب اسنان الاطفال/63.webp";
import case66 from "../imgs/طب اسنان الاطفال/64.webp";
import case67 from "../imgs/طب اسنان الاطفال/67.webp";
import case68 from "../imgs/طب اسنان الاطفال/68.webp";
import case69 from "../imgs/طب اسنان الاطفال/69.webp";
import case70 from "../imgs/طب اسنان الاطفال/70.webp";
import case71 from "../imgs/طب اسنان الاطفال/71.webp";






export default function Before_after() {
  const cases = [

    // تركيبات
    { img: case1, type: "التركيبات الثابتة والمتحركة" },
    { img: case2, type: "التركيبات الثابتة والمتحركة" },
    { img: case3, type: "التركيبات الثابتة والمتحركة" },
    { img: case4, type: "التركيبات الثابتة والمتحركة" },
    { img: case5, type: "التركيبات الثابتة والمتحركة" },
    { img: case6, type: "التركيبات الثابتة والمتحركة" },
    { img: case7, type: "التركيبات الثابتة والمتحركة" },
    { img: case8, type: "التركيبات الثابتة والمتحركة" },
    { img: case9, type: "التركيبات الثابتة والمتحركة" },
    { img: case10, type: "التركيبات الثابتة والمتحركة" },
    { img: case11, type: "التركيبات الثابتة والمتحركة" },
    { img: case12, type: "التركيبات الثابتة والمتحركة" },
    { img: case13, type: "التركيبات الثابتة والمتحركة" },
    { img: case14, type: "التركيبات الثابتة والمتحركة" },
    { img: case15, type: "التركيبات الثابتة والمتحركة" },
    { img: case16, type: "التركيبات الثابتة والمتحركة" },
    { img: case17, type: "التركيبات الثابتة والمتحركة" },
    { img: case18, type: "التركيبات الثابتة والمتحركة" },
    { img: case19, type: "التركيبات الثابتة والمتحركة" },
    { img: case20, type: "التركيبات الثابتة والمتحركة" },
    
    
    
    
    // حشوات
    
    { img: case50, type: "الحشوات التجميلية" },
    { img: case52, type: "الحشوات التجميلية" },
    { img: case51, type: "الحشوات التجميلية" },
    { img: case53, type: "الحشوات التجميلية" },
    { img: case54, type: "الحشوات التجميلية" },
    { img: case55, type: "الحشوات التجميلية" },
    { img: case56, type: "الحشوات التجميلية" },
    { img: case57, type: "الحشوات التجميلية" },
    { img: case58, type: "الحشوات التجميلية" },
    { img: case59, type: "الحشوات التجميلية" },
    { img: case60, type: "الحشوات التجميلية" },
    { img: case61, type: "الحشوات التجميلية" },
    
    // التقويم
    { img: case100, type: "التقويم" },
    { img: case101, type: "التقويم" },
    { img: case102, type: "التقويم" },
    { img: case103, type: "التقويم" },
    { img: case104, type: "التقويم" },
    { img: case105, type: "التقويم" },
    { img: case106, type: "التقويم" },
    { img: case107, type: "التقويم" },
    { img: case108, type: "التقويم" },
    
    // جراحه الفم والزراعه
    
        { img: caseAa, type: "جراحة الفم والزراعة" },
    { img: caseBA, type: "جراحة الفم والزراعة" },
    { img: casea, type: "جراحة الفم والزراعة" },
    { img: caseb, type: "جراحة الفم والزراعة" },
    { img: casec, type: "جراحة الفم والزراعة" },
    { img: cased, type: "جراحة الفم والزراعة" },
    { img: casee, type: "جراحة الفم والزراعة" },
    { img: casel, type: "جراحة الفم والزراعة" },
    { img: caseg, type: "جراحة الفم والزراعة" },
    { img: caseh, type: "جراحة الفم والزراعة" },
    { img: casem, type: "جراحة الفم والزراعة" },
    { img: casen, type: "جراحة الفم والزراعة" },
    { img: caseo, type: "جراحة الفم والزراعة" },
    { img: caseq, type: "جراحة الفم والزراعة" },
    { img: caser, type: "جراحة الفم والزراعة" },
    { img: casev, type: "جراحة الفم والزراعة" },
    { img: casew, type: "جراحة الفم والزراعة" },
    { img: casex, type: "جراحة الفم والزراعة" },
    { img: casey, type: "جراحة الفم والزراعة" },
    { img: casez, type: "جراحة الفم والزراعة" },
    { img: casez, type: "جراحة الفم والزراعة" },
    { img: casez, type: "جراحة الفم والزراعة" },
    
    
    
    
    // علاج العصب 
    
    
    { img: case30, type: "علاج العصب" },
    { img: case31, type: "علاج العصب" },
    { img: case32, type: "علاج العصب" },
    { img: case33, type: "علاج العصب" },
    { img: case34, type: "علاج العصب" },
    { img: case35, type: "علاج العصب" },
    { img: case36, type: "علاج العصب" },
    { img: case37, type: "علاج العصب" },
    { img: case38, type: "علاج العصب" },
    { img: case39, type: "علاج العصب" },
    { img: case40, type: "علاج العصب" },
    { img: case41, type: "علاج العصب" },
    { img: case42, type: "علاج العصب" },
    { img: case44, type: "علاج العصب" },
    { img: case45, type: "علاج العصب" },
    { img: case46, type: "علاج العصب" },
    { img: case47, type: "علاج العصب" },
    { img: case48, type: "علاج العصب" },
    { img: case49, type: "علاج العصب" },
    { img: case499, type: "علاج العصب" },
    { img: case123, type: "علاج العصب" },
    
    // طب اسنان الاطفال 
    
    { img: case6000, type: "طب أسنان الأطفال" },
    { img: case6100, type: "طب أسنان الأطفال" },
    { img: case65, type: "طب أسنان الأطفال" },
    { img: case66, type: "طب أسنان الأطفال" },
    { img: case67, type: "طب أسنان الأطفال" },
    { img: case68, type: "طب أسنان الأطفال" },
    { img: case69, type: "طب أسنان الأطفال" },
    { img: case70, type: "طب أسنان الأطفال" },
    { img: case71, type: "طب أسنان الأطفال" },















  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedType, setSelectedType] = useState("الكل");

  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 9; 
  const filteredCases =
    selectedType === "الكل"
      ? cases
      : cases.filter((c) => c.type === selectedType);

  const indexOfLast = currentPage * casesPerPage;
  const indexOfFirst = indexOfLast - casesPerPage;
  const currentCases = filteredCases.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredCases.length / casesPerPage);

  const types = [
    { name: "الكل", icon: FaSmileBeam },
    { name: "التقويم", icon: FaTooth },
    { name: "جراحة الفم والزراعة", icon: FaSeedling },
    { name: "الحشوات التجميلية", icon: FaSmileBeam },
    { name: "التركيبات الثابتة والمتحركة", icon: FaTeethOpen },
    { name: "علاج العصب", icon: FaProcedures },
    { name: "طب أسنان الأطفال", icon: FaChild },
  ];

  return (
    <section className="mt-25 py-16 px-4 md:px-10 bg-gray-50 font-[Cairo]">
      <h1 className="text-4xl font-bold text-center text-[#ED1C24] mb-10">
        حالات قبل وبعد
      </h1>

      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {types.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => {
              setSelectedType(name);
              setCurrentPage(1); 
            }}
            className={`cursor-pointer flex flex-col items-center p-4 rounded-xl shadow-md transition border-2 w-28 hover:shadow-lg ${
              selectedType === name
                ? "bg-[#ED1C24] text-white border-[#ED1C24]"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
            }`}
          >
                  <Icon className="text-2xl mb-2" />

            <span className="text-sm text-center font-medium">{name}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentCases.map((c, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={() => setSelectedImage(c.img)}
          >
<img
  src={c.img}
  alt={`حالة ${c.type} ${i + 1}`}
  className="w-full h-[400px] object-cover"
/>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-md border  cursor-pointer ${
              currentPage === index + 1
                ? "bg-[#ED1C24] text-white border-[#ED1C24]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full px-4 animate-fadeScale flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Before and After"
              className="max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-[-35px] right-5 cursor-pointer text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
