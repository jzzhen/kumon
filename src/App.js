import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ts = {
  /*A1a:"2a1,1a1,4a1,3a1,6a1,8a1,5a1,9a1,7a1,10a1",
  A1b:"3a2,1a2,2a2,4a2,8a2,6a2,7a2,5a2,9a2,10a2",
  A2a:"2a3,4a3,3a3,1a3,5a3,8a3,7a3,9a3,6a3,10a3",
  A2b:"3a4,2a4,4a4,1a4,5a4,7a4,9a4,6a4,8a4,10a4",
  A3a:"2a5,5a5,1a5,3a5,4a5,7a5,8a5,6a5,10a5,9a5",
  A3b:"3a6,4a6,1a6,2a6,6a6,5a6,8a6,7a6,10a6,9a6",
  A4a:"2a7,1a7,5a7,4a7,6a7,3a7,7a7,10a7,8a7,9a7",
  A4b:"3a8,1a8,4a8,2a8,6a8,5a8,8a8,10a8,7a8,9a8",
  A5a:"2a9,3a9,1a9,5a9,4a9,7a9,10a9,8a9,6a9,9a9",
  A5b:"3a10,1a10,2a10,4a10,7a10,8a10,5a10,9a10,6a10,10a10",
  A6a:"3a3,4a3,7a3,9a3,8a3,5a4,3a4,6a4,8a4,7a4",
  A6b:"2a6,3a6,5a6,7a6,6a6,3a7,2a7,4a7,5a7,7a7",
  A7a:"2a4,4a4,3a4,6a4,9a4,3a5,4a5,6a5,5a5,8a5",
  A7b:"4a7,3a7,5a7,6a7,8a7,3a8,2a8,4a8,6a8,8a8",
  A8a:"3a5,4a5,2a5,5a5,7a5,4a6,3a6,6a6,5a6,8a6",
  A8b:"2a8,3a8,5a8,7a8,9a8,3a9,2a9,4a9,6a9,8a9",
  A9a:"4a4,7a4,5a4,4a5,3a5,6a5,3a6,4a6,6a6,9a6",
  A9b:"3a7,5a7,6a7,2a8,4a8,5a8,3a9,5a9,7a9,9a9",
  A10a:"5a5,7a5,9a5,4a6,2a6,5a6,2a7,4a7,7a7,9a7",
  A10b:"4a8,3a8,6a8,2a9,4a9,5a9,2a10,6a10,4a10,9a10",
  A11a:"4a1,2a2,4a2,5a2,6a1,3a3,2a3,4a3,1a4,2a4,4a4",
  A11b:"3a2,3a3,5a3,4a3,6a2,4a4,3a4,5a4,1a5,2a5,4a5",
  A12a:"5a1,5a2,2a3,4a3,7a2,5a3,3a4,2a4,6a3,3a5,5a5",
  A12b:"4a2,5a3,3a4,5a4,8a2,7a3,1a5,4a5,4a4,1a6,4a6",
  A13a:"5a2,3a3,5a4,2a5,6a4,4a5,2a6,4a6,3a5,1a7,3a7",
  A13b:"4a3,4a4,3a5,1a6,5a5,3a6,1a7,2a7,1a8,2a8,1a9",
  A14a:"3a4,4a3,3a5,7a2,7a1,2a6,9a1,2a7,3a6,8a2,9a2",
  A14b:"6a1,6a2,2a7,8a1,6a4,2a6,8a2,1a9,9a2,7a3,8a3",
  A15a:"2a5,6a2,5a4,6a3,3a7,7a2,3a6,5a3,2a8,8a3,9a2",
  A15b:"1a6,5a3,3a7,2a6,2a8,1a9,6a3,4a5,7a3,9a2,8a3",
  A16a:"7a1,5a2,1a9,4a6,5a4,8a3,3a5,8a1,7a3,6a4,7a4",
  A16b:"5a3,2a5,4a5,2a7,2a8,8a2,7a4,5a5,6a5,4a6,5a6",
  A17a:"6a2,9a1,7a2,3a6,7a4,6a5,5a6,3a7,4a7,2a8,3a8",
  A17b:"5a4,2a6,8a2,5a6,3a6,6a5,3a8,6a4,4a7,1a9,2a9",
  A18a:"4a4,3a7,5a6,5a5,3a8,4a7,6a3,2a9,4a5,8a3,9a3",
  A18b:"2a7,7a3,3a6,2a8,2a9,9a3,3a8,7a4,8a4,6a5,7a5",
  A19a:"1a7,8a2,3a7,7a5,1a8,9a3,8a4,5a6,6a6,4a7,5a7",
  A19b:"9a1,6a3,8a4,7a5,6a4,5a7,6a6,3a8,4a8,2a9,3a9",
  A20a:"5a5,7a4,9a3,6a6,4a4,9a2,5a7,1a8,2a9,4a8,3a9",
  A20b:"4a6,7a2,7a5,6a5,5a7,8a4,7a3,6a6,4a7,3a9,4a8",
  A21a:"6a2,4a5,7a3,5a5,7a4,5a7,8a2,5a6,3a9,8a4,9a4",
  A21b:"5a3,7a2,5a5,2a7,6a4,2a9,4a8,6a5,9a3,9a4,7a5,8a5",
  A22a:"4a4,3a6,7a3,2a8,9a2,4a7,4a8,9a4,8a5,6a6,7a6",
  A22b:"2a6,6a3,1a9,3a8,3a9,6a4,8a3,8a4,7a6,8a5,5a7,6a7",
  A23a:"3a5,2a8,8a1,5a5,9a2,5a7,9a4,7a6,6a7,4a8,5a8",
  A23b:"1a7,4a5,5a6,2a8,9a1,7a4,8a5,4a8,6a7,5a8,3a9,4a9",
  A24a:"7a2,5a4,4a6,8a4,6a5,3a7,5a8,6a6,4a9,8a5,9a5",
  A24b:"4a5,3a7,1a8,8a2,4a7,3a9,7a5,6a7,9a5,4a9,7a6,8a6",
  A25a: "5a4,1a9,3a8,4a6,4a7,8a5,7a6,6a6,5a8,9a5,8a6",
  A25b: "2a7,4a6,6a5,9a1,5a6,8a4,6a7,9a3,4a9,9a4,8a6,9a5",
  A26a: "6a3,8a2,4a7,5a6,5a7,7a6,8a4,4a9,9a5,6a7,7a7",
  A26b: "1a8,6a4,2a9,3a8,8a5,4a8,6a7,7a5,8a6,7a7,5a8,6a8",
  A27a: "3a6,3a8,7a3,9a3,5a6,9a5,9a4,7a7,6a8,4a9,5a9",
  A27b: "3a7,6a5,1a9,4a8,8a3,3a9,9a5,6a8,8a5,5a9,8a6,9a6",
  A28a: "7a3,9a2,3a9,5a8,8a6,7a6,6a8,9a6,5a9,7a7,8a7",
  A28b: "4a6,8a3,7a5,6a7,8a6,4a9,8a7,9a6,6a8,7a8,5a9,6a9",
  A29a: "5a6,6a6,7a4,5a8,6a7,8a6,6a8,8a7,7a7,6a9,7a8",
  A29b: "6a4,8a3,5a7,8a6,4a9,6a8,9a6,7a7,7a6,5a9,7a8,6a9",
  A30a: "7a4,8a2,8a4,5a8,9a5,9a4,5a9,7a8,8a7,6a8,6a9",
  A30b: "2a9,9a3,2a8,7a6,5a9,8a5,8a7,6a9,7a7,7a8,9a6,9a5",
  A31a: "4a6,7a4,6a5,5a7,8a4,8a6,9a4,8a5,6a8,4a9,8a7,9a7",
  A31b: "5a5,3a8,2a9,4a8,9a3,5a7,7a6,6a7,9a5,9a7,7a8,8a8",
  A32a: "7a3,3a9,7a5,5a6,7a6,4a9,7a8,4a7,7a7,9a6,8a8,9a7",
  A32b: "1a9,7a4,3a9,4a8,6a7,8a3,5a8,9a2,5a9,8a8,6a9,7a9",
  A33a: "6a4,4a7,2a9,9a3,6a7,6a6,7a7,9a6,4a9,7a9,8a8,9a8",
  A33b: "3a7,3a9,4a8,9a4,3a8,4a9,8a6,9a7,9a8,8a7,7a9,8a9",
  A34a: "9a2,7a5,6a5,4a8,7a6,8a5,6a9,8a6,9a8,8a8,9a7,8a9",
  A34b: "4a7,8a4,5a8,2a9,9a4,8a8,6a8,7a9,9a6,7a8,8a9,9a8",
  A35a: "6a5,9a4,6a6,3a8,5a9,5a7,9a6,9a5,7a9,9a7,8a9,9a9",
  A35b: "8a4,6a8,4a9,9a3,5a8,7a7,9a7,7a9,9a6,7a8,9a8,9a9",
  A36a: "5a6,7a4,6a8,8a4,5a9,6a7,7a5,9a6,9a7,8a8,9a9,8a9",
  A36b: "6a6,5a7,9a4,7a7,6a8,8a7,7a9,7a8,9a7,6a9,9a9,9a8",
  A37a: "3a8,6a6,9a5,4a9,8a5,6a8,9a6,7a9,9a7,9a9,8a9,9a8",
  A37b: "4a8,6a7,5a8,9a5,9a6,6a9,5a9,8a7,8a8,9a9,9a7,8a9",
  A38a: "3a9,5a8,4a7,7a6,9a5,7a9,7a8,6a9,9a8,8a9,8a8,9a9",
  A38b: "7a5,9a4,8a6,5a9,8a7,8a9,9a6,7a9,7a7,8a8,9a9,9a8",
  A39a: "5a7,7a8,8a3,8a5,6a9,8a6,8a7,7a9,9a7,8a9,9a8,9a9",
  A39b: "9a4,8a6,7a7,8a9,7a5,8a7,8a8,9a6,7a9,7a8,9a9,9a8",
  A40a: "8a5,6a6,5a8,6a9,9a8,5a9,9a7,8a7,7a9,8a8,9a9,8a9",
  A40b: "7a6,9a3,7a9,8a8,7a7,7a8,9a7,8a7,9a9,6a9,9a8,8a9",
  A41a: "3a8,6a7,5a9,6a6,8a4,5a6,7a5,9a4,6a5,7a6,8a7,7a9",
  A41b: "7a4,7a7,8a3,8a5,8a6,9a3,9a5,9a7,10a1,10a2,10a4,10a5,10a7",
  A42a: "5a6,4a8,8a5,2a9,7a4,9a3,8a5,7a8,7a5,8a6,6a8,8a9",
  A42b: "8a4,8a7,9a2,9a4,9a6,10a3,10a6,10a8,11a1,11a2,11a4,11a5,11a7",
  A43a: "4a7,9a2,4a9,7a4,5a7,5a9,6a7,8a3,4a8,9a7,6a9,8a9",
  A43b: "9a3,9a6,10a4,10a7,10a9,11a3,11a6,11a8,12a1,12a2,12a4,12a6,12a7",
  A44a: "9a2,9a6,6a5,3a8,6a8,3a9,8a6,9a3,4a9,9a5,7a9,9a8",
  A44b: "9a4,9a7,10a5,10a9,10a10,11a4,11a8,11a9,12a2,12a3,12a5,12a7,12a8",
  A45a: "6a6,5a8,7a7,8a3,2a9,5a7,6a9,8a5,5a9,8a9,8a8,9a9",
  A45b: "10a5,10a7,11a5,11a6,11a9,12a4,12a6,12a8,13a1,13a2,13a4,13a6,13a7"*/
  A46a: "6a7,7a5,8a6,8a4,6a9,5a8,7a6,8a9,7a9,9a5,7a8,9a9",
  A46b: "10a6,10a8,11a4,11a7,12a2,12a5,13a3,13a5,13a7,14a1,14a3,14a5,14a6",
  A47a: "8a5,4a8,6a7,7a6,9a3,8a6,7a9,7a8,9a7,6a8,9a9,9a8",
  A47b: "11a5,11a8,12a3,12a5,13a2,13a5,14a2,14a4,14a6,15a1,15a3,15a4,15a5",
  A48a: "6a7,5a9,8a5,6a6,9a4,7a7,9a6,8a8,8a7,8a9,9a7,10a8",
  A48b: "11a6,11a9,12a3,12a6,13a2,13a6,14a2,14a5,15a2,15a4,16a1,16a3,16a4",
  A49a: "4a9,7a8,9a5,8a7,9a4,7a9,6a8,6a9,7a6,9a8,9a9,10a9",
  A49b: "12a4,12a7,13a3,13a5,14a3,14a6,15a2,15a5,16a2,16a4,17a1,17a2,17a3",
  A50a: "7a6,7a8,9a6,5a9,8a8,7a7,5a8,9a5,6a9,9a8,9a9,10a10",
  A50b: "13a3,13a6,14a4,14a3,15a3,15a4,16a4,16a3,17a2,17a3,18a1,18a2,19a1",
  A51a: "5a6,4a9,7a7,8a4,5a8,6a7,6a6,7a5,6a9,7a6,9a7,8a9",
  A51b: "8a5,9a6,10a8,10a10,11a3,11a6,11a7,11a9,12a2,12a6,12a7,12a8,12a9",
  A52a: "5a7,7a6,4a8,6a7,8a5,7a8,9a7,8a8,9a9,9a4,8a7,9a8",
  A52b: "9a5,10a4,11a7,11a8,12a3,12a5,12a8,12a9,13a3,13a6,13a7,13a8,13a9",
  A53a: "9a3,8a5,4a9,6a8,7a7,9a4,5a7,7a9,9a5,5a8,8a8,9a9",
  A53b: "10a6,11a4,12a5,12a7,13a5,13a7,13a8,13a9,14a2,14a6,14a7,14a8,14a9",
  A54a: "6a6,5a8,9a6,6a8,4a9,8a7,7a5,6a7,9a9,7a9,8a8,8a9",
  A54b: "11a5,12a6,13a4,13a6,14a3,14a8,14a7,14a9,15a4,15a6,15a7,15a8,15a9",
  A55a: "5a8,3a9,7a6,9a4,6a9,8a6,7a8,7a7,9a6,8a9,9a7,9a9",
  A55b: "12a4,13a4,14a3,14a6,15a6,15a8,15a7,15a9,16a3,16a5,16a6,16a7,16a8",
  A56a: "8a5,6a6,6a8,8a9,9a5,8a7,4a8,5a9,8a8,9a7,9a8,10a8",
  A56b: "13a4,14a5,15a3,15a6,16a6,16a5,16a7,16a8,17a2,17a4,17a5,17a6,17a7",
  A57a: "6a8,4a9,7a6,7a8,6a7,8a8,5a9,9a8,8a6,9a9,10a7,11a5",
  A57b: "14a4,15a2,16a2,16a4,17a3,17a5,17a4,17a6,18a1,18a3,18a4,18a5,18a6",
  A58a: "5a9,9a4,8a8,9a6,7a7,6a9,7a8,9a9,7a9,9a8,10a7,11a8",
  A58b: "15a3,16a3,17a2,17a4,18a3,18a6,18a6,18a4,18a5,19a1,19a2,19a4,19a3,19a5",
  A59a: "9a5,7a7,8a9,8a7,6a8,9a8,9a6,8a8,9a7,10a9,11a6,12a4",
  A59b: "13a6,14a6,15a3,15a7,16a2,16a6,16a8,17a3,17a4,17a6,18a2,18a4,18a6",
  A60a: "7a9,7a7,8a7,7a8,8a6,9a7,6a9,8a9,9a8,10a6,11a9,12a7",
  A60b: "14a6,15a5,16a3,16a5,17a2,17a5,17a7,18a1,18a2,18a5,19a4,19a3,19a5"
};
let nts = Object.assign(
  {},
  ...Object.keys(ts).map((k) => ({
    [k]: ts[k].split(",").map((x) => x.split("a"))
  }))
);

const TestPage = (props) => (
  <Container>
    <Row className="display-4 p-4">
      <Col>{props.name}</Col>
      <Col className="text-center">KUMON</Col>
      <Col></Col>
    </Row>
    <Row className="h4">
      <Col className="ml-4" xs="auto">
        Name:
      </Col>
      <Col className="border-bottom" xs="2">
        Charlotte
      </Col>
      <Col xs="auto">Time:</Col>
      <Col className="border-bottom" xs="2"></Col>
    </Row>
    {props.items.map((x, i) => (
      <Row className="m-2">
        <Col className="display-4" xs="1">
          <span className="h-100 align-middle">({i})</span>
        </Col>
        <Col className="display-3 text-center" xs="5">
          {" "}
          {x.join(" + ")}
        </Col>
        <Col className="display-3" xs="auto">
          {" "}
          ={" "}
        </Col>
      </Row>
    ))}
  </Container>
);
export default function App() {
  return (
    <div className="App">
      {Object.entries(nts)
        .map((ts) => <TestPage name={ts[0]} items={ts[1]} />)
        .reduce((p, n) => [p, <p style={{ pageBreakBefore: "always" }} />, n])}
    </div>
  );
}
