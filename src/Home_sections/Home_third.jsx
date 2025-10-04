import React from 'react'
import Diamond from '../imgs/gal/diamond.WebP'

export default function Home_third() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* النص على اليمين */}
        <div className="md:w-2/5 lg:w-[70%] ">
          <h1 className="text-5xl font-bold text-gray-800">
              اسنانك.. جوهرة صحتك وجمالك

          </h1>
          <h2 className="text-3xl mt-10 font-bold text-[#ED1C24]">
           صحتك تبدأ عندنا

          </h2>
          <p className='mt-5 text-gray-800'> "  الأسنان ليست مجرد أداة للمضغ أو جزء من مظهرنا الخارجي، بل هي أشبه بالجوهرة التي 
  تعكس صحة الإنسان بالكامل. إهمال العناية بها قد يؤدي إلى مشكلات صحية تمتد إلى 
  القلب والجهاز الهضمي، بينما الحفاظ عليها يمنحك ابتسامة مشرقة وثقة عالية في 
  النفس. الفحص الدوري وتنظيف الأسنان بالطرق الصحيحة واستخدام الخيط الطبي 
  والابتعاد عن العادات الضارة، كلها خطوات تحافظ على قوة أسنانك وجمالها لسنوات 
  طويلة. تذكّر أن كل استثمار في صحة أسنانك اليوم هو استثمار في صحتك وجودة حياتك 
  غدًا.
"

</p>
        </div>

        {/* الصورة على الشمال */}
        <div className="md:w-3/5 flex justify-center items-center ">
          <img
            src={Diamond}
            alt="Support"
            className="w-full max-w-md object-cover rounded-lg "
          />
        </div>
      </div>
    </section>


























    </div>
  )
}
