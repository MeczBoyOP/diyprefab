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
import WhoWeAre from '../../component/whoWeAre/WhoWeAre'
import OurVisionMission from '../../component/ourVisionMission/OurVisionMission'
import CounterSection from '../../component/counter/CounterSection'
import TrustSlider from '../../component/trustSlider/trustSlider'
import WaveWrapper from '../../component/waveWrapper/WaveWrapper'

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

            <WhoWeAre />

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

            <OurVisionMission />

            <CounterSection />

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

            <TrustSlider />

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

            <WaveWrapper />


            <Footer />
        </div>
    )
}

export default Dashboard