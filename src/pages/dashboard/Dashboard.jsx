import React from 'react'
import Footer from '../../component/footer/Footer'
import NavBarHead from '../../component/navbar/NavBarHead'
import { Button, Col, Container, Row } from 'reactstrap'
import { TbSettingsBolt } from 'react-icons/tb'
import { IoLogoElectron, IoSettingsOutline } from 'react-icons/io5'
import ImagePath from '../../assets/ImagePath'
import { IoIosPlayCircle } from 'react-icons/io'
import { FaHelmetSafety } from 'react-icons/fa6'
import { MdSupportAgent } from 'react-icons/md'
import { GiCargoCrane, GiMineTruck } from 'react-icons/gi'

const Dashboard = () => {
    return (
        <div>
            <NavBarHead />

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
                        <Col md={6}>
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
                        <Col md={6}>
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
                        <Col md={6}>
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

            <Footer />
        </div>
    )
}

export default Dashboard