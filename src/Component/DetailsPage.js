import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col,Modal } from "react-bootstrap";
import { AiOutlineStar, AiFillGithub, AiFillStar } from "react-icons/ai";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import {BsCalendar} from 'react-icons/bs'
import { GoLinkExternal } from "react-icons/go";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import moment from "moment";

const DetailsPage = ({ editdata, deleteNote }) => {

  const { arrOfData, setFavData, favData } = useContext(AppContext);
  const [currentData, setCurrentData] = useState(null);
  const [show, setShow] = useState(false);

  const { id } = useParams();
  const Navigate = useNavigate();

  useEffect(() => {
    const matchedItem = arrOfData.find((item) => item.id === id);
    setCurrentData(matchedItem);
  }, [arrOfData, id]);

  const OnEditClick = (id) => {
    editdata(id);
    Navigate("/SubmissionForm");
  };

  const handleClose =()=>{
    setShow(false)
  }
  const handleDelete = (deleteItemId) => {
    setShow(true)
  };

  const handleDeleteItem =(id)=>{
      deleteNote(id)
      setShow(false)
      Navigate("/")
  }

  
  const isFavourited = favData.includes(id);

  const handleFav = () => {
    if (!isFavourited) {
      const newFavItem = [...favData, id];
      setFavData(newFavItem);
      localStorage.setItem("Fav-data", JSON.stringify(newFavItem));
    } else {
      const newFavItem = favData.filter((savedId) => savedId !== id);
      setFavData(newFavItem);
      localStorage.setItem("Fav-data", JSON.stringify(newFavItem));
    }
  };

  return (
    <>
      {currentData && (
        <div>
          
          <Container
            fluid
            style={{ backgroundColor: "#003145" }}
            className="mt-5 py-5 p-0"
          >
            <Container>
              <div className="row">
                <div className="col-md-8 order-1">
                  <Card className="Card-box">
                    <Card.Body className="card-Body">
                      <div className="d-flex gap-4 align-items-center">
                        <Card.Img
                          src={currentData.coverImg}
                          className="item-detail-Card-Img"
                        />
                        <Card.Title className="title fontSize">
                          {currentData.title}
                        </Card.Title>
                      </div>
                      <Card.Text className="mt-3 mb-3">
                        {currentData.summary}
                      </Card.Text>
                      <Card.Body className="d-flex gap-3 align-items-center" >
                        <div onClick={handleFav} className="favIcon" style={{fontSize:"20px"}}>
                          {isFavourited ? <AiFillStar /> : <AiOutlineStar />}
                        </div>
                        <hr style={{width:"1px" ,height:"30px", backgroundColor:"white"}}></hr>
                        <div className="corner-radius d-flex align-items-center" style={{backgroundColor:"#255973",padding:"6px 12px"}}> 
                          <BsCalendar/>
                          <small className="px-2">
                            {moment(currentData.startDate).format("Do MMM  ")}
                          </small>
                        </div>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4 d-flex flex-md-column justify-content-center align-items-md-end order-2 gap-2 gap-md-0 ">
                  <Button
                    variant="outline-light"
                    className="top-page-btn"
                    onClick={() => OnEditClick(currentData.id)}
                  >
                    <MdModeEditOutline /> Edit
                  </Button>
                  <br />
                  <Button
                    variant="outline-light"
                    className="top-page-btn"
                    onClick={() => handleDelete(currentData.id)}
                  >
                    <MdDelete /> Delete
                  </Button>
                </div>
              </div>
            </Container>
          </Container>
          <Container>
            <Row className="mt-3 d-flex justify-content-between gap-5 mx-1 mx-md-0">
              <Col md={7} className=" py-3 ">
                <h3 className="mb-4">Description</h3>
                <p>{currentData.description}</p>
              </Col>
              <Col md={4} className="py-3">
                <p className="text-muted">Hackthon</p>
                <h4>{currentData.hackthonName}</h4>
                <div className="text-muted mt-3 d-flex align-items-center">
                  <BsCalendar/> 
                  <span className="px-2">
                  {moment(currentData.startDate).format("Do MMM YYYY")}
                  <span> - </span>
                  {moment(currentData.endDate).format("Do MMM YYYY")}
                  </span>
                </div>
                <div className="d-grid gap-3 mt-5">
                  <Link to={currentData.github} target="_blank">
                    <Button variant="outline-dark" className="links-Btn">
                      <AiFillGithub className="fontSize" /> GitHub Repository
                    </Button>
                  </Link>
                  <Link to={currentData.otherLink} target="_blank">
                    <Button variant="outline-dark" className="links-Btn">
                      <GoLinkExternal className="fontSize" /> Other Link
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <Modal show={show} onHide={handleClose} className="modelBox" >
            <Modal.Body>
              <h5>Delete model</h5>
            This action is irreversible. Are you sure you want to delete this model?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="dark-outline"  className="cancle-Btn" onClick={handleClose}>
                Cancle
              </Button>
              <Button variant="danger" className="delete-Btn" onClick={()=>handleDeleteItem(currentData.id)}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
