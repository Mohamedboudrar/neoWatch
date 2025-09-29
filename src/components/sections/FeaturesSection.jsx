import React from 'react'

// Import images
import ActionMovie from '../../assets/images/content/action-movie.svg'
import FootballSport from '../../assets/images/content/football-sport.svg'
import DramaSeries from '../../assets/images/content/drama-series.svg'
import PhoneIcon from '../../assets/images/icons/phone-icon.svg'
import TvIcon from '../../assets/images/icons/tv-icon.svg'
import TabletIcon from '../../assets/images/icons/tablet-icon.svg'
import HdBadge from '../../assets/images/icons/hd-badge.svg'
import FourKBadge from '../../assets/images/icons/4k-badge.svg'

function FeaturesSection() {
  return (
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
  )
}

export default FeaturesSection
