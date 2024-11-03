import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const Page404 = () => {
  return (
    <>
      <Container>
        <Row className="m-5">
          <Col></Col>
          <Col>
            <Form.Text id="HelpBlock">
              <h1>Страница не найдена</h1>
            </Form.Text>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Page404;
