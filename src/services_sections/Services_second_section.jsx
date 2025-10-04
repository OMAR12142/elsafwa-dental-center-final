import React from 'react'

import teethb from '../imgs/تجميل اسنانك مهمتنا.WebP'
export default function Services_second_section() {
  return (
    <div>



    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* النص على اليمين */}
        <div className="md:w-2/5 lg:w-[70%] ">
          <h1 className="text-5xl font-bold text-gray-800">
            صحتك تبدأ عندنا
!
          </h1>
          <h2 className="text-3xl mt-6 font-bold text-[#ED1C24]">
            "معاك خطوة بخطوة… عشان ابتسامتك تكتمل"
          </h2>
          <p className='mt-4 text-gray-800'> "في مركز الصفوة لطب الاسنان، نحن نحرص على أن تكون رحلتك العلاجية واضحة ومريحة منذ البداية وحتى اكتمال العلاج. نعمل على شرح كل خطوة من خطة العلاج بشكل مبسط، سواء كان الأمر يتعلق بحشوات الأسنان، علاج اللثة، التقويم، أو التجميل. نستخدم أحدث الأجهزة والتقنيات لضمان أفضل النتائج مع الحفاظ على أعلى معايير التعقيم والسلامة. هدفنا هو علاج مشكلتك الحالية ومساعدتك على الحفاظ على صحة أسنانك وفمك على المدى الطويل، مع متابعة مستمرة حتى بعد انتهاء العلاج."

</p>
        </div>

        {/* الصورة على الشمال */}
        <div className="md:w-3/5 flex justify-center items-center ">
          <img
            src={teethb}
            alt="Support"
            className="w-full max-w-md object-cover rounded-lg "
          />
        </div>
      </div>
    </section>













































    </div>
  )
}
