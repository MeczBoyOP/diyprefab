import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import IntroductionToDIYPreFabSolutions from '../pages/home/IntroductionToDIYPreFabSolutions';
import KeyBenefits from '../pages/home/KeyBenefits';

import LocateOurDeals from '../pages/contactUs/LocateOurDeals'

import { AnimatePresence } from 'framer-motion'

const CommonRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home/introToDiy" element={<IntroductionToDIYPreFabSolutions />} />
                <Route path="/home/keyBenefits" element={<KeyBenefits />} />
                <Route path="/contactUs/locateOurDeal" element={<LocateOurDeals />} />
            </Routes>
        </AnimatePresence>
    )
}

export default CommonRoutes