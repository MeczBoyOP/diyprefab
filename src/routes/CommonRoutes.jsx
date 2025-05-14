import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import IntroductionToDIYPreFabSolutions from '../pages/home/IntroductionToDIYPreFabSolutions';
import KeyBenefits from '../pages/home/KeyBenefits';

import LocateOurDeals from '../pages/contactUs/LocateOurDeals'

import { AnimatePresence } from 'framer-motion'
import FeaturedProducts from '../pages/home/FeaturedProducts';
import CompanyOverview from '../pages/about/CompanyOverview';
import AboutVisionMission from '../pages/about/AboutVisionMission';
import Sustainability from '../pages/about/Sustainability';
import ManufacturingProcess from '../pages/about/ManufacturingProcess';
import Residential from '../pages/application/Residential';
import Commercial from '../pages/application/Commercial';
import Industrial from '../pages/application/Industrial';
import Education from '../pages/application/Education';
import HealthCareFacilities from '../pages/application/HealthCareFacilities';
import SucessStories from '../pages/project&casestudies/SucessStories';
import ProjectGallery from '../pages/project&casestudies/ProjectGallery';

const CommonRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home/introToDiy" element={<IntroductionToDIYPreFabSolutions />} />
                <Route path="/home/keyBenefits" element={<KeyBenefits />} />
                <Route path="/home/featuredProjects" element={<FeaturedProducts />} />
                <Route path="/contactUs/locateOurDeal" element={<LocateOurDeals />} />

                {/* About Routes */}
                <Route path="/about/companyoverview" element={<CompanyOverview />} />
                <Route path="/about/visionmission" element={<AboutVisionMission />} />
                <Route path="/about/sustainability" element={<Sustainability />} />
                <Route path="/about/manufacturingprocess" element={<ManufacturingProcess />} />

                {/* Application Routes */}
                <Route path="/application/residential" element={<Residential />} />
                <Route path="/application/commercial" element={<Commercial />} />
                <Route path="/application/industrial" element={<Industrial />} />
                <Route path="/application/education" element={<Education />} />
                <Route path="/application/healthcarefacilities" element={<HealthCareFacilities />} />


                {/* Application Routes */}
                <Route path="/project&casestudies/sucessstories" element={<SucessStories />} />
                <Route path="/project&casestudies/client-testimonial" element={<Commercial />} />
                <Route path="/project&casestudies/project-gallery" element={<ProjectGallery />} />
            </Routes>
        </AnimatePresence>
    )
}

export default CommonRoutes