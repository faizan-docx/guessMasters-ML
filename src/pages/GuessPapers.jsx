import React, { useMemo, useState, useEffect } from 'react';

const GuessPapers = () => {
  const ALL_PAPERS = useMemo(
    () => [
      { id: 'paper-1', title: 'Predictive Mock Paper 1', exam: 'SSC', difficulty: 'Easy', questions: 100, duration: '2 hours' },
      { id: 'paper-2', title: 'Predictive Mock Paper 2', exam: 'SSC', difficulty: 'Medium', questions: 100, duration: '2 hours' },
      { id: 'paper-3', title: 'Predictive Mock Paper 3', exam: 'Bank PO', difficulty: 'Hard', questions: 200, duration: '3 hours' },
      { id: 'paper-4', title: 'Predictive Mock Paper 4', exam: 'UPSC', difficulty: 'Very Hard', questions: 100, duration: '2 hours' },
      { id: 'paper-5', title: 'Predictive Mock Paper 5', exam: 'Railways', difficulty: 'Medium', questions: 100, duration: '2 hours' },
      { id: 'paper-6', title: 'Predictive Mock Paper 6', exam: 'SSC', difficulty: 'Hard', questions: 100, duration: '2 hours' },
      { id: 'paper-7', title: 'Predictive Mock Paper 7', exam: 'Bank PO', difficulty: 'Medium', questions: 200, duration: '3 hours' },
      { id: 'paper-8', title: 'Predictive Mock Paper 8', exam: 'UPSC', difficulty: 'Hard', questions: 100, duration: '2 hours' },
    ],
    []
  );

  const [unlockedPaperIds, setUnlockedPaperIds] = useState([]);
  const [hasPaid, setHasPaid] = useState(false);
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

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

  useEffect(() => {
    localStorage.setItem('gm_unlocked', JSON.stringify(unlockedPaperIds))
  }, [unlockedPaperIds])

  useEffect(() => {
    localStorage.setItem('gm_hasPaid', hasPaid ? 'true' : 'false')
  }, [hasPaid])

  const isUnlocked = (paperId) => unlockedPaperIds.includes(paperId)

  const handleUnlockAll = () => {
    setHasPaid(true)
    const remainingIds = ALL_PAPERS.map((p) => p.id)
    setUnlockedPaperIds(Array.from(new Set([...unlockedPaperIds, ...remainingIds])))
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-orange-100 text-orange-800'
      case 'Very Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredPapers = ALL_PAPERS.filter(paper => {
    const examMatch = selectedExam === 'All' || paper.exam === selectedExam
    const difficultyMatch = selectedDifficulty === 'All' || paper.difficulty === selectedDifficulty
    return examMatch && difficultyMatch
  })

  const uniqueExams = ['All', ...new Set(ALL_PAPERS.map(p => p.exam))]
  const uniqueDifficulties = ['All', ...new Set(ALL_PAPERS.map(p => p.difficulty))]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Guess Papers</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Get access to high-quality mock papers generated using AI analysis of past exam patterns. 
          First paper is free, unlock the rest for just ₹9.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <label className="block text-sm font-medium mb-2">Filter by Exam:</label>
            <select 
              value={selectedExam} 
              onChange={(e) => setSelectedExam(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {uniqueExams.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Filter by Difficulty:</label>
            <select 
              value={selectedDifficulty} 
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {uniqueDifficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
          <div className="ml-auto">
            <button 
              onClick={handleUnlockAll}
              disabled={hasPaid}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold disabled:bg-blue-300 hover:bg-blue-700 transition-colors"
            >
              {hasPaid ? 'All Unlocked' : 'Unlock All for ₹9'}
            </button>
          </div>
        </div>
      </div>

      {/* Papers Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map((paper) => (
          <div key={paper.id} className={`border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow ${isUnlocked(paper.id) ? '' : 'opacity-75'}`}>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">{paper.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(paper.difficulty)}`}>
                {paper.difficulty}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">Exam:</span>
                <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">{paper.exam}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">Questions:</span>
                <span className="font-medium">{paper.questions}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm">Duration:</span>
                <span className="font-medium">{paper.duration}</span>
              </div>
            </div>

            {isUnlocked(paper.id) ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Unlocked</span>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Start Test
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-slate-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Locked</span>
                </div>
                <button 
                  onClick={handleUnlockAll}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Unlock for ₹9
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Why Our Guess Papers Work?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-slate-600">Our AI analyzes thousands of past papers to predict likely questions and topics.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Time-Efficient</h3>
            <p className="text-slate-600">Focus on high-probability topics and save time on low-yield areas.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
            <p className="text-slate-600">Students using our papers have shown 40% better performance in actual exams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessPapers;
