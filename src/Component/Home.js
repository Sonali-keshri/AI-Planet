import React,{ useContext } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Hand from "../assets/Hand holding bulb 3D.png";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../App";

const Home = () => {

  const {setSearchItem}= useContext(AppContext)

  return (
    <>
      {/* <Container fluid style={{ backgroundColor: "#003145", height: "45vh" }} > */}
      <Container fluid style={{ backgroundColor: "#003145"}} className="py-5" >
        <Container className="d-flex pt-4 gap-5 mt-5">
          <Card
            style={{
              width: "60%",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>
                Hackthon Submissions
              </Card.Title>
              <Card.Text className="mt-3 mb-3">
                Lorem ipsum dolor sit amet consectetur. Urna cursus amet
                pellentesque in parturient purus feugiat faucibus. Congue
                laoreet duis porta turpis eget suspendisse ac pharetra amet. Vel
                nisl tempus nec vitae.
              </Card.Text>
              <Link to="/SubmissionForm">
                <Button className="mt-2" variant="success">
                  Update Submissions
                </Button>
              </Link>
            </Card.Body>
          </Card>
          <Container className="w-25">
            <img
              src={Hand}
              //   width="80"
              height="200"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Container>
        </Container>
      </Container>
      <Container className="d-flex justify-content-between mt-3 ">
        <div className="d-flex gap-2">
          <Link  to="/">
            All Submissions
          </Link>
          <Link to="/favourite">Favourite Submissions</Link>
        </div>
        <div className="d-flex gap-3">
          <Container
            style={{ border: "2px solid grey", borderRadius: "2rem" }}
            className="d-flex align-items-center gap-2"
          >
            <AiOutlineSearch />
            <input
              placeholder="Search"
              style={{ border: "none", outline: "none" }}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </Container>
          <Form.Select
            aria-label="Default select example"
            style={{ borderRadius: "2rem" }}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </Form.Select>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

export default Home;
