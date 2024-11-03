import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Login = () => {
  const [item, setItem] = useState("Жмите");
  async function buttonHandler(e) {
    e.preventDefault();
    setItem("Нажали!");
  }
  return (
    <>
      <Container>
        <Row className="m-5">
          <Col></Col>
          <Col>
            <Form.Text id="HelpBlock">
              <h1>Вход в учетную запись</h1>
            </Form.Text>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Form.Label htmlFor="login">Логин</Form.Label>
            <Form.Control
              type="text"
              id="login"
              aria-describedby="loginHelpBlock"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Form.Label htmlFor="inputPassword5">Пароль</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button variant="primary" onClick={buttonHandler} className="mt-3">
              Войти
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-5">
          <Col></Col>
          <Col>
            <Form.Text id="passwordHelpBlock" muted>
              {item}
            </Form.Text>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
