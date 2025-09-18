import React, { useState, useEffect } from 'react';

const Pricing = () => {
  const [hasPaid, setHasPaid] = useState(false);
  const [unlockedPaperIds, setUnlockedPaperIds] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('gm_unlocked')
    const paidFlag = localStorage.getItem('gm_hasPaid') === 'true'
    const baseUnlocked = new Set(['paper-1'])
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        parsed.forEach((id) => baseUnlocked.add(id))
      } catch {}
    }
    setUnlockedPaperIds(Array.from(baseUnlocked))
    setHasPaid(paidFlag)
  }, [])

  const handleUnlockAll = () => {
    setHasPaid(true)
    const remainingIds = ['paper-2', 'paper-3', 'paper-4', 'paper-5', 'paper-6', 'paper-7', 'paper-8']
    setUnlockedPaperIds(Array.from(new Set([...unlockedPaperIds, ...remainingIds])))
    localStorage.setItem('gm_hasPaid', 'true')
    localStorage.setItem('gm_unlocked', JSON.stringify(Array.from(new Set([...unlockedPaperIds, ...remainingIds]))))
  }

  const pricingPlans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for trying out our platform',
      features: [
        '1 Free Mock Paper',
        'Basic Analytics',
        'Mobile Access',
        'Email Support',
        'Community Access'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'border border-slate-300 hover:bg-slate-50',
      popular: false
    },
    {
      name: 'Standard',
      price: '₹9',
      period: 'one-time',
      description: 'Most popular choice for serious students',
      features: [
        'All Mock Papers (8+ papers)',
        'Advanced Analytics',
        'Progress Tracking',
        'Priority Support',
        'Mobile & Desktop Access',
        'Offline Downloads',
        'Exam Notifications',
        'Study Recommendations'
      ],
      buttonText: hasPaid ? 'All Unlocked' : 'Unlock All for ₹9',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      popular: true,
      disabled: hasPaid
    },
    {
      name: 'Premium',
      price: '₹299',
      period: 'monthly',
      description: 'For students who want everything',
      features: [
        'Everything in Standard',
        'Live Classes Access',
        'Personal Mentor',
        'Custom Study Plans',
        'Advanced Mock Tests',
        'Video Explanations',
        '24/7 Priority Support',
        'Exam Strategy Sessions'
      ],
      buttonText: 'Coming Soon',
      buttonStyle: 'bg-gray-400 text-white cursor-not-allowed',
      popular: false,
      disabled: true
    }
  ];

  const faqs = [
    {
      question: 'Is the free plan really free forever?',
      answer: 'Yes! Our free plan includes 1 mock paper and basic features forever. No hidden charges or time limits.'
    },
    {
      question: 'What happens after I pay for Standard plan?',
      answer: 'You get lifetime access to all current and future mock papers. No recurring charges, ever.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade from Free to Standard anytime. Premium features are coming soon.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee if you\'re not satisfied with our service.'
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No hidden fees whatsoever. The price you see is the price you pay. No recurring charges for Standard plan.'
    },
    {
      question: 'Can I access content offline?',
      answer: 'Yes! With the Standard plan, you can download content for offline access on mobile devices.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Choose the plan that works best for you. No hidden fees, no surprises. 
          Start free and upgrade when you're ready.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {pricingPlans.map((plan, index) => (
          <div key={index} className={`relative bg-white border rounded-2xl p-8 ${plan.popular ? 'border-blue-600 shadow-lg scale-105' : 'border-slate-200'}`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-600 ml-2">/{plan.period}</span>
              </div>
              <p className="text-slate-600">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${plan.buttonStyle}`}
              onClick={plan.name === 'Standard' ? handleUnlockAll : undefined}
              disabled={plan.disabled}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-slate-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Plan Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 px-4 font-semibold">Features</th>
                <th className="text-center py-4 px-4 font-semibold">Free</th>
                <th className="text-center py-4 px-4 font-semibold">Standard</th>
                <th className="text-center py-4 px-4 font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-4 px-4">Mock Papers</td>
                <td className="text-center py-4 px-4">1</td>
                <td className="text-center py-4 px-4">8+</td>
                <td className="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Analytics</td>
                <td className="text-center py-4 px-4">Basic</td>
                <td className="text-center py-4 px-4">Advanced</td>
                <td className="text-center py-4 px-4">Advanced</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Support</td>
                <td className="text-center py-4 px-4">Email</td>
                <td className="text-center py-4 px-4">Priority</td>
                <td className="text-center py-4 px-4">24/7</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Offline Access</td>
                <td className="text-center py-4 px-4">❌</td>
                <td className="text-center py-4 px-4">✅</td>
                <td className="text-center py-4 px-4">✅</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Live Classes</td>
                <td className="text-center py-4 px-4">❌</td>
                <td className="text-center py-4 px-4">❌</td>
                <td className="text-center py-4 px-4">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Journey?</h2>
        <p className="text-xl text-slate-600 mb-8">Join thousands of students who have already improved their scores with our platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleUnlockAll}
            disabled={hasPaid}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {hasPaid ? 'All Unlocked' : 'Unlock All for ₹9'}
          </button>
          <button className="px-8 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
            Try Free First
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
