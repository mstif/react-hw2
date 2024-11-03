import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const HomePage = () => {
  const [item, setItem] = useState("Это начальная страница приложения");

  return (
    <>
      <Container>
        <Row className="m-5">
          <Col></Col>
          <Col>
            <Form.Text id="HelpBlock">
              <h1>{item}</h1>
            </Form.Text>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Form.Label htmlFor="Anyinfo">Информация для store</Form.Label>
            <Form.Control
              type="text"
              id="Anyinfo"
							aria-describedby="HelpBlock"
							value={item}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button variant="primary" onClick={loginHandler} className="mt-3">
              Установить текст
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
  async function loginHandler(e) {
    e.preventDefault();
    setItem("Lorem ipsum");
  }
};

export default HomePage;
