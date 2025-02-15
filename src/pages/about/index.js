import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  skills,
  skills2,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            {/* TODO: Add an underline to these links */}
            <p className="subtitle-portfolio">Including <u><a href="#skills-section">Skills</a></u> and <u><a href="#services-section">Services</a></u></p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.aboutme2}</p>
              <p>{dataabout.aboutme3}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp" id="skills-section">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {/* TODO: Split these into two columns? */}
            <Row>
              <Col lg="6" className="mb-5">
                {skills.map((data, i) => {
                  return (
                    <div key={i}>
                      <h3 className="progress-title">{data.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${data.value}%`,
                          }}
                        >
                          <div className="progress-value">{data.value}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
              <Col lg="6" className="mb-5">
                {skills2.map((data, i) => {
                  return (
                    <div key={i}>
                      <h3 className="progress-title">{data.name}</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: `${data.value}%`,
                          }}
                        >
                          <div className="progress-value">{data.value}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="sec_sp" id="services-section">
          <Col lang="5">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
