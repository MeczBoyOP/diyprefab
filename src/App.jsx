import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import './Responsive.css'

import NotFound from './pages/notfound/NotFound'
import CommonRoutes from './routes/CommonRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<CommonRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
