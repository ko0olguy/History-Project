"use client";
import { Lugrasimo } from "next/font/google";
import { Vortex } from "../../components/newbg";
import { TextRevealCard as TextRev, TextRevealCardTitle } from "../../components/textReveal";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

const lug = Lugrasimo({
  weight: "400",
  subsets: ["latin"]
})



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    // Slide 1: Overview
     {
       title: "The Ottoman Empire: Rise and Resilience",
       bullets: [
         "Osman I, leader of Turkish tribes, sought to unite the tribes and expand his territory.",
         "Inherited a dedication to Islam from his father, Ertugral, fueling his ambition.",
         "Capitalized on the weakened Byzantine Empire, vulnerable after Mongol raids and Christian crusades.",
         "Founded the capital in Sogut near Bursa, marking the Ottoman Empire's beginning.",
         "Became one of history's most expansive and successful empires."
       ]
     },
     // Slide 2: Government Structure
     {
       title: "Foundations of Power",
       bullets: [
         "Implemented an absolute monarchy, with the Sultan holding supreme power.",
         "Bureaucratic system managed by the Grand Vizier ensured efficient administration.",
         "Devşirme system produced skilled soldiers and officials from conquered Christian populations.",
         "Millet system granted religious freedom to non-Muslims, promoting peace within diverse territories.",
         "Regional governors (Beylerbeys) maintained order across vast regions.",
         "Siyaset system imposed harsh punishments to deter government corruption."
       ]
     },
     // Slide 3: Expansion and Military Might 
     {
         title: "A Force to be Reckoned With",
         bullets: [
             "Spanned Southeastern Europe, Western Asia, and North Africa at its peak.",
             "Strategic conquests, including Constantinople in 1453,  positioned the empire as a major Eurasian power.",
             "Advanced siege warfare tactics and weaponry facilitated the conquest of fortified cities.",
             "Elite Janissary corps, formed through the devşirme system, were a formidable fighting force.", 
             "Controlled vital trade routes between Europe and Asia, generating immense wealth."
         ]
     },
     // Slide 4: Society and Religious Tolerance
     {
         title: "A Diverse Empire",
         bullets: [
           "Millet system allowed non-Muslim communities (Jews, Christians) self-governance in matters of faith and law.",
           "This flexibility fostered stability and cooperation within the empire's diverse populations.",
           "Istanbul emerged as a cosmopolitan center, attracting merchants, artisans, and scholars from various backgrounds."
         ]
     },
     // Slide 5: Economic Power
     { 
         title: "Prosperity and Trade",
         bullets: [
           "Strategic location on the Silk Road and control of key trade routes fueled economic success.",
           "Istanbul developed into a major commercial hub, linking Europe, Asia, and Africa.",
           "State-regulated markets and a stable currency system supported flourishing trade networks."
         ]
     },
     // Slide 6: Art and Architecture
     { 
         title: "Cultural Legacy",
         bullets: [
           "Patronized grand architectural projects, including mosques, palaces, and public works.",
           "Blended Byzantine, Persian, and Islamic artistic traditions, creating a distinctive Ottoman style.",
           "Promoted the advancement of literature, poetry,  and calligraphy."
         ]
     },
     // Slide 7: Conclusion
     { 
         title: "An Enduring Legacy",
         bullets: [
           "The Ottoman Empire left an indelible mark on the world, influencing geopolitics, culture, and architecture across three continents.",
           "Endured for six centuries, a testament to its strength, adaptability, and innovative governance.", 
           "Continued to inspire and shape the modern Middle East, even after its fall."
         ]
     }
   ]
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
  }

  const handlePreviousSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(7)
    }
    setCurrentSlide((prevSlide) => (prevSlide - 1) % slideData.length);
  }

  return (
    <div className="grid w-full max-h-[100vh]">
      <Vortex className="flex md:px-10  py-4 w-full h-[100vh]" backgroundColor="black" particleCount={750} rangeY={1000} baseSpeed={-0.5} baseHue={310}>
        <div className="text-white grid content-center items-center mx-auto">
        <div className="grid content-between gap-5 bg-slate-200/30 rounded-xl p-5">
      <h2 className="text-2xl font-semibold text-center">{slideData[currentSlide].title}</h2> 
      <ul className="list-disc pl-6"> {/* Tailwind classes for list */}
        {slideData[currentSlide].bullets.map((bullet, index) => (
          <li key={index}>
            <div>
              {bullet}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 place-content-center">
        <Button onClick={handlePreviousSlide} className="text-white font-bold py-2 px-4 rounded" isIconOnly variant="light">{"<"}</Button>
        <Button onClick={handleNextSlide} className="text-white font-bold py-2 px-4 rounded" isIconOnly variant="light">{">"}</Button>
      </div>
    </div>

        </div>
        <div className="mt-10 absolute px-[20%]">
            <TextRev text="Osmanlı İmparatorlugunun Zirvesi" revealText="The Peak of The Ottoman Empire" className={lug.className}><TextRevealCardTitle className="hidden">Hover</TextRevealCardTitle></TextRev>
        </div>
        
      </Vortex>
      
    </div>
  )
}
