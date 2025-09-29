import React from 'react'

// Import images
import ActionMovie from '../../assets/images/content/action-movie.svg'
import ComedyMovie from '../../assets/images/content/comedy-movie.svg'
import DramaSeries from '../../assets/images/content/drama-series.svg'
import SciFiMovie from '../../assets/images/content/sci-fi-movie.svg'

import FootballSport from '../../assets/images/content/football-sport.svg'
import BasketballSport from '../../assets/images/content/basketball-sport.svg'
import TennisSport from '../../assets/images/content/tennis-sport.svg'
import BoxingSport from '../../assets/images/content/boxing-sport.svg'

import PhoneIcon from '../../assets/images/icons/phone-icon.svg'
import TvIcon from '../../assets/images/icons/tv-icon.svg'

function HeroSection({ onWhatsAppContact, onScrollToPricing }) {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Middle row - Sports */}
        <div className="absolute top-32 left-0 w-full">
          <div className="scroll-container animate-scroll-right">
            <div className="flex space-x-6">
              {[FootballSport, BasketballSport, TennisSport, BoxingSport, FootballSport, BasketballSport, TennisSport, BoxingSport, FootballSport, BasketballSport].map((Sport, i) => (
                <div key={`sport-middle-${i}`} className="flex-shrink-0">
                  <img src={Sport} alt="Sport" className="w-28 h-16 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            
          </div>
        </div>
        
        {/* Bottom row - Movies & Series */}
        <div className="absolute top-52 left-0 w-full">
          <div className="scroll-container animate-scroll-left-slow">
            <div className="flex space-x-6">
              {[ActionMovie, ComedyMovie, DramaSeries, SciFiMovie, ActionMovie, ComedyMovie, DramaSeries, SciFiMovie, ActionMovie, ComedyMovie, DramaSeries, SciFiMovie].map((Content, i) => (
                <div key={`content-bottom-${i}`} className="flex-shrink-0">
                  <img src={Content} alt="Movie/Series" className="w-24 h-14 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-6">
              {[DramaSeries, SciFiMovie, ActionMovie, ComedyMovie, DramaSeries, SciFiMovie, ActionMovie, ComedyMovie, DramaSeries, SciFiMovie, ActionMovie, ComedyMovie].map((Content, i) => (
                <div key={`content-bottom-dup-${i}`} className="flex-shrink-0">
                  <img src={Content} alt="Movie/Series" className="w-24 h-14 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute top-20 right-10 animate-float">
          <div className="w-20 h-12 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-400/30 flex items-center justify-center shadow-lg">
            <img src={TvIcon} alt="Smart TV" className="w-8 h-8" />
          </div>
        </div>
        
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-16 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-yellow-400/30 flex items-center justify-center shadow-lg">
            <img src={PhoneIcon} alt="Mobile" className="w-6 h-6" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Stream Everything
            </span>
            <br />
            <span className="text-white">with NeoWatch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Reliable IPTV service on all your devices. Sports, movies, series — anytime, anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onWhatsAppContact}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Start Free Trial
            </button>
            <button
              onClick={onScrollToPricing}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
