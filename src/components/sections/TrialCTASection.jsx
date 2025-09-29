import React from 'react'

function TrialCTASection({ onWhatsAppContact }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Want to try before you <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">subscribe</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get a free trial today and experience the best in streaming technology!
        </p>
        <button
          onClick={onWhatsAppContact}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
        >
          Start Free Trial
        </button>
      </div>
    </section>
  )
}

export default TrialCTASection
