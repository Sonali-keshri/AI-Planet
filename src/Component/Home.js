import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Hand from "../assets/Hand holding bulb 3D.png";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../App";

const Home = () => {
  const { arrOfData, setArrOfData, setSearchItem } = useContext(AppContext);

  const [sortOrder, setSortOrder] = useState("newest");
  const [activeLink, setActiveLink] = useState(false);

  const handleSortOrderChange = (event) => {
    const newSortOrder = event.target.value;
    setSortOrder(newSortOrder);

    // Sort the data based on the new sort order
    if (newSortOrder === "newest") {
      const sortedDates = arrOfData
        .map((obj) => {
          return { ...obj, timestamp: new Date(obj.timestamp) };
        })
        .sort((a, b) => b.timestamp - a.timestamp);
      console.log("sorted Dates :  ", sortedDates);
      setArrOfData(sortedDates);
      console.log("sorted newest to oldest :  ", arrOfData);
    } else {
      const sortedDates = arrOfData
        .map((obj) => {
          return { ...obj, timestamp: new Date(obj.timestamp) };
        })
        .sort((a, b) => a.timestamp - b.timestamp);
      console.log("sorted Dates :  ", sortedDates);
      setArrOfData(sortedDates);
      console.log("sorted oldest to newest:  ", arrOfData);
    }
  };


  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "#003145" }}
        className="mt-5 py-5"
      >
        <Container>
          <div className="row">
            <div className="col-md-8 order-md-1 order-2">
              <Card
                className="cardBox py-5"
                style={{
                  // width: "60%",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
              >
                <Card.Body className="card-Body text-center text-md-start">
                  <Card.Title style={{ fontSize: "2rem" }} className="title">
                    Hackthon Submissions
                  </Card.Title>
                  <Card.Text className="mt-3 mb-3 ">
                    Lorem ipsum dolor sit amet consectetur. Urna cursus amet
                    pellentesque in parturient purus feugiat faucibus. Congue
                    laoreet duis porta turpis eget suspendisse ac pharetra amet.
                    Vel nisl tempus nec vitae.
                  </Card.Text>
                  <Link to="/SubmissionForm">
                    <Button className="mt-2" variant="success">
                      Update Submissions
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 d-flex justify-content-md-end justify-content-center order-md-2 order-1">
              <img
                style={{ maxWidth: "199px", maxHeight: "300px" }}
                src={Hand}
                // height="200"
                className="img-fluid"
                alt="React Bootstrap logo"
              />
            </div>
          </div>
        </Container>
      </Container>

      <Container>
        <div className="row mt-3">
          <div className="col-md-7 d-flex gap-4 mb-4 mb-md-0 sumbmission-Link ">
            <Link to="/" className={`text-decor ${activeLink ? "":"activeMenu"}`} onClick={()=>setActiveLink(!activeLink)} >All Submissions</Link>
            <Link to="/favourite" onClick={()=>setActiveLink(!activeLink)} className={`text-decor ${activeLink ? "activeMenu":""}`}>Favourite Submissions</Link>
          </div>

          <div className="col-md-5 row justify-content-between px-4 px-md-0 " >
            <div className="border border-dark col-8 col-md-7 d-flex align-items-center corner-radius gap-2  " >
              <AiOutlineSearch />
              <input
                placeholder="Search"
                onChange={(e) => setSearchItem(e.target.value)}
                className="search-inp"
              />
            </div>

            <div className="col-3 col-md-4 p-0 ">
              <Form.Select
                aria-label="Default select example"
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="border border-dark corner-radius"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </Container>
      <Outlet />
    </>
  );
};

export default Home;
