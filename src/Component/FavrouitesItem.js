import React,{useContext} from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { AppContext } from '../App';
import {Link} from "react-router-dom"
import moment from "moment";

const FavrouitesItem = () => {

  const {favData, arrOfData} = useContext(AppContext)

  const result = arrOfData.filter(({id}) => favData.includes(id));

  return (
    <Container className="mt-4 d-flex gap-5 flex-wrap">
      { result.length <= 0 ? (
        <div>
          <h1>No Favourite Data Found</h1>
        </div>
      ) : (
       result.map((item) =>{
        return(
          <Link to={`/DetailsPage/${item.id}`} key={item.id}>
            
            <Card style={{ width: "20rem", cursor:"pointer", color:"black" }} className="pt-2 mb-4"  >
            <Container className="d-flex justify-content-start align-items-center gap-3">
              <Card.Img src={item.coverImg} style={{ width: "100px", height: "70px" }} />
              <Card.Title>{item.title}</Card.Title>
            </Container>
            <Card.Body>
              <Card.Text style={{height:"150px", overflow:"hidden"}}>
             {item.summary}
              </Card.Text>
            </Card.Body>
            <Card.Body>
                <p style={{textAlign:"right", margin:'0'}}><em> updated {moment((item.timestamp)).fromNow()}</em></p>
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
