import React,{ useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './Responsive.css'
import Dashboard from './pages/dashboard/Dashboard'
import IntroductionToDIYPreFabSolutions from './pages/home/IntroductionToDIYPreFabSolutions';
import KeyBenefits from './pages/home/KeyBenefits';

import NotFound from './pages/notfound/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home/introToDiy" element={<IntroductionToDIYPreFabSolutions />} />
        <Route path="/home/keyBenefits" element={<KeyBenefits />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
