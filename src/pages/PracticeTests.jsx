import React, { useState } from 'react';

const PracticeTests = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const testCategories = [
    {
      id: 'quick-tests',
      title: 'Quick Tests',
      description: 'Short 15-30 minute tests for quick practice',
      tests: [
        { name: 'General Knowledge Quick Test', duration: '15 min', questions: 25, difficulty: 'Easy' },
        { name: 'Current Affairs Quiz', duration: '20 min', questions: 30, difficulty: 'Medium' },
        { name: 'Math Speed Test', duration: '25 min', questions: 40, difficulty: 'Medium' },
        { name: 'English Grammar Test', duration: '20 min', questions: 35, difficulty: 'Easy' }
      ]
    },
    {
      id: 'full-length',
      title: 'Full Length Tests',
      description: 'Complete mock tests simulating real exam conditions',
      tests: [
        { name: 'SSC CGL Full Mock Test', duration: '2 hours', questions: 100, difficulty: 'Hard' },
        { name: 'Bank PO Complete Test', duration: '3 hours', questions: 200, difficulty: 'Very Hard' },
        { name: 'UPSC Prelims Mock', duration: '2 hours', questions: 100, difficulty: 'Very Hard' },
        { name: 'Railway NTPC Test', duration: '2.5 hours', questions: 120, difficulty: 'Hard' }
      ]
    },
    {
      id: 'subject-wise',
      title: 'Subject Wise Tests',
      description: 'Focused tests on specific subjects and topics',
      tests: [
        { name: 'Mathematics - Arithmetic', duration: '1 hour', questions: 50, difficulty: 'Medium' },
        { name: 'Reasoning - Logical', duration: '45 min', questions: 40, difficulty: 'Hard' },
        { name: 'General Science', duration: '30 min', questions: 30, difficulty: 'Medium' },
        { name: 'History & Culture', duration: '40 min', questions: 35, difficulty: 'Medium' }
      ]
    },
    {
      id: 'previous-year',
      title: 'Previous Year Papers',
      description: 'Actual exam papers from previous years',
      tests: [
        { name: 'SSC CGL 2023 Paper 1', duration: '2 hours', questions: 100, difficulty: 'Hard' },
        { name: 'IBPS PO 2023', duration: '3 hours', questions: 200, difficulty: 'Very Hard' },
        { name: 'Railway NTPC 2022', duration: '2.5 hours', questions: 120, difficulty: 'Hard' },
        { name: 'UPSC Prelims 2023', duration: '2 hours', questions: 100, difficulty: 'Very Hard' }
      ]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-orange-100 text-orange-800'
      case 'Very Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  };

  const allTests = testCategories.flatMap(category => 
    category.tests.map(test => ({ ...test, category: category.title }))
  );

  const filteredTests = allTests.filter(test => {
    const categoryMatch = selectedCategory === 'All' || test.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || test.difficulty === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const uniqueLevels = ['All', ...new Set(allTests.map(test => test.difficulty))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Practice Tests & Mock Exams</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Test your knowledge with our comprehensive collection of practice tests, 
          mock exams, and previous year papers. Track your progress and improve your performance.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium mb-2">Test Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              {testCategories.map(category => (
                <option key={category.id} value={category.title}>{category.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Difficulty Level:</label>
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {uniqueLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <div className="ml-auto">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Random Test
            </button>
          </div>
        </div>
      </div>

      {/* Test Categories Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {testCategories.map((category) => (
          <div key={category.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{category.description}</p>
            <div className="text-2xl font-bold text-blue-600 mb-2">{category.tests.length}</div>
            <div className="text-sm text-slate-500">Available Tests</div>
          </div>
        ))}
      </div>

      {/* Tests List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Available Tests</h2>
        <div className="grid gap-4">
          {filteredTests.map((test, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{test.name}</h3>
                  <p className="text-sm text-slate-500">{test.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Start Test
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-600">Duration: {test.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-slate-600">Questions: {test.questions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-600">Auto-graded</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Practice Test Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
            <p className="text-slate-600">Get comprehensive analysis of your performance with detailed score breakdowns and improvement suggestions.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
            <p className="text-slate-600">Get immediate feedback and scores as soon as you complete the test with detailed explanations.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
            <p className="text-slate-600">Monitor your improvement over time with detailed progress reports and performance trends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeTests;
