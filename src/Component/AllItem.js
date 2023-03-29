import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import moment from "moment";

const AllItem = () => {
  const { arrOfData, searchItem } = useContext(AppContext);

  return (
    <Container
      className="mt-4 d-flex flex-wrap gap-md-2 gap-0 justify-content-center justify-content-lg-start gap-lg-5"
    >
      {arrOfData.length <= 0 ? (
        <div className="mx-auto my-5">
          <h3 className="text-center">No Data Avilable! Please add the data by clicking on Upload Submission button</h3>
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
                <Card className="mb-4 item-Card shadow " >
                  <Container className="d-flex justify-content-start align-items-center gap-3">
                    <Card.Img src={item.coverImg} className=" item-Card-Img" />
                    <Card.Title className=" item-Card-Title" >{item.title}</Card.Title>
                  </Container>
                  <Card.Body>
                    <Card.Text className="item-card-summary">
                      {item.summary}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <p className="text-end">
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
