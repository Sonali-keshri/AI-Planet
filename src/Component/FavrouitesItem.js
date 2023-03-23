import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import InterviewMe from "../assets/InterviewMe.png";

const FavrouitesItem = () => {
  return (
    <Container className="mt-4 d-flex gap-5 flex-wrap">
      <Card style={{ width: "20rem" }} className="pt-2 mb-3">
        <Container className="d-flex justify-content-start align-items-center gap-3">
          <Card.Img
            src={InterviewMe}
            style={{ width: "100px", height: "70px" }}
          />
          <Card.Title>InterviewMe</Card.Title>
        </Container>
        <Card.Body>
          <Card.Text>
            Built with GPT-3, React, and Flask. Practice interviews with AI and
            ace your next interview.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <p style={{ textAlign: "right", margin: "0" }}>
            <em>updated 3 mins ago</em>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FavrouitesItem;
