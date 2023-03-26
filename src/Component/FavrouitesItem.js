import React,{useContext} from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AppContext } from '../App';
import {Link} from "react-router-dom"
import moment from "moment";

const FavrouitesItem = () => {

  const {favData, arrOfData,searchItem} = useContext(AppContext)

  const result = arrOfData.filter(({id}) => favData.includes(id));

  return (
    <Container className="mt-4 d-flex flex-wrap gap-md-5 gap-0 justify-content-center justify-content-md-start " style={{ height: "70vh" }}>
      { result.length <= 0 ? (
        <div className="mx-auto my-5">
           <h3 className="text-center">No Data Avilable! Please add the data by clicking on Upload Submission button</h3>
        </div>
      ) : (
       result
       .filter((item) =>
         item.title.toLowerCase().includes(searchItem.toLowerCase())
       ).map((item) =>{
        return(
          <Link to={`/DetailsPage/${item.id}`} key={item.id} className="text-decor">
            
            <Card className="pt-4 mb-4 item-Card shadow"  >
            <Container className="d-flex justify-content-start align-items-center gap-3">
              <Card.Img src={item.coverImg} className="item-Card-Img" />
              <Card.Title>{item.title}</Card.Title>
            </Container>
            <Card.Body>
              <Card.Text className="item-card-summary">
             {item.summary}
              </Card.Text>
            </Card.Body>
            <Card.Body>
                <p className="text-end"><em> updated {moment((item.timestamp)).fromNow()}</em></p>
              </Card.Body>
          </Card></Link>
        )
      })
      )

      }
    </Container>
    
  );
};

export default FavrouitesItem;
