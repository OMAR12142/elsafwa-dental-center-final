import React from 'react'
import Fristsection from '../Home_sections/Fristsection'
import SecondSection from '../Home_sections/SecondSection'
import Map from '../componants/Map'
import Doctorintv from '../componants/Doctorintv'
import FAQSection from '../componants/FAQSection'
import Services_second_section from '../services_sections/Services_second_section'

export default function Home() {
  return (
            <div className="container mx-auto px-4">
    
    <div className='home font-[Cairo]'>
    <Fristsection/>
    
    <SecondSection/>
    <Map/>
<Services_second_section/>
    <FAQSection/>


</div>



    </div>
  )
}
