import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🎯',
      title: 'AI-Powered Prediction',
      description: 'Our advanced AI analyzes thousands of past papers to identify patterns and predict likely questions for upcoming exams.',
      details: [
        'Pattern recognition from 10+ years of exam data',
        'Machine learning algorithms for question prediction',
        'Topic-wise probability analysis',
        'Real-time pattern updates'
      ]
    },
    {
      icon: '⚡',
      title: 'Instant Access',
      description: 'Get immediate access to all content without any waiting time. Start practicing within seconds of signing up.',
      details: [
        'No download required - everything online',
        'Cross-platform compatibility',
        'Mobile-friendly interface',
        'Offline access to downloaded content'
      ]
    },
    {
      icon: '📊',
      title: 'Detailed Analytics',
      description: 'Track your performance with comprehensive analytics and get personalized insights to improve your preparation.',
      details: [
        'Performance tracking across all tests',
        'Weak area identification',
        'Progress visualization',
        'Personalized study recommendations'
      ]
    },
    {
      icon: '🎓',
      title: 'Expert Content',
      description: 'All content is created and reviewed by subject matter experts with years of experience in government exam preparation.',
      details: [
        'Content created by exam experts',
        'Regular updates and revisions',
        'Quality assurance process',
        'Student feedback integration'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile Optimized',
      description: 'Study on the go with our mobile-optimized platform that works seamlessly across all devices.',
      details: [
        'Responsive design for all screen sizes',
        'Touch-friendly interface',
        'Offline mode support',
        'Push notifications for updates'
      ]
    },
    {
      icon: '🔄',
      title: 'Regular Updates',
      description: 'Content is updated regularly to reflect the latest exam patterns, syllabus changes, and current affairs.',
      details: [
        'Monthly content updates',
        'Current affairs integration',
        'Syllabus change notifications',
        'New exam pattern adaptations'
      ]
    }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate', description: 'Our AI predictions have a 95% accuracy rate in identifying important topics' },
    { number: '10K+', label: 'Students Helped', description: 'Over 10,000 students have improved their scores using our platform' },
    { number: '71+', label: 'Mock Papers', description: 'Comprehensive collection of mock papers for all major exams' },
    { number: '40%', label: 'Better Performance', description: 'Students show 40% better performance after using our materials' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Platform Features</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover the powerful features that make Guess Master the most effective 
          platform for government exam preparation.
        </p>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Platform Statistics</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-12">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
              </div>
              <p className="text-lg text-slate-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-slate-100 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="text-6xl opacity-50">{feature.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technology Stack */}
      <div className="mt-16 bg-slate-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Powered by Advanced Technology</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
            <p className="text-slate-600">Advanced ML algorithms analyze exam patterns and predict question trends.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
            <p className="text-slate-600">Comprehensive data analysis provides insights into exam patterns and trends.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
            <p className="text-slate-600">Instant processing and updates ensure you always have the latest information.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Preparation?</h2>
        <p className="text-xl text-slate-600 mb-8">Join thousands of successful students who have improved their scores with our platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Free
          </button>
          <button className="px-8 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
