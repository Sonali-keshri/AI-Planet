import React from "react";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import moment from "moment";

const AllItem = () => {
  const { arrOfData, searchItem } = useContext(AppContext);

  return (
    <Container
      className="mt-4 d-flex flex-wrap gap-5  "
      style={{ height: "70vh" }}
    >
      {arrOfData.length <= 0 ? (
        <div>
          <h1>No Data Found</h1>
        </div>
      ) : (
        arrOfData
          .filter((item) =>
            item.title.toLowerCase().includes(searchItem.toLowerCase())
          )
          .map((item) => {
            return (
              <Link
                to={`/DetailsPage/${item.id}`}
                key={item.id}
                className="text-decor"
              >
                <Card className="pt-4 mb-4 item-Card shadow">
                  <Container className="d-flex justify-content-start align-items-center gap-3">
                    <Card.Img src={item.coverImg} className=" item-Card-Img" />
                    <Card.Title>{item.title}</Card.Title>
                  </Container>
                  <Card.Body>
                    <Card.Text style={{ height: "150px", overflow: "hidden" }}>
                      {item.summary}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <p style={{ textAlign: "right", margin: "0" }}>
                      <em> updated {moment(item.timestamp).fromNow()}</em>
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            );
          })
      )}
    </Container>
  );
};

export default AllItem;
