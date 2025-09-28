import React from 'react'
import './App.css'

// Import images
import NetflixLogo from './assets/images/streaming/netflix-logo.svg'
import DisneyLogo from './assets/images/streaming/disney-logo.svg'
import PrimeLogo from './assets/images/streaming/prime-logo.svg'
import HboLogo from './assets/images/streaming/hbo-logo.svg'
import HuluLogo from './assets/images/streaming/hulu-logo.svg'
import AppleLogo from './assets/images/streaming/apple-logo.svg'

import ActionMovie from './assets/images/content/action-movie.svg'
import ComedyMovie from './assets/images/content/comedy-movie.svg'
import DramaSeries from './assets/images/content/drama-series.svg'
import SciFiMovie from './assets/images/content/sci-fi-movie.svg'

import FootballSport from './assets/images/content/football-sport.svg'
import BasketballSport from './assets/images/content/basketball-sport.svg'
import TennisSport from './assets/images/content/tennis-sport.svg'
import BoxingSport from './assets/images/content/boxing-sport.svg'

import PhoneIcon from './assets/images/icons/phone-icon.svg'
import TvIcon from './assets/images/icons/tv-icon.svg'
import TabletIcon from './assets/images/icons/tablet-icon.svg'
import HdBadge from './assets/images/icons/hd-badge.svg'
import FourKBadge from './assets/images/icons/4k-badge.svg'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    // Replace with your actual WhatsApp number
    window.open('https://wa.me/+212612450649', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NeoWatch
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Features
                </button>
                <button
                  onClick={handleWhatsAppContact}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
                onClick={handleWhatsAppContact}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Start Free Trial
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NeoWatch</span>?
            </h2>
            <p className="text-xl text-gray-300">Experience the best in streaming technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto relative">
                <img src={TvIcon} alt="High Quality" className="w-8 h-8" />
                <div className="absolute -top-2 -right-2">
                  <img src={FourKBadge} alt="4K" className="w-8 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">High-quality channels</h3>
              <p className="text-gray-300 text-center">
                Crystal clear HD and 4K streaming with thousands of premium channels from around the world.
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <img src={HdBadge} alt="HD" className="h-6" />
                <img src={FourKBadge} alt="4K" className="h-6" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={ActionMovie} alt="Content Variety" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Sports, movies, and series</h3>
              <p className="text-gray-300 text-center">
                Complete entertainment package with live sports, latest movies, and binge-worthy series.
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <img src={ActionMovie} alt="Movies" className="h-6 rounded" />
                <img src={FootballSport} alt="Sports" className="h-6 rounded" />
                <img src={DramaSeries} alt="Series" className="h-6 rounded" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 animate-fadeInUp">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={PhoneIcon} alt="Multi-Device" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Works on all devices</h3>
              <p className="text-gray-300 text-center">
                Stream seamlessly on your phone, tablet, smart TV, or computer with our multi-platform support.
              </p>
              <div className="flex justify-center space-x-3 mt-4">
                <img src={PhoneIcon} alt="Phone" className="h-8" />
                <img src={TabletIcon} alt="Tablet" className="h-8" />
                <img src={TvIcon} alt="Smart TV" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Showcase Section */}
      

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl text-gray-300">Flexible pricing options for every need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1 Month Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">1 Month</h3>
                <div className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$8</span>
                </div>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited channels
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center space-x-2">
                      <span>HD/4K Quality</span>
                      <img src={HdBadge} alt="HD" className="h-4" />
                      <img src={FourKBadge} alt="4K" className="h-4" />
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 Support
                  </li>
                </ul>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* 3 Months Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">3 Months</h3>
                <div className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$22</span>
                </div>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited channels
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center space-x-2">
                      <span>HD/4K Quality</span>
                      <img src={HdBadge} alt="HD" className="h-4" />
                      <img src={FourKBadge} alt="4K" className="h-4" />
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 Support
                  </li>
                </ul>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* 6 Months Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">6 Months</h3>
                <div className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$40</span>
                </div>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited channels
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center space-x-2">
                      <span>HD/4K Quality</span>
                      <img src={HdBadge} alt="HD" className="h-4" />
                      <img src={FourKBadge} alt="4K" className="h-4" />
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 Support
                  </li>
                </ul>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* 12 Months Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">12 Months</h3>
                <div className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">$65</span>
                </div>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited channels
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div className="flex items-center space-x-2">
                      <span>HD/4K Quality</span>
                      <img src={HdBadge} alt="HD" className="h-4" />
                      <img src={FourKBadge} alt="4K" className="h-4" />
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 Support
                  </li>
                </ul>
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to try before you <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">subscribe</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free trial today and experience the best in streaming technology!
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                NeoWatch
              </h3>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms
              </button>
              <button className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              Copyright © NeoWatch 2025. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
