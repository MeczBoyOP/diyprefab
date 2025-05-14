import React, { useState } from "react";
import ImagePath from "../../assets/ImagePath";
import { FaPlay, FaPlayCircle } from "react-icons/fa";
import NavBarHead from "../../component/navbar/NavBarHead";
import BannerSection from "../../component/bannerSection/BannerSection";
import { FaWarehouse } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { Col, Container, Row, Table, Button } from "reactstrap";
import Counter from "../../component/counter/Counter";
import CounterSection from "../../component/counter/CounterSection";
import Footer from "../../component/footer/Footer";
import WaveWrapper from "../../component/waveWrapper/WaveWrapper";
import TrustSlider from "../../component/trustSlider/TrustSlider";
import TestimonialSection from "../../component/testimonialSection/TestimonialSection";
import OurVisionMission from "../../component/ourVisionMission/OurVisionMission";

const AboutVisionMission = () => {
  const [OpenVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => {
    setOpenVideo(!OpenVideo);
  };
  const infoBoxList = [
    {
      id: 1,
      title: "Where We Work",
      description: `We serve across India with special focus on:`,
    },
    {
      id: 2,
      title: "Licensing deals & scalability",
      description: `Unlock growth with "DIY PreFab"through strategic licensing deals and scalable building solutions tailored for every market.`,
    },
    {
      id: 3,
      title: "Holistic & custom approach",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
    {
      id: 4,
      title: "Development & fabrication",
      description: `Discover the future of construction with "DIY PreFab"advanced development and fabrication solutions.From concept to completion, our prefab solutions .`,
    },
  ];

  const comparisonList = [
    {
      id: 1,
      feature: "DIY-Friendly Systems",
      prefab: "Easy to assemble prefab kits — minimal tools needed",
    },
    {
      id: 2,
      feature: "Rapid Project Delivery",
      prefab: "Projects completed in as little as 10–30 days",
    },
    {
      id: 2,
      feature: "Transparent Pricing",
      prefab: "Fixed cost prefab kits — no surprises",
    },
    {
      id: 2,
      feature: "Sustainability Focus",
      prefab: "Uses recyclable steel and low-waste systems",
    },
    {
      id: 2,
      feature: "Pan-India Reach",
      prefab: "Serving clients across Rajasthan, MP, Gujarat",
    },
    {
      id: 2,
      feature: "Export Capability",
      prefab: "Successfully shipped and installed in Africa",
    },
  ];
  return (
    <div>
      <NavBarHead />
      <BannerSection
        title={"Our Vision & Mission"}
        description={"Designing Tomorrow’s Structures, Today."}
      />
      <section className="we-are-section">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="we-are-left">
                {/* <h6>Who We Are</h6> */}
                <h2>
                  Redefining the Future of Prefab  & Pre Engineered Buildings in India
                </h2>
                <p>
                  At “DIY PreFab”, we don’t just manufacture buildings — we build possibilities. Every beam, every bolt, every panel reflects our belief that quality construction should be accessible to all, from rural innovators to industrial giants.
                </p>
                <div className="we-are-left-content-container">
                  <div className="we-are-left-content-box">
                    <FaHelmetSafety className="performance-icons" />
                    <h4>Professional Expert</h4>
                    <p>
                      Prefab buildings empower professional experts with faster
                      deployment, design flexibility, and cost-effective
                      construction solutions.
                    </p>
                  </div>
                  <div className="we-are-left-content-box">
                    <MdSupportAgent className="performance-icons" />
                    <h4>24/7 Premium Support</h4>
                    <p>
                      Experience uninterrupted service and peace of mind with
                      24/7 premium support tailored for your prefab building
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="we-are-right">
                <div className="we-are-back-image-section">
                  <img
                    src={ImagePath.WRB}
                    alt="we-are-back"
                    className="img-fluid"
                  ></img>
                  <div className="we-are-back-right-content-box">
                    <div className="we-are-back-right-content">
                      <h4>7+</h4>
                      <p>Years of Experience</p>
                    </div>
                    <div className="divider"></div>
                    <div className="we-are-back-right-content jcs">
                      <p>Cutting-Edge Expertise</p>
                      <p>Holistic Solutions Approach</p>
                      <p>Client-Centric Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section className="information-section">
        <Container>
          <div className="information-container">
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Why It Matters</h6>
              <p>India needs faster, cleaner, and more scalable infrastructure — especially in underserved regions. DIY PreFab exists to remove the bottlenecks of traditional construction with:</p>
              <ul>
                <li>Time-saving prefabricated systems</li>
                <li>Eco-conscious and low-carbon materials</li>
                <li>Minimal labor and zero machinery dependency</li>
                <li>Predictable, affordable costs for every project size</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>What Drives Us</h6>
              <ul>
                <li>The passion to empower remote and rural India with DIY construction</li>
                <li>The mission to eliminate inefficiencies and overpricing in the building industry</li>
                <li>The responsibility to support low-carbon development and green infrastructure</li>
                <li>The ambition to scale Indian engineering expertise globally</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Built for Bharat, Engineered for the World</h6>
              <p>Our mission and vision are rooted in India’s grassroots needs, but built to meet global standards. With a project already completed in South Africa, we are just getting started.</p>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Let’s Build the Vision Together</h6>
              <p>Whether you're an individual, startup, NGO, or enterprise — we invite you to partner with DIY PreFab and help shape the future of prefab construction.</p>
            </div>
          </div>
        </Container>
      </section>

      <OurVisionMission/>

      <CounterSection />

      <TrustSlider />

      <TestimonialSection />

      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default AboutVisionMission;
