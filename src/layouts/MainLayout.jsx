import React from 'react'
import Navigation from '../components/ui/Navigation'
import Footer from '../components/sections/Footer'

function MainLayout({ children }) {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/+212612450649', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation onWhatsAppContact={handleWhatsAppContact} />
      <main>
        {children}
      </main>
      <Footer onWhatsAppContact={handleWhatsAppContact} />
    </div>
  )
}

export default MainLayout
