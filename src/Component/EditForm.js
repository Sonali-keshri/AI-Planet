import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const EditForm = () => {
  return (
    <Container style={{paddingInline:"50px", paddingBlock:"20px"}}>
      <Form className="w-50 justify-content-start">
        <Form.Label style={{fontSize:"1.6rem", fontWeight:"600"}} className="mb-4">New Hackathon Submission</Form.Label>
        <Form.Group className="mb-4" controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title of your submission" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="text"
            placeholder="A short summary of your submission (this will be visible with your submission)"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            rows={8}
          />
          <small style={{ float: "right" }}>0/3000 Characters</small>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>Cover Image</Form.Label>
          <p className="text-muted">Minimum resolution: 360px X 360px</p>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>Hackathon Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
          />
        </Form.Group>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Hackathon Start Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Hackathon End Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>GitHub Repository</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>Others Links</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
          />
        </Form.Group>
        <Button variant="success"  className="mt-5">Update Form</Button>
      </Form>
    </Container>
  );
};

export default EditForm;
