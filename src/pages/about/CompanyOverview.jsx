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

const CompanyOverview = () => {
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
        title={"Company Overview"}
        description={"Crafting Engineering Excellence"}
      />
      <section className="we-are-section">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="we-are-left">
                {/* <h6>Who We Are</h6> */}
                <h2>
                  Your Trusted and Visionary Partner in Engineering Excellence
                </h2>
                <p>
                  Prefab buildings empower professional experts with faster
                  deployment, design flexibility, and cost-effective
                  construction solutions.
                </p>
                <p>
                  Welcome to “DIY PreFab”— India’s emerging name in pre
                  engineered building solutions and modular prefab construction.
                </p>
                <p>
                  From remote villages to fast-paced industrial hubs, our
                  mission is simple:
                </p>
                <p>
                  Make high-quality prefab structures accessible, fast, and
                  affordable for all.
                </p>
                <p>
                  Whether you’re setting up a PEB warehouse in Rajasthan, a
                  factory in Madhya Pradesh, or a modular shed in Gujarat, “DIY
                  PreFab”delivers solutions tailored to your space, budget, and
                  timeline.
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
      <section className="common-section WhoWeAre-about">
        <Container>
          <div className="WhoWeAre-box">
            <h2>Who We Are</h2>
            <p>
              Backed by strong engineering, modern fabrication, and on-ground
              project execution experience, we specialize in:
            </p>
            <ul>
              <li> Pre Engineered Buildings (PEBs)</li>
              <li>Customizable Prefab Kits for Warehouses, Sheds, & Units</li>
              <li> Modular Buildings for Housing, Offices & Commercial Use</li>
              <li>Eco-Friendly & Low-Carbon Construction Systems</li>
              <li>Projects Across Rural, Urban & International Markets</li>
            </ul>
            <p>
              We proudly operate our in-house manufacturing facility in
              Banswara, Rajasthan, covering over 10,000+ sqm of area.
              Strategically located near the borders of Rajasthan, Gujarat, and
              Madhya Pradesh, our plant ensures efficient material delivery and
              fast execution across these three major states.
            </p>
            <p>
              With active operations in Udaipur, Jaipur, Ahmedabad, Indore, and
              growing export success in South Africa, DIY PreFab is on a mission
              to redefine how India builds — faster, smarter, and greener.
            </p>

            <p>
              Each building is designed using pre engineered steel frames,
              precision-cut panels, and simplified assembly workflows — ensuring
              strength, safety, and speed.
            </p>
          </div>
        </Container>
      </section>
      <section className="comparison-section">
        <Container>
          <div className="comparison-container">
            <h2>What Makes Us Different?</h2>
            <div className="comparison-container-box">
              <Table responsive bordered hover>
                <thead className="common-table-thead">
                  <tr>
                    <th>Feature</th>
                    <th>Why It Matters</th>
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
                      <td>
                        <p>{compare.conventional}</p>
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
              <h6>Where We Work</h6>
              <p>We serve across India with special focus on:</p>
              <ul>
                <li>Ahmedabad (Gujarat)</li>
                <li> Udaipur, Jaipur (Rajasthan)</li>
                <li>Indore, Bhopal (Madhya Pradesh)</li>
                <li>And recently, South Africa (Export project)</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Our Core Offerings</h6>
              <ul>
                <li>Industrial Sheds</li>
                <li>Prefab Warehouses</li>
                <li>Site Offices & Cabins</li>
                <li>Low-Cost Modular Homes</li>
                <li>Cold Storage & Agro Sheds</li>
                <li>Machine Rooms & Utility Spaces</li>
                <li>Roof Replacements for Running Plants</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Our Journey So Far</h6>
              <p>Whether you need:</p>
              <ul>
                <li>1000+ Tons of steel fabricated in the first year</li>
                <li>4+ Major PEB Projects delivered across India</li>
                <li>10–30 Days Avg. Completion Time per project</li>
                <li>Export Success to international client in South Africa</li>
              </ul>
            </div>
            <div className="info-box">
              <FaWarehouse className="info-box-icons" />
              <h6>Work With Us</h6>
              <p>Whether you need:</p>
              <ul>
                <li> A durable warehouse</li>
                <li>A prefab home in the hills</li>
                <li>A compact machine room</li>
                <li>Or a scalable PEB for industrial growth...</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="our-vision-mission-section"
        style={{
          backgroundImage: `url(${ImagePath.Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div className="our-vision-video-section">
            <img src={ImagePath.VideoBg} alt="" />
            <div className="play-button">
              <div className="play-button-box" onClick={handleOpenVideo}>
                <FaPlay className="play-button-icon" />
              </div>
              <p>Play Intro</p>
            </div>
          </div>
        </Container>
        {OpenVideo ? (
          <div className="play-video-container" onClick={handleOpenVideo}>
            <button className="close-video-btn">✖</button>
            <div className="video-wrapper">
              <iframe
                width="800"
                height="450"
                src="../src/assets/video\videoplayback.webm"
                title="Intro Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : null}
      </section>

      <CounterSection />

      <TrustSlider />

      <TestimonialSection />

      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default CompanyOverview;
