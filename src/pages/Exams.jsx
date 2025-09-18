import React from 'react';

const Exams = () => {
  const examCategories = [
    {
      title: 'SSC (Staff Selection Commission)',
      description: 'CGL, CHSL, MTS, JE, CPO, Stenographer',
      papers: 12,
      difficulty: 'Medium',
      duration: '2-3 months'
    },
    {
      title: 'Banking',
      description: 'IBPS PO, IBPS Clerk, SBI PO, SBI Clerk, RRB PO',
      papers: 15,
      difficulty: 'High',
      duration: '3-4 months'
    },
    {
      title: 'UPSC Civil Services',
      description: 'Prelims, Mains, Interview preparation',
      papers: 8,
      difficulty: 'Very High',
      duration: '6-12 months'
    },
    {
      title: 'Railways',
      description: 'RRB NTPC, RRB Group D, RRB JE, RRB ALP',
      papers: 10,
      difficulty: 'Medium',
      duration: '2-3 months'
    },
    {
      title: 'State PSC',
      description: 'UPPSC, BPSC, MPPSC, RPSC, TNPSC',
      papers: 20,
      difficulty: 'Medium-High',
      duration: '3-6 months'
    },
    {
      title: 'Teaching Exams',
      description: 'CTET, UGC NET, KVS, DSSSB, HTET',
      papers: 6,
      difficulty: 'Medium',
      duration: '2-4 months'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Government Exam Preparation</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Comprehensive preparation materials for all major government exams in India. 
          Get AI-powered guess papers tailored for each exam pattern.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examCategories.map((exam, index) => (
          <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">{exam.title}</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {exam.papers} Papers
              </span>
            </div>
            
            <p className="text-slate-600 mb-4">{exam.description}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Difficulty:</span>
                <span className="font-medium">{exam.difficulty}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Prep Time:</span>
                <span className="font-medium">{exam.duration}</span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                View Papers
              </button>
              <button className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                Sample
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Exam Statistics */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our Exam Materials?</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">71+</div>
            <div className="text-slate-600">Mock Papers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-600">Exam Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-slate-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-slate-600">Students Helped</div>
          </div>
        </div>
      </div>

      {/* Preparation Tips */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Exam Preparation Tips</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-semibold mb-1">Understand the Pattern</h3>
                <p className="text-slate-600 text-sm">Study the exam pattern, marking scheme, and time allocation for each section.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-semibold mb-1">Practice Regularly</h3>
                <p className="text-slate-600 text-sm">Consistent practice with mock tests and previous year papers is key to success.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-semibold mb-1">Time Management</h3>
                <p className="text-slate-600 text-sm">Learn to manage time effectively during the exam with proper strategy.</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h3 className="font-semibold mb-1">Focus on Weak Areas</h3>
                <p className="text-slate-600 text-sm">Identify and work on your weak subjects to improve overall performance.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">5</div>
              <div>
                <h3 className="font-semibold mb-1">Stay Updated</h3>
                <p className="text-slate-600 text-sm">Keep yourself updated with current affairs and latest exam notifications.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">6</div>
              <div>
                <h3 className="font-semibold mb-1">Mock Tests</h3>
                <p className="text-slate-600 text-sm">Take regular mock tests to assess your preparation and improve speed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exams;
