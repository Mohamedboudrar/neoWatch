import React from 'react'

// Import images
import PhoneIcon from '../assets/images/icons/phone-icon.svg'
import TvIcon from '../assets/images/icons/tv-icon.svg'
import TabletIcon from '../assets/images/icons/tablet-icon.svg'
import HdBadge from '../assets/images/icons/hd-badge.svg'
import FourKBadge from '../assets/images/icons/4k-badge.svg'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About NeoWatch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your premier destination for high-quality IPTV streaming services
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At NeoWatch, we believe that entertainment should be accessible, reliable, and of the highest quality. 
                Our mission is to provide cutting-edge IPTV streaming services that bring the world's best content 
                directly to your devices.
              </p>
              <p className="text-lg text-gray-300">
                We're committed to delivering an unparalleled streaming experience with crystal-clear HD and 4K quality, 
                comprehensive channel selection, and 24/7 customer support.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <img src={TvIcon} alt="Mission" className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">Premium Quality</h3>
              <p className="text-gray-300 text-center">
                We deliver the highest quality streaming experience with advanced technology and dedicated servers.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={PhoneIcon} alt="Accessibility" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Accessibility</h3>
              <p className="text-gray-300 text-center">
                Entertainment should be available to everyone, everywhere, on any device.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="flex space-x-1">
                  <img src={HdBadge} alt="HD" className="h-6" />
                  <img src={FourKBadge} alt="4K" className="h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quality</h3>
              <p className="text-gray-300 text-center">
                We never compromise on quality, delivering the best streaming experience possible.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src={TabletIcon} alt="Innovation" className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Innovation</h3>
              <p className="text-gray-300 text-center">
                Continuously evolving our technology to stay ahead of the streaming curve.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            NeoWatch <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">By Numbers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                5000+
              </div>
              <div className="text-gray-300">Channels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
