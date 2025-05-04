import React from 'react'
import ImagePath from '../../assets/ImagePath'
import { Col, Container, Row } from 'reactstrap'

const TrustSlider = () => {
  return (
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
  )
}

export default TrustSlider