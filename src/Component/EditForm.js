import React, { useEffect, useState, useContext } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";

// const getdata = () => {
//   const data = localStorage.getItem("allData");
//   return data ? JSON.parse(data) : [];
// };


const EditForm = () => {
  const { id } = useParams();

  const {
    title,
    setTitle,
    summary,
    setSummary,
    description,
    setDescription,
    coverImg,
    setCoverImg,
    hackthonName,
    setHackthonName,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    github,
    setGithub,
    otherLink,
    setOtherLink,
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("allData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const matchedItem = data.find((item) => item.id === id);
    // setCurrentData(matchedItem);
    setTitle(matchedItem.title);
    setSummary(matchedItem.summary);
    setDescription(matchedItem.description);
    setCoverImg(matchedItem.coverImg);
    setHackthonName(matchedItem.hackthonName);
    setStartDate(matchedItem.startDate);
    setEndDate(matchedItem.endDate);
    setGithub(matchedItem.github);
    setOtherLink(matchedItem.otherLink);
  }, []);

  return (
    <Container style={{ paddingInline: "50px", paddingBlock: "20px" }}>
      <Form className="w-50 justify-content-start" onSubmit={handleSubmit}>
        <Form.Label
          style={{ fontSize: "1.6rem", fontWeight: "600" }}
          className="mb-4"
        >
          New Hackathon Submission
        </Form.Label>
        <Form.Group className="mb-4" controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title of your submission"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="text"
            placeholder="A short summary of your submission (this will be visible with your submission)"
            name="summary"
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            rows={8}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <small style={{ float: "right" }}>0/3000 Characters</small>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupCoverImage">
          <Form.Label>Cover Image</Form.Label>
          <p className="text-muted">Minimum resolution: 360px X 360px</p>
          <Form.Control
            type="text"
            placeholder="paste the link of image"
            name="coverImg"
            onChange={(e) => setCoverImg(e.target.value)}
            value={coverImg}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupName">
          <Form.Label>Hackathon Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            name="hackthonName"
            onChange={(e) => setHackthonName(e.target.value)}
            value={hackthonName}
          />
        </Form.Group>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Hackathon Start Date</Form.Label>
            <Form.Control
              type="date"
              name="startDate"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Hackathon End Date</Form.Label>
            <Form.Control
              type="date"
              name="endDate"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="formGroupGithub">
          <Form.Label>GitHub Repository</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            name="github"
            onChange={(e) => setGithub(e.target.value)}
            value={github}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupOtherLink">
          <Form.Label>Others Links</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            name="otherLink"
            onChange={(e) => setOtherLink(e.target.value)}
            value={otherLink}
          />
        </Form.Group>
        <Button variant="success" className="mt-5" type="submit">
          {id ? "Update" : "Uplode"} Submission
        </Button>
      </Form>
    </Container>
  );
};

export default EditForm;
