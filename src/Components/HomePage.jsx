import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const HomePage = () => {
  const textValue = useSelector((gs) => gs.textbox.textboxvalue);
  const [item, setItem] = useState(textValue);
  const dispatch = useDispatch();

  async function textHandler(e) {
    e.preventDefault();
    setItem(e.target.value);
    dispatch({
      type: "SET_START_TEXT",
      payload: e.target.value
    });
  }

  async function buttonHandler(e) {
    e.preventDefault();
    setItem("Lorem ipsum");
  }
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
              onChange={textHandler}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Button variant="primary" onClick={buttonHandler} className="mt-3">
              Установить текст без store
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
