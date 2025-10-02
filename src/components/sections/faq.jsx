import { useState } from "react";

const faqs = [
  {
    question: "What is NeoWatch IPTV?",
    answer:
      "NeoWatch IPTV is an internet-based television service that lets you watch live TV channels, movies, and shows using your internet connection — no satellite or cable required.",
  },
  {
    question: "What devices can I use?",
    answer:
      "You can use NeoWatch on Smart TVs, Android TV Boxes, Firestick, smartphones, tablets, and PCs.",
  },
  {
    question: "Do I need a satellite dish or cable?",
    answer: "No. You only need a stable internet connection.",
  },
  {
    question: "What internet speed do I need?",
    answer:
      "At least 10 Mbps for HD channels. For 4K streaming, we recommend 20 Mbps or higher.",
  },
  {
    question: "Do you provide support?",
    answer:
      "Yes. Our support team is available 24/7 via WhatsApp to help you with setup and troubleshooting.",
  },
  {
    question: "Can I try before buying?",
    answer:
      "Yes, we provide a free trial so you can test the service before subscribing. Contact us on WhatsApp to get started.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards and other secure payment methods through our checkout system.",
  },
  {
    question: "Can I use NeoWatch IPTV anywhere?",
    answer:
      "Yes, as long as you have a stable internet connection, you can watch NeoWatch IPTV worldwide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
        </h2>
        <p className="text-xl text-gray-300">Everything you need to know about NeoWatch IPTV</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left p-6 hover:bg-gray-700/30 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg text-white pr-4">{faq.question}</h3>
              <div className="flex-shrink-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className={`w-4 h-4 text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6">
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
