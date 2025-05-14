import React from "react";
import NavBarHead from "../../component/navbar/NavBarHead";
import Footer from "../../component/footer/Footer";
import WaveWrapper from "../../component/waveWrapper/WaveWrapper";
import BannerSection from "../../component/bannerSection/BannerSection";
import ImagePath from "../../assets/ImagePath";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button, Col, Container, Row } from "reactstrap";

const SucessStories = () => {
  return (
    <div>
      <NavBarHead />
      <BannerSection
        title={"Success Stories"}
        description={"Empowered Minds, Innovative Solutions"}
      />

      <section className="common-section sucess-stories-wrap">
        <Container>
          <div className="sucess-head">
            <h6>Our Expert Team</h6>
            <h2>Meet the Team Driving Engineering</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="sucess-main">
            <Row>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg1} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg2} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg3} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg4} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg1} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg2} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg3} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} lg={3}>
                <div className="sucess-box">
                  <div className="sucess-img">
                    <img src={ImagePath.sucessImg4} alt="" />
                  </div>
                  <div className="sucess-stories-lower">
                    <h3>Alexandra Mills</h3>
                    <p>Founder</p>
                    <ul>
                      <li>
                        <Link>
                          <FaFacebookF
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaInstagram
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaXTwitter
                            fontSize={16}
                            className="sucess-social-icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="common-section join-wrap">
        <div className="join-img-right">
          <img src={ImagePath.sucessBg} alt="" />
        </div>
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <div className="join-box">
                <h6>Join us</h6>
                <h2>How will you engineer a better world?</h2>
                <p>
                  Elit consectetuer blandit diam quam cubilia. Dis sagittis
                  parturient odio finibus tempus ornare feugiat porttitor.
                </p>
                {/* <div className="join-line"></div> */}

                <Button className="common-btn">Contact Us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="common-section insight-article-erap">
        <Container>
          <div className="insight-head">
            <h3>Insight & Article</h3>
            <Link to="#" className="common-btn">All Article</Link>
          </div>
          <div className="insight-lwr">
            <Row>
              <Col md="3">
                <div className="insight-box">
                  <h3>Hello world!</h3>
                  <ul>
                    <li>February 9, 2025</li>
                    <li>1 Comment</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <WaveWrapper />
      <Footer />
    </div>
  );
};

export default SucessStories;
