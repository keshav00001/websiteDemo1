import React from 'react';
import Header from '../../Components/Header/Header';
import Hero from './Hero';
import Services from './Services';
import WhoWeAre from './WhoWeAre';
import Skills from './Skills';
import CounterSection from './CounterSection';
import CaseStudy from './CaseStudy';
import FeatureSection from './FeatureSection';
import OurTeams from './Teams';
import Testimonial from './Testimonial';
import Blog from './Blog';
import Brand from './Brand';
import CTASection from './CTASection';
function Home(props) {
    return (
        <div className="home__page">
            <Hero />
            <br clear="all" />
            <Services />
            <WhoWeAre />
            <Skills />
            <CounterSection />
            <CaseStudy />
            <FeatureSection />
            <OurTeams />
            <Testimonial />
            <Blog />
            <Brand />
            <CTASection />
        </div>
    );
}

export default Home;