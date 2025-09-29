import React from 'react'
import PricingSection from '../components/sections/PricingSection'
import TrialCTASection from '../components/sections/TrialCTASection'

function PricingPage() {
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/+212612450649', '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <PricingSection onWhatsAppContact={handleWhatsAppContact} />
      <TrialCTASection onWhatsAppContact={handleWhatsAppContact} />
    </div>
  )
}

export default PricingPage
