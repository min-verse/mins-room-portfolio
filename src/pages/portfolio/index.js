import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { worktimeline, meta } from "../../content_option";

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
          </Col>
        </Row>
        <Row>
          <table className="table caption-top">
                    <tbody>
                      {worktimeline.map((data, i) => {
                        return (
                          <tr key={i}>
                              <th scope="row">{data.jobtitle}</th>
                              <td>
                                <em>{data.where}</em>
                                <div>
                                  <img
                                    width={100}
                                    src={data.logo}
                                    style={{borderRadius:20}}
                                    alt={`${data.jobtitle} @ ${data.where}`}
                                    className="mt-2"
                                  />
                                </div>
                              </td>
                              <td>{data.desc}
                                { 
                                  data.skills &&
                                  <>
                                    <hr className="t_border my-4 ml-0 text-left" />
                                    <p><em>Technologies:</em> {data.skills.join(', ')}</p>
                                  </>
                                }
                                <hr className="t_border my-4 ml-0 text-left" />
                                {
                                  data.bullets && 
                                    <ul style={{listStyle: 'inside'}}>
                                      {
                                        data.bullets.map((item, j)=>{
                                          return (
                                            <li key={j} className="mb-3">{item}</li>
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
      </Container>
    </HelmetProvider>
  );
};
