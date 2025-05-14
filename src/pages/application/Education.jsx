import React, { useState } from "react";
import NavBarHead from "../../component/navbar/NavBarHead";
import BannerSection from "../../component/bannerSection/BannerSection";
import Footer from "../../component/footer/Footer";
import WaveWrapper from "../../component/waveWrapper/WaveWrapper";
import TrustSlider from "../../component/trustSlider/TrustSlider";
import { Button, Col, Container, Progress, Row } from "reactstrap";
import { TbSettingsUp } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaLayerGroup, FaLeaf, FaPlay, FaSortAmountUp } from "react-icons/fa";
import ImagePath from "../../assets/ImagePath";
import CounterSection from "../../component/counter/CounterSection";
import { MdEngineering, MdFactory } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiCargoCrane } from "react-icons/gi";
import { VscFileSubmodule } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";

const Education = () => {
  const [OpenVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => {
    setOpenVideo(!OpenVideo);
  };

  const weOfferList = [
    {
      id: 1,
      icon: <MdFactory className="we-offer-icons" />,
      title: "Fabrication",
      description:
        "Our fabrication process ensures precision-built prefab office and workspace structures that are durable, efficient, and ready for rapid deployment.",
    },
    {
      id: 2,
      icon: <HiOutlineClipboardDocumentList className="we-offer-icons" />,
      title: "Procurement",
      description:
        "Our streamlined procurement process ensures timely sourcing of high-quality materials for prefab office and workspace construction.",
    },
    {
      id: 3,
      icon: <FaLayerGroup className="we-offer-icons" />,
      title: "Engineering & Design",
      description:
        "Our engineering and design process combines innovation with precision to create efficient, modern prefab office and workspace solutions.",
    },
    {
      id: 4,
      icon: <GiCargoCrane className="we-offer-icons" />,
      title: "Construction",
      description:
        "Our construction process for prefab office and workspace buildings ensures fast, efficient, and high-quality results.",
    },
    {
      id: 5,
      icon: <VscFileSubmodule className="we-offer-icons" />,
      title: "Technical Consulting",
      description:
        "Unlock smarter building outcomes with our expert technical consulting for prefab office and workspace projects.",
    },
    {
      id: 6,
      icon: <MdEngineering className="we-offer-icons" />,
      title: "Civil Engineering",
      description:
        "Our civil engineering expertise ensures that every prefab office and workspace is structurally sound, efficient, and built to last.",
    },
  ];

  const chooseUs = [
    {
      id: 1,
      icon: <TbSettingsUp className="choose-us-icons" />,
      title: "Extended Equipment Lifespan",
      description:
        "Crafted with high-grade materials to ensure long-term durability and low maintenance in work environments.",
    },
    {
      id: 2,
      icon: <FaHelmetSafety className="choose-us-icons" />,
      title: "Enhanced Safety Compliance",
      description:
        "All structures are fabricated to meet stringent workplace safety standards and building codes.",
    },
    {
      id: 3,
      icon: <FaSortAmountUp className="choose-us-icons" />,
      title: "Client-Centric Approach",
      description:
        "Our workspace solutions are tailored for efficiency, comfort, and user satisfaction from design to delivery.",
    },
    {
      id: 4,
      icon: <FaLeaf className="choose-us-icons" />,
      title: "Eco-Friendly Fabrication",
      description:
        "We use sustainable materials and processes to reduce environmental impact while maximizing performance.",
    },
  ];

  return (
    <div>
      <NavBarHead />
      <BannerSection
        title={"Educational Institutions"}
        description={"Engineering Excellence, Industrial Solutions"}
      />

      <section className="common-section our-service-wrap">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="our-service-left">
                <div className="our-service-img">
                  <img src={ImagePath.ourService} alt="Our Service" />
                </div>
                <div className="our-service-performance">
                  <FiSettings className="service-icon" />
                  <div className="performance-box">
                    <h5>Precision Performance</h5>
                    <p>
                      Machina excels in delivering precise and efficient
                      performance
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="our-service-right">
                <h6>Our Service</h6>
                <h2>
                  Precision Fabrication for Modern Educational Infrastructure
                </h2>
                <p>
                  We offer expertly fabricated prefabricated building solutions tailored to meet the dynamic needs of educational institutions:
                </p>
                <ul>
                  <li>
                    <strong>Modular Classrooms – </strong>Quick-to-install, durable classrooms designed for comfort, safety, and scalability.
                  </li>
                  <li>
                    <strong>School & College Buildings –</strong> Fabricated structures that support large student populations and evolving academic needs.
                  </li>
                  <li>
                    <strong>Labs, Libraries & Admin Blocks –</strong> Functional, fully-equipped spaces for specialized learning and operations.
                  </li>
                  <li>
                    <strong>Custom Educational Structures – </strong> Bespoke prefab designs aligned with institutional goals, space, and aesthetics.
                  </li>
                </ul>
                <p>
                  Every project includes a free design and estimate consultation along with a complimentary quality verification check. Leverage our 3D Smart Building Planner to explore layouts, customize features, and confidently visualize your campus before fabrication begins.
                </p>
                <div className="progress-section">
                  <div className="progress-item">
                    <div className="label">
                      <span>Customer Satisfaction</span>
                      <span className="percent">97%</span>
                    </div>
                    <Progress value={97} className="custom-progress" />
                  </div>

                  <div className="progress-item">
                    <div className="label">
                      <span>Utilization Works</span>
                      <span className="percent">84%</span>
                    </div>
                    <Progress value={84} className="custom-progress" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <TrustSlider />

      <section
        className="we-offer"
        style={{
          backgroundImage: `url(${ImagePath.Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 0",
          backgroundColor: "#a8dadc",
        }}
      >
        <Container>
          <div className="we-offer-header">
            <p>What WE oFFER</p>
            <h4>Engineering solutions for all industries</h4>
          </div>
          <div className="we-offer-container">
            {weOfferList.map((item, index) => (
              <div className="we-offer-box" key={index}>
                <div className="we-offer-inner">
                  <div className="we-offer-front">
                    <div className="we-offer-icon">{item.icon}</div>
                    <div className="we-offer-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="we-offer-hover-box">
                    <div className="we-offer-hover-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <Button className="common-btn">Learn More</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CounterSection />

      <section className="why-choose-us">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="why-choose-left-content-container">
                <h6>Why Choose Us</h6>
                <h4>
                  Precision Fabrication for High-Performance Office & Workspace
                  Solutions
                </h4>
                <p>
                  At DIY PreFab, we focus on delivering top-tier prefab
                  buildings that are expertly fabricated for functionality,
                  speed, and style—enhancing productivity and professionalism.
                </p>
                <hr style={{ borderColor: "#001524", borderWidth: "1px" }} />
                <div className="choose-us-container">
                  {chooseUs.map((item, index) => (
                    <div className="why-choose-us-boxes">
                      <div className="box-icon">{item.icon}</div>
                      <div className="box-content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={6}>
                  <div className="why-choose-right-content-container">
                    <img
                      src={ImagePath.ChooseUsVideo}
                      alt="Industry-Video"
                      className="img-fluid"
                    />
                    <div className="play-button">
                      <div
                        className="play-button-box"
                        onClick={handleOpenVideo}
                      >
                        <FaPlay className="play-button-icon" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="why-choose-right-content-container">
                    <img
                      src={ImagePath.ChooseUsImg}
                      alt="Industry-Video"
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default Education;
