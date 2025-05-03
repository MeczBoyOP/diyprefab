import React, { useState } from 'react'
import Footer from '../../component/footer/Footer'
import NavBarHead from '../../component/navbar/NavBarHead'
import { Button, Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Input, Row } from 'reactstrap'
import { TbSettingsBolt, TbSettingsUp } from 'react-icons/tb'
import ImagePath from '../../assets/ImagePath'
import { IoIosPlayCircle } from 'react-icons/io'
import { FaHelmetSafety } from 'react-icons/fa6'
import { MdFactory, MdSupportAgent } from 'react-icons/md'

import Counter from '../../component/counter/Counter'
import { FaLayerGroup, FaLeaf, FaSortAmountUp } from 'react-icons/fa'
import { IoLogoElectron, IoSettingsOutline } from 'react-icons/io5'
import { GiCargoCrane, GiMineTruck } from 'react-icons/gi'
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2'
import ContactForm from '../../component/contactform/ContactForm'
import ContactImg from '../../assets/images/undraw_letter_ombg.svg'
import DashboardSlider from '../../component/dashboardslider/DashboardSlider'

const Dashboard = () => {
    const chooseUs = [
        {
            id: 1,
            icon: <TbSettingsUp className='choose-us-icons' />,
            title: "Extended Equipment Lifespan",
            description: "Crafted with high-grade materials to ensure long-term durability and low maintenance in work environments."
        },
        {
            id: 2,
            icon: <FaHelmetSafety className='choose-us-icons' />,
            title: "Enhanced Safety Compliance",
            description: "All structures are fabricated to meet stringent workplace safety standards and building codes."
        },
        {
            id: 3,
            icon: <FaSortAmountUp className='choose-us-icons' />,
            title: "Client-Centric Approach",
            description: "Our workspace solutions are tailored for efficiency, comfort, and user satisfaction from design to delivery."
        },
        {
            id: 4,
            icon: <FaLeaf className='choose-us-icons' />,
            title: "Eco-Friendly Fabrication",
            description: "We use sustainable materials and processes to reduce environmental impact while maximizing performance."
        }
    ]

    const weOfferList = [
        {
            id: 1,
            icon: <MdFactory className='we-offer-icons' />,
            title: "Fabrication",
            description: "Our fabrication process ensures precision-built prefab office and workspace structures that are durable, efficient, and ready for rapid deployment."
        },
        {
            id: 2,
            icon: <HiOutlineClipboardDocumentList className='we-offer-icons' />,
            title: "Procurement",
            description: "Our streamlined procurement process ensures timely sourcing of high-quality materials for prefab office and workspace construction."
        },
        {
            id: 3,
            icon: <FaLayerGroup className='we-offer-icons' />,
            title: "Engineering & Design",
            description: "Our engineering and design process combines innovation with precision to create efficient, modern prefab office and workspace solutions."
        },
        {
            id: 4,
            icon: <GiCargoCrane className='we-offer-icons' />,
            title: "Construction",
            description: "Our construction process for prefab office and workspace buildings ensures fast, efficient, and high-quality results."
        },
        {
            id: 5,
            icon: <GiCargoCrane className='we-offer-icons' />,
            title: "Technical Consulting",
            description: "Unlock smarter building outcomes with our expert technical consulting for prefab office and workspace projects."
        },
        {
            id: 6,
            icon: <GiCargoCrane className='we-offer-icons' />,
            title: "Civil Engineering",
            description: "Our civil engineering expertise ensures that every prefab office and workspace is structurally sound, efficient, and built to last."
        },
    ]

    return (
        <div>
            <NavBarHead />

            <DashboardSlider />

            <section className="performance-section">
                <Container>
                    <div className="video-section-container">
                        <div className="video-section">
                            <img src={ImagePath.Performance} alt="Video" loading="lazy" className='img-fluid' />
                            <div className="video-play-button">
                                <IoIosPlayCircle className='performance-video-icons' />
                            </div>
                        </div>
                        <div className="performance-content-box">
                            <IoLogoElectron className='performance-icons' />
                            <h6>Precision Performance</h6>
                            <p>Precision Performance ensures every detail is executed with accuracy, delivering consistent quality and reliability.</p>
                        </div>
                        <div className="performance-content-box">
                            <TbSettingsBolt className='performance-icons' />
                            <h6>Innovative Automation</h6>
                            <p>Innovative automation streamlines processes through advanced technology, enhancing efficiency, accuracy, and productivity.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="we-are-section">
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <div className="we-are-left">
                                <h6>Who We Are</h6>
                                <h2>Your Trusted and Visionary Partner in Engineering Excellence</h2>
                                <p>Welcome to <span>DIY PreFab</span>, where innovation meets efficiency in the prefabrication industry. We provide cutting-edge, <span>high-quality PEB and modular structures</span>, ensuring faster construction, reduced costs, and unmatched durability. Our <span>expert engineers</span> are ready to guide you with a <span>free design & estimate consultation</span> to find the best solution for your needs. Plus, we offer a <span>free-of-cost quality verification check</span> to guarantee the highest industry standards. <br />
                                    <span>Explore our 3D Smart Building Planner</span>, an intuitive digital tool that allows you to <span>visualize, customize, and refine</span> your prefabricated structure in real time. This immersive platform empowers you to <span>experiment with layouts, optimize material usage, and perfect your design before execution</span>—ensuring efficiency, cost-effectiveness, and sustainability from day one.</p>
                                <div className="we-are-left-content-container">
                                    <div className="we-are-left-content-box">
                                        <FaHelmetSafety className='performance-icons' />
                                        <h4>Professional Expert</h4>
                                        <p>Prefab buildings empower professional experts with faster deployment, design flexibility, and cost-effective construction solutions.</p>
                                    </div>
                                    <div className="we-are-left-content-box">
                                        <MdSupportAgent className='performance-icons' />
                                        <h4>24/7 Premium Support</h4>
                                        <p>Experience uninterrupted service and peace of mind with 24/7 premium support tailored for your prefab building needs.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="we-are-right">
                                <div className="we-are-back-image-section">
                                    <div className="we-are-back-right-content-box">
                                        <div className="we-are-back-right-content">
                                            <h4>7+</h4>
                                            <p>Years of Experience</p>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="we-are-back-right-content">
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

            <section className="we-do-section">
                <Container>
                    <div className="we-do-container">
                        <div className="we-do-box">
                            <GiMineTruck className='we-do-icons' />
                            <hr />
                            <h3>Experience & dependability</h3>
                            <p>Prefab buildings offer unmatched experience and dependability through consistent quality, faster delivery, and long-term structural reliability.</p>
                            <Button className='common-btn'>Learn More</Button>
                        </div>
                        <div className="we-do-box">
                            <GiCargoCrane className='we-do-icons' />
                            <hr />
                            <h3>Licensing deals & scalability</h3>
                            <p>Prefab buildings offer a fast, flexible, and scalable solution ideal for streamlined licensing deals and rapid business expansion.</p>
                            <Button className='common-btn'>Learn More</Button>
                        </div>
                        <div className="we-do-box">
                            <FaHelmetSafety className='we-do-icons' />
                            <hr />
                            <h3>Holistic & custom approach</h3>
                            <p>Prefab buildings offer a holistic and custom approach, blending tailored design with efficient construction to meet unique project needs seamlessly.</p>
                            <Button className='common-btn'>Learn More</Button>
                        </div>
                        <div className="we-do-box">
                            <IoSettingsOutline className='we-do-icons' />
                            <hr />
                            <h3>Development & fabrication</h3>
                            <p>Prefab building plays a vital role in modern development and fabrication by enabling faster construction, precision engineering, and cost-effective scalability.</p>
                            <Button className='common-btn'>Learn More</Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="our-vision-mission-section">
                <Container>
                    <Row>
                        <Col md={6} className='mb-md-0 mb-sm-1'>
                            <div className="our-vision-container">
                                <h6>Our Vision</h6>
                                <hr />
                                <p>We envision a future where every person, regardless of income or location, has access to strong, sustainable, and customizable buildings.</p>
                                <p>No middlemen. No delays. Just transparent pricing, modular design, and unmatched speed.</p>
                                <p>DIY PreFab is building the future — one kit at a time.</p>
                                <Button className='common-btn'>Learn More</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="our-mission-container our-vision-container">
                                <h6>Our Mission</h6>
                                <hr />
                                <p>To simplify and accelerate construction by offering high-quality, customizable, and affordable pre engineered building kits that empower individuals, businesses, and communities to build with confidence.</p>
                                <Button className='common-btn'>Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="counter-section">
                <Container>
                    <div className="counter-section-container">
                        <Counter end={96} duration={1200} label="Cases Solved" />
                        <Counter end={20} duration={1700} label="Project Done" showPercent={false} />
                        <Counter end={100} duration={2200} label="Happy Client" />
                        <Counter end={100} duration={2500} label="Timeline Delivery" />
                    </div>
                </Container>
            </section>

            <section className="why-choose-us">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className="why-choose-left-content-container">
                                <h6>Why Choose Us</h6>
                                <h4>Precision Fabrication for High-Performance Office & Workspace Solutions</h4>
                                <p>At DIY PreFab, we focus on delivering top-tier prefab buildings that are expertly fabricated for functionality, speed, and style—enhancing productivity and professionalism.</p>
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
                                        <img src="https://img.freepik.com/free-vector/industry-smart-city_53876-17751.jpg?uid=R97735465&ga=GA1.1.1117345047.1692198205&semt=ais_hybrid&w=740" alt="Industry-Video" className='img-fluid' />
                                        <div className="hover-content-section">
                                            <h4>Smart Building</h4>
                                            <p>Explore the future of construction with our smart building solutions, integrating technology and design for optimal efficiency.</p>
                                            <Button className='btn common-btn'>Learn More</Button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="why-choose-right-content-container">
                                        <img src="https://img.freepik.com/free-photo/pollution-industry-exterior-daylight_23-2149057677.jpg?uid=R97735465&ga=GA1.1.1117345047.1692198205&semt=ais_hybrid&w=740" alt="Industry-Video" className='img-fluid' />
                                        <div className="hover-content-section">
                                            <h4>Smart Building</h4>
                                            <p>Explore the future of construction with our smart building solutions, integrating technology and design for optimal efficiency.</p>
                                            <Button className='btn common-btn'>Learn More</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="we-offer" style={{
                backgroundImage: `url(${ImagePath.WeOffer})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '50px 0',
                marginBottom: '20px',
            }}>
                <Container>
                    <div className="we-offer-container">
                        {weOfferList.map((item, index) => (
                            <div className="we-offer-box" key={index}>
                                <div className="we-offer-inner">
                                    <div className="we-offer-front">
                                        <div className="we-offer-icon">{item.icon}</div>
                                        <div className="we-offer-content">
                                            <h4>{item.title}</h4>
                                        </div>
                                        <Button className="common-btn">See More</Button>
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

            <section className="take-action" >
                <img src={ImagePath.TakeAction} alt="take-action-background" className='img-fluid' />
                <Container>
                    <div className="take-action-container">
                        <div className="take-action-box">
                            <h3>Empower Your Future with Industrial Excellence, Seize the Opportunity to Engineer Innovation</h3>
                            <p>We assist with structural planning, smart material choices, and seamless integration of building systems.</p>
                            <Button className='btn common-btn'>TAKE ACTION NOW</Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="trust-slider">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={6}>
                            <div className="trust-slider-container">
                                <h2>Trusted by Engineering Visionaries and Industrial Innovators Worldwide</h2>
                                <p>Trusted by engineering and industrial leaders for delivering innovative, reliable, and scalable prefab building solutions.</p>
                                <hr style={{ borderColor: "#001524", borderWidth: "1px" }} />
                                {/* Slider Will be here... */}
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="trust-map-img-box">
                                <img src={ImagePath.Map} alt="map" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="send-message">
                <Container>
                    <Row className='align-items-center'>
                        <Col md={12} lg={8}>
                            <ContactForm />
                        </Col>
                        <Col lg={4}>
                            <div className="contact-form-img-box">
                                <img src={ContactImg} alt="" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>          

            <div className="wave-wrapper">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
                <Container>
                    <div className="sign-up-content">
                        <h5 style={{ position: "relative", zIndex: 2 }}>
                            Stay updated with our latest news, promotions, and tech insights.
                        </h5>
                        <div className="input-button-wrapper">
                            <input type="text" placeholder="Email" className="styled-input" />
                            <button className="styled-button">Submit</button>
                        </div>
                    </div>
                </Container>
            </div>


            <Footer />
        </div>
    )
}

export default Dashboard