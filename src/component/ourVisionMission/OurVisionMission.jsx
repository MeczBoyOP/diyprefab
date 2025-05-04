import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

const OurVisionMission = () => {
  return (
    <section className="our-vision-mission-section">
                <Container>
                    <Row>
                        <Col md={6} className='mb-md-0 mb-1'>
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
  )
}

export default OurVisionMission