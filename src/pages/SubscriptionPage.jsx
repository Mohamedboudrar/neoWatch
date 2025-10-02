import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { WhopCheckoutEmbed } from "@whop/checkout/react";

function SubscriptionPage() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Get the subscription type and plan from URL parameters
  const searchParams = new URLSearchParams(location.search)
  const type = searchParams.get('type') || 'trial'
  const plan = searchParams.get('plan') || 'trial'
  
  const isTrial = type === 'trial'
  const isSubscription = type === 'subscription'

  // Plan configuration with WhopCheckoutEmbed plan IDs
  const planConfig = {
    trial: {
      planId: "plan_trial_id", // Replace with your actual trial plan ID
      name: "Free Trial",
      price: "Free"
    },
    '1-month': {
      planId: "plan_oN0tk3YVf9zEf", // Your current plan ID - replace with actual 1-month plan ID
      name: "1 Month Plan",
      price: "$8"
    },
    '3-months': {
      planId: "plan_jxgJCd3TcBaiv", // Replace with your actual 3-month plan ID
      name: "3 Months Plan", 
      price: "$22"
    },
    '6-months': {
      planId: "plan_LylJwRV5abk4T", // Replace with your actual 6-month plan ID
      name: "6 Months Plan",
      price: "$40"
    },
    '12-months': {
      planId: "plan_oN0tk3YVf9zEf", // Replace with your actual 12-month plan ID
      name: "12 Months Plan",
      price: "$65"
    }
  }

  const currentPlan = planConfig[plan] || planConfig.trial
  
  const handleWhatsAppContact = () => {
    const message = isTrial 
      ? "Hi! I'm interested in starting a free trial for NeoWatch IPTV service."
      : "Hi! I'm interested in subscribing to NeoWatch IPTV service."
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/+212612450649?text=${encodedMessage}`, '_blank')
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {isTrial ? 'Start Your Free Trial' : 'Complete Your Subscription'}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {isTrial 
              ? 'Ready to experience the best in IPTV streaming? Contact us on WhatsApp to start your free trial today!'
              : 'Ready to get started with NeoWatch? Contact us on WhatsApp to complete your subscription!'
            }
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl mx-auto">
          <div className="text-center">
            
            
            <h2 className="text-3xl font-bold mb-4">
              {isTrial ? 'Start Your Free Trial' : 'Complete Your Subscription'}
            </h2>
            
            {/* Plan Information */}
            <div className="bg-gray-700/50 rounded-lg p-4 mb-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{currentPlan.name}</h3>
                <div className="text-2xl font-bold text-purple-400">{currentPlan.price}</div>
              </div>
            </div>

            <div className="space-y-4">
              {isTrial ? (
                // Show WhatsApp button for trial
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Contact Us on WhatsApp</span>
                </button>
              ) : (
                // Show WhopCheckoutEmbed for paid plans
                <WhopCheckoutEmbed planId={currentPlan.planId} />
              )}

              <button
                onClick={handleBackToHome}
                className="w-full border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-400 text-sm">Get started in minutes with our easy setup process</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-400 text-sm">Round-the-clock assistance whenever you need help</p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-400 text-sm">Start streaming immediately after subscription</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage

