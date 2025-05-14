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

const Sustainability = () => {
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
        title={"Leading the Green Building Revolution"}
        description={"Building Begins with Smart Engineering"}
      />
      <section className="we-are-section">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="we-are-left">
                <h6>Who We Are</h6>
                <h2>
                  Sustainability & Eco-Friendly Initiatives Building Greener,
                  Smarter, and More Responsible Infrastructure
                </h2>
                <p>
                  At “DIY PreFab”, sustainability is not just a feature — it’s a
                  foundation. Every prefab building we deliver is designed to
                  minimize environmental impact, reduce construction waste, and
                  support India’s transition to a low-carbon future.
                </p>
                <p>
                  We’re proud to be part of a new generation of eco-conscious
                  construction companies in India, offering scalable, efficient,
                  and sustainable solutions for a better tomorrow.
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
            .
            <Col md={12}>
              <div className="wsustain-box">
                <h2>Why Sustainability Matters in Construction</h2>
                <p>
                  The construction sector contributes significantly to carbon
                  emissions, energy use, and landfill waste. Traditional
                  brick-and-mortar methods rely heavily on concrete, water, and
                  time — all of which carry environmental costs.
                </p>
                <p>
                  Our <strong>pre engineered building systems</strong> offer a
                  cleaner, smarter alternative for industries, farms, NGOs, and
                  institutions across India.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="comparison-section">
        <Container>
          <div className="comparison-container">
            <h2>Our Core Eco-Friendly Practices</h2>
            <div className="comparison-container-box">
              <Table responsive bordered hover>
                <thead className="common-table-thead">
                  <tr>
                    <th> Sustainable Feature</th>
                    <th>How It Helps</th>
                  </tr>
                </thead>
                <tbody className="common-table-tbody">
                  {comparisonList.map((compare, index) => (
                    <tr key={index.id}>
                      <td>
                        <p>{compare.feature}</p>
                      </td>
                      <td>
                        <p>{compare.prefab}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </section>

      <section className="information-section">
        <Container>
          <div className="information-container">
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Sustainable Benefits for You</h6>
              <ul>
                <li>Lower Lifecycle Costs – less maintenance, more savings</li>
                <li>
                  Faster Occupancy – start operations quicker = lower carbon
                  impact
                </li>
                <li>
                  Minimal Land Disruption – smaller foundations, no heavy
                  excavation
                </li>
                <li>
                  Low Embodied Energy – reduced energy use in material
                  manufacturing
                </li>
                <li>
                  Long-Term Recyclability – no material is wasted after use
                </li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Carbon tracking metrics for future net-zero projects</h6>
              <p>We’re not just eco-friendly — we’re eco-determined.</p>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Join Our Green Building Movement</h6>
              <p>
                When you build with DIY PreFab, you're not just saving time and
                money — you're contributing to a healthier planet. Build
                responsibly Reduce construction waste Lower your carbon
                footprint
              </p>
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

      <CounterSection />

      <TrustSlider />

      <TestimonialSection />

      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default Sustainability;
