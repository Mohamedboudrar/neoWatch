import React from 'react'

function Footer({ onWhatsAppContact }) {
  return (
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
              onClick={onWhatsAppContact}
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
  )
}

export default Footer
