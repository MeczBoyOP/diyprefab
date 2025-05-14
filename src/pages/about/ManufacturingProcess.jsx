import React, { useState } from "react";
import NavBarHead from "../../component/navbar/NavBarHead";
import BannerSection from "../../component/bannerSection/BannerSection";
// import { Col, Container, Row } from "reactstrap";
import ImagePath from "../../assets/ImagePath";
import { FaPlay, FaPlayCircle } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { Col, Container, Row, Table, Button } from "reactstrap";
import CounterSection from "../../component/counter/CounterSection";
import Footer from "../../component/footer/Footer";
import WaveWrapper from "../../component/waveWrapper/WaveWrapper";
import TrustSlider from "../../component/trustSlider/TrustSlider";
import TestimonialSection from "../../component/testimonialSection/TestimonialSection";
import OurVisionMission from "../../component/ourVisionMission/OurVisionMission";

const ManufacturingProcess = () => {
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
      feature: "Steel-Based Structures",
      prefab: "Steel is 100% recyclable and reusable",
    },
    {
      id: 2,
      feature: "Precision Prefabrication",
      prefab: "Reduces material waste by up to 60%",
    },
    {
      id: 2,
      feature: "Dry Construction Process",
      prefab: "Saves water and eliminates wet curing",
    },
    {
      id: 2,
      feature: "Fast Assembly",
      prefab: "Less energy consumption on-site",
    },
    {
      id: 2,
      feature: "Modular Design",
      prefab: "Enables disassembly, reuse, and future upgrades",
    },
    {
      id: 2,
      feature: "Smaller Carbon Footprint",
      prefab: "Optimized logistics and minimal transport cycles",
    },
    {
      id: 2,
      feature: "Solar-Ready Roof Designs",
      prefab: "Supports easy installation of solar panels",
    },
  ];

  return (
    <div>
      <NavBarHead />
      <BannerSection
        title={"Manufacturing Process"}
        description={"Crafting Engineering Excellence"}
      />
      <section className="we-are-section">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="we-are-left">
                {/* <h6>Who We Are</h6> */}
                <h2>
                  Our Manufacturing Process Precision-Engineered for Speed,
                  Strength & Sustainability
                </h2>
                <p>
                  At “DIY PreFab”, every building we deliver starts with a
                  promise — <strong>speed, strength, and simplicity</strong>.
                  Behind that promise lies a well-oiled, quality-controlled{" "}
                  <strong>PEB manufacturing process</strong> that ensures each
                  structure is crafted to last and built to perform.
                </p>
                <p>
                  From sourcing raw steel to packaging ready-to-install kits, we
                  follow a streamlined process backed by technology,
                  engineering, and experience.
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
                      <h4>25 +</h4>
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

      <section className="information-section manuf">
        <Container>
          <div className="information-container">
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Step-by-Step Prefab Manufacturing Process</h6>
              <p>Here’s how we bring your dream structure to life:</p>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Project Planning & Design</h6>
              <ul>
                <li>Requirement gathering based on site, usage & load factors</li>
                <li>2D/3D CAD modeling using structural design software</li>
                <li>Design optimization for weight, cost, and environmental efficiency</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Material Procurement</h6>
              <ul>
                <li>High-grade steel sourced from trusted partners </li>
                <li>Quality-verified bolts, fasteners, and cladding materials</li>
                <li>Panels, trims, and components aligned to design specs</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Supporting Sustainable Growth in India</h6>
              <p>Whether you're:</p>
              <p>
                A farmer looking to build a recyclable agro shed, A business
                aiming for green warehousing, A school or clinic expanding with
                low-impact buildings,
              </p>
              <p>
                Or a government agency seeking eco-compliant infrastructure...
                DIY PreFab delivers prefab solutions with sustainability at the
                core.
              </p>
              <p>
                Target Regions: Rajasthan, Gujarat, Madhya Pradesh, Udaipur,
                Indore, Ahmedabad
              </p>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Innovations We're Working On</h6>
              <ul>
                <li>Solar-integrated roofing solutions.</li>
                <li>Use of fly ash bricks and green wall panels.</li>
                <li>Low-emission logistics for remote installations.</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Global Responsibility, Local Action</h6>
              <p>
                We align with the UN Sustainable Development Goals (SDGs),
                especially:
              </p>
              <ul>
                <li>Goal 9: Industry, Innovation & Infrastructure</li>
                <li>Goal 11: Sustainable Cities & Communities</li>
                <li>
                  Goal 13: Climate Action Our project in South Africa
                  demonstrates our ability to deliver low-carbon PEB buildings
                  internationally — and we aim to bring these standards to every
                  corner of India.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <OurVisionMission />

      <section className="common-section where-manuf-wrap">
        <Container>
          <div className="wm-box"> 
            <h3>Where We Manufacture </h3>
            <p>Our manufacturing operations are based in <strong>Rajasthan</strong>, with ongoing expansion across <strong>central India</strong>. All projects — from <strong>Udaipur to Indore, Ahmedabad to Jaipur</strong> — are powered by our factory-to-site supply chain.</p>
          </div>
          <div className="wm-box"> 
            <h3>Want a Custom PEB Kit for Your Site?</h3>
            <p>We’ll take your concept from drawing board to delivery — backed by solid engineering and rapid execution.</p>
          </div>
        </Container>
      </section>

      <CounterSection />

      <TrustSlider />

      <TestimonialSection />

      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default ManufacturingProcess;
