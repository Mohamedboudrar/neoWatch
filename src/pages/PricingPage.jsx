import React from 'react'
import { useNavigate } from 'react-router-dom'
import PricingSection from '../components/sections/PricingSection'
import TrialCTASection from '../components/sections/TrialCTASection'

function PricingPage() {
  const navigate = useNavigate()

  const handleWhatsAppContact = () => {
    navigate('/subscription?type=subscription')
  }

  const handleTrialContact = () => {
    navigate('/subscription?type=trial')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <PricingSection onWhatsAppContact={handleWhatsAppContact} />
      <TrialCTASection onWhatsAppContact={handleTrialContact} />
    </div>
  )
}

export default PricingPage
