import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import FAQ from '../components/sections/faq'
import BeinSportsLogo from '../../public/Bein_sport_logo.svg.png'
import BTLogo from '../../public/btlogo.png'
import BBCLogo from '../../public/bbc.png'
import NLZIETLogo from '../../public/Ziggo.svg'
import SkyLogo from '../../public/Sky_Sports_Logo.webp'

function HomePage() {
  const navigate = useNavigate()

  const handleWhatsAppContact = () => {
    navigate('/subscription?type=trial&plan=trial')
  }

  const handleScrollToPricing = () => {
    navigate('/pricing')
  }
  const logos = [
    { img: BeinSportsLogo },
    { img: BTLogo },
    { img: BBCLogo, filter: 'invert brightness-0', bg: 'bg-red-600'},
    { img: NLZIETLogo },
    { img: SkyLogo },
    
  ];
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-40">
      <HeroSection 
        onWhatsAppContact={handleWhatsAppContact}
        onScrollToPricing={handleScrollToPricing}
      />
       <div className="w-full h-32 flex items-center overflow-hidden relative">
       {/* Gradient overlays for fade effect */}
       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
       
       {/* Scrolling container */}
       <div className="flex animate-scroll">
         {duplicatedLogos.map((logo, index) => (
           <div
             key={index}
             className="flex-shrink-0 mx-8 flex items-center justify-center"
           >
             <img 
               src={logo.img} 
               alt={`Channel Logo ${index}`}
               className="h-16 w-auto object-contain filter ${logo.filter}`"
             />
           </div>
         ))}
       </div>
       
       
     </div>
     <div className='min-h-screen bg-gray-900 text-white'>
       <FAQ />
       </div>

     <style jsx>{`
       @keyframes scroll {
         0% {
           transform: translateX(0);
         }
         100% {
           transform: translateX(-33.333%);
         }
       }

       .animate-scroll {
         animation: scroll 15s linear infinite;
       }

       .animate-scroll:hover {
         animation-play-state: paused;
       }
     `}</style>
    </div>
  )
}

export default HomePage
