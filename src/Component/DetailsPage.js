import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import image from "../assets/Pirate ipsum.jpg";
import { AiOutlineStar, AiFillGithub } from "react-icons/ai";
import { MdDateRange, MdDelete, MdModeEditOutline } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { useParams,Link } from "react-router-dom";

const getdata =()=>{
  const data = localStorage.getItem("allData");
  return data ? JSON.parse(data): []

};

const DetailsPage = () => {

  const { id } = useParams();

  // const [data, setData] = useState(getdata);

  const data = getdata()
  // console.log("data: " , data)
  const [currentData, setCurrentData] = useState(null);
  // console.log("currentData: " , currentData)



  useEffect(() => {
      const matchedItem = data.find(item => item.id === id);
      setCurrentData(matchedItem);
  }, [data,id]);

  

  return (

   <Container fluid className="mt-5">
      {
        currentData && 
          <Container
          fluid
          style={{ backgroundColor: "#003145", height: "45vh" }}
        >
          <Container className="d-flex pt-5 gap-5">
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
                <Card.Text>
                 {currentData.summary}
                </Card.Text>
              </Card.Body>
              <Card.Body className="d-flex align-items-center gap-3 ">
                <AiOutlineStar /> |
                <div >
                  <MdDateRange />
                  <small className="px-3">{currentData.startDate}  {currentData.endDate}</small>
                </div>
              </Card.Body>
            </Card>
            <div className="d-flex flex-column rounded-pill">
              <Button variant="outline-light" className="w-100">
                <MdModeEditOutline /> Edit
              </Button>
              <br />
              <Button variant="outline-light" className="w-100">
                <MdDelete /> Delete
              </Button>
            </div>
          </Container>

          <Container className="mt-5" style={{height:"60vh"}} >
            <Row className=" gap-5">
              <Col xs={8}>
                <h2>Description</h2>
                <p className="text-justify">
                  {currentData.description}
                </p>
              </Col>
              <Col>
                <p>Hackthon</p>
                <h4>{currentData.hackthonName}</h4>
                <p >
                  <MdDateRange /> {currentData.startDate} - {currentData.endDate}
                </p>
                <div className="d-grid gap-3 mt-5">
                  <Link to={currentData.github}><Button variant="outline-dark" className="w-50">
                    <AiFillGithub /> GitHub Repo
                  </Button></Link>
                  <Link to={currentData.otherLink}><Button variant="outline-dark" className="w-50">
                    <GoLinkExternal /> Other Link
                  </Button></Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
       
         
}
    </Container>
  );
};

export default DetailsPage;
