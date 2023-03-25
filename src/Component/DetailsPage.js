import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { AiOutlineStar, AiFillGithub, AiFillStar } from "react-icons/ai";
import { MdDateRange, MdDelete, MdModeEditOutline } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";



const DetailsPage = ({editdata,deleteNote}) => {
  
  const {arrOfData} = useContext(AppContext);
  const [currentData, setCurrentData] = useState(null);

  const { id } = useParams();
  const Navigate = useNavigate();


  useEffect(() => {
    const matchedItem = arrOfData.find((item) => item.id === id);
    setCurrentData(matchedItem);
  }, [arrOfData,id]);

  const OnEditClick = (id) => {
    editdata(id);
    Navigate("/SubmissionForm");
  };

  const OnDelete = (deleteItem) => {
  
      deleteNote(deleteItem);
      Navigate("/");
    
  };

  return (
    <Container fluid className="mt-5">
      {currentData && (
        <Container fluid  className="py-4">
          <Container className="d-flex pt-5 gap-5" style={{ backgroundColor: "#003145" }}>
            <Card
              style={{
                width: "50rem",
                backgroundColor: "transparent",
                color: "white",
                border: "none",
              }}
              className="pt-2 mb-3"
            >
              <Container className="d-flex justify-content-start align-items-center gap-3">
                <Card.Img
                  src={currentData.coverImg}
                  style={{ width: "80px", height: "70px" }}
                />
                <Card.Title>{currentData.title}</Card.Title>
              </Container>
              <Card.Body>
                <Card.Text>{currentData.summary}</Card.Text>
              </Card.Body>
              <Card.Body className="d-flex gap-3 ">
                <div>
                  <AiFillStar /> <AiOutlineStar />
                </div>
                |
                <div>
                  <MdDateRange />
                  <small className="px-3">
                    {currentData.startDate} {currentData.endDate}
                  </small>
                </div>
              </Card.Body>
            </Card>
            <div className="d-flex flex-column">
              <Button
                variant="outline-light"
                className="w-100"
                onClick={() => OnEditClick(currentData.id)}
              >
                <MdModeEditOutline /> Edit
              </Button>
              <br />
              <Button
                variant="outline-light"
                className="w-100"
                onClick={()=> OnDelete(currentData.id)}
              >
                <MdDelete /> Delete
              </Button>
            </div>
          </Container>

          <Container className="mt-5">
            <Row className=" gap-5">
              <Col xs={8}>
                <h2>Description</h2>
                <p className="text-justify">{currentData.description}</p>
              </Col>
              <Col>
                <p>Hackthon</p>
                <h4>{currentData.hackthonName}</h4>
                <p>
                  <MdDateRange /> {currentData.startDate} -{" "}
                  {currentData.endDate}
                </p>
                <div className="d-grid gap-3 mt-5">
                  <Link to={currentData.github}>
                    <Button variant="outline-dark" className="w-50">
                      <AiFillGithub /> GitHub Repo
                    </Button>
                  </Link>
                  <Link to={currentData.otherLink}>
                    <Button variant="outline-dark" className="w-50">
                      <GoLinkExternal /> Other Link
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      )}

    </Container>
  );
};

export default DetailsPage;
