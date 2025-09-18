import React from 'react';

const About = () => {
  const team = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Founder & CEO',
      expertise: '15+ years in education technology',
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Data Science',
      image: '👩‍💻'
    },
    {
      name: 'Amit Singh',
      role: 'Lead Content Developer',
      expertise: 'Government exam preparation expert',
      image: '👨‍🏫'
    },
    {
      name: 'Sneha Patel',
      role: 'Product Manager',
      expertise: 'User experience and platform development',
      image: '👩‍💼'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Platform Launch',
      description: 'Started with a vision to revolutionize exam preparation using AI technology.'
    },
    {
      year: '2021',
      title: '10K Students',
      description: 'Reached our first milestone of helping 10,000 students improve their scores.'
    },
    {
      year: '2022',
      title: 'AI Integration',
      description: 'Launched advanced AI-powered prediction system for better accuracy.'
    },
    {
      year: '2023',
      title: 'Mobile App',
      description: 'Released mobile app for seamless learning experience on the go.'
    },
    {
      year: '2024',
      title: '50K+ Students',
      description: 'Now helping over 50,000 students achieve their government job dreams.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Guess Master</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We're on a mission to revolutionize government exam preparation by making it smarter, 
          more efficient, and more accessible to students across India.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-700">
            To democratize access to quality exam preparation by leveraging AI technology to create 
            personalized, efficient, and effective study materials that help students achieve their 
            government job aspirations.
          </p>
        </div>
        
        <div className="bg-indigo-50 rounded-2xl p-8">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-slate-700">
            To become India's leading AI-powered education platform, helping millions of students 
            crack government exams through intelligent, data-driven preparation strategies that 
            maximize success rates and minimize study time.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="prose max-w-none text-slate-700">
          <p className="text-lg mb-6">
            Guess Master was born out of a simple observation: traditional exam preparation methods 
            were inefficient and often left students overwhelmed with irrelevant content. Our founder, 
            Dr. Rajesh Kumar, spent 15 years in education technology and noticed that students were 
            spending countless hours studying topics that rarely appeared in actual exams.
          </p>
          <p className="text-lg mb-6">
            In 2020, we set out to change this by developing an AI-powered platform that analyzes 
            thousands of past papers to identify patterns and predict likely questions. What started 
            as a small experiment has now grown into a comprehensive platform helping over 50,000 
            students across India.
          </p>
          <p className="text-lg">
            Today, we continue to innovate, using cutting-edge machine learning algorithms and 
            data analytics to provide students with the most accurate and efficient preparation 
            materials available.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {member.image}
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-slate-600">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-slate-600">We strive for the highest quality in everything we do, from content creation to user experience.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-slate-600">We continuously innovate to provide cutting-edge solutions that give students a competitive edge.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Student Success</h3>
            <p className="text-slate-600">Every decision we make is guided by our commitment to student success and achievement.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
        <p className="text-xl text-slate-600 mb-8">
          Be part of the thousands of students who have achieved their government job dreams with our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your Journey
          </button>
          <button className="px-8 py-3 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
