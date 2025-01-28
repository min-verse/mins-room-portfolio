import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, NavItem } from "react-bootstrap";
import { worktimeline, skills, dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Professional Experiences </h1>{" "}
            <p className="subtitle-portfolio">A timeline of my professional experiences </p>
            {/* <hr className="t_border my-4 ml-0 text-left" /> */}
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
              <Col lg="5">
                <h3 className="color_sec py-4">Relevant Professional History</h3>
              </Col>
              <Col lg="7">
                <table className="table caption-top">
                  <tbody>
                    {worktimeline.map((data, i) => {
                      return (
                        <tr key={i}>
                            <th scope="row">{data.jobtitle}</th>
                            <td>{data.where}</td>
                            <td>{data.desc}</td>
                          <td>{data.date}</td>
                        </tr>
                      );
                    })}
                   </tbody>
                </table>
            </Col>
        </Row> */}
        <Row>
        <table className="table caption-top">
                  <tbody>
                    {worktimeline.map((data, i) => {
                      return (
                        <tr key={i}>
                            <th scope="row">{data.jobtitle}</th>
                            <td>{data.where}</td>
                            <td>{data.desc}
                              <hr className="t_border my-4 ml-0 text-left" />
                              {
                                data.skills && 
                                  <ul style={{listStyle: 'inside'}}>
                                    {
                                      data.skills.map((item, j)=>{
                                        return (
                                          <li key={j}>{item}</li>
                                        )
                                      })
                                    }
                                  </ul>
                              }
                            </td>
                            <td>{data.date}</td>
                        </tr>
                      );
                    })}
                   </tbody>
                </table>
        </Row>
        {/* <Col lg="7">
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
          </Col> */}
        {/* <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div> */}
      </Container>
    </HelmetProvider>
  );
};
