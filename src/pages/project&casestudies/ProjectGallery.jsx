import React, { useState } from "react";
import NavBarHead from "../../component/navbar/NavBarHead";
import WaveWrapper from "../../component/waveWrapper/WaveWrapper";
import Footer from "../../component/footer/Footer";
import { Col, Container, Row } from "reactstrap";
import ImagePath from "../../assets/ImagePath";
import WhoWeAre from "../../component/whoWeAre/WhoWeAre";
import { TbSettingsUp } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaLeaf, FaPlay, FaSortAmountUp } from "react-icons/fa";
import CounterSection from "../../component/counter/CounterSection";
import { Link } from "react-router-dom";

const ProjectGallery = () => {
  const [OpenVideo, setOpenVideo] = useState(false);
  const handleOpenVideo = () => {
    setOpenVideo(!OpenVideo);
  };
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

      <section className="project-banner-wrap">
        <div className="project-bnr-bg">
          <img src={ImagePath.projectBnrBg} alt="" />
        </div>
        <Container>
          <Row>
            <Col md={6} lg={6} className="project-box">
              <h3>
                Industrial IoT <br /> Deployment
              </h3>
              <p>
                Imperdiet congue dis tristique malesuada cursus tincidunt si.
                Iaculis phasellus libero est sociosqu tellus primis maximus nunc
                ultrices. Suspendisse sodales magnis dolor elit ridiculus sem
                dignissim nunc eleifend pharetra.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="common-section project-top">
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <div className="project-gallery-left">
                <div className="project-gallery-list">
                  <h3>Another Project</h3>
                  <ul>
                    <li>
                      <Link to="" className="project-gallery-link">
                        Renewable Energy Integration
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="project-gallery-link">
                        Robotics Integration
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="project-gallery-link">
                        Industrial IoT Deployment
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="project-gallery-link">
                        Water Management System
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="project-gallery-link">
                        Advanced Materials Research
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6} lg={8}>
              <div className="project-gallery-right">
                <div className="project-main-img">
                  <img src={ImagePath.projectgGalleryMainImg} alt="" />
                </div>
                <div className="project-main-content">
                  <h3>Resulted in a 30% increase in production efficiency</h3>
                  <p>
                    At “DIY PreFab”, our innovative modular building solutions
                    have resulted in a remarkable 30% increase in production
                    efficiency. By streamlining the construction process and
                    integrating smart design with precision engineering, we help
                    our clients save time, reduce labor costs, and achieve
                    faster project completion—without compromising on quality.
                  </p>
                </div>
                <h3 className="overview-head">Overview</h3>
                <Row>
                  <Col md={6}>
                    <div className="project-left">
                      <p>
                        Welcome to the “DIY PreFab” Project Gallery – a showcase
                        of innovation, craftsmanship, and real-world
                        applications of our modular building solutions. Explore
                        a diverse range of completed projects, from modern
                        backyard studios and compact living spaces to functional
                        commercial units. Each build highlights the versatility,
                        durability, and aesthetic appeal of our prefab kits, all
                        customized to fit unique lifestyles and business needs.
                        Get inspired by what’s possible when smart design meets
                        DIY convenience.
                      </p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="project-right">
                      <img src={ImagePath.projectsmallimg} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="project-empower-wrap">
        <div className="project-empower-bg">
          <img src={ImagePath.featureproject} alt="" />
        </div>
        <Container>
          <Row>
            <Col>
              <div className="project-empower-box">
                <h3>
                  Empower Your Future with Industrial Excellence, Seize the
                  Opportunity to Engineer Innovation
                </h3>
                <p>
                  Empower your future with industrial excellence, driving
                  progress through cutting-edge technology and smart solutions.
                  Seize the opportunity to engineer innovation and shape a
                  smarter, more efficient tomorrow.
                </p>
              </div>
            </Col>
          </Row>
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

export default ProjectGallery;
