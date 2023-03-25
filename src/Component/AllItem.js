import React from 'react'
import { Container } from 'react-bootstrap'
import {  useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link} from 'react-router-dom';
import { AppContext } from '../App';


const AllItem = () => {

    const {arrOfData} = useContext(AppContext)
  
    const getTimeDifference = (timestamp) => {
      const now = Date.now();
      const difference = now - timestamp;
      if (difference < 1000) {
        return 'just now';
      } else if (difference < 60 * 1000) {
        return `${Math.floor(difference / 1000)} sec ago`;
      } else if (difference < 60 * 60 * 1000) {
        return `${Math.floor(difference / 1000 / 60)} min ago`;
      } else {
        return `${Math.floor(difference / 1000 / 60 / 60)} hour ago`;
      }
    };
 
  return (
    <Container className="mt-4 d-flex gap-5 flex-wrap " style={{height:"70vh"}}>
      {
        //  arrOfData.filter((item) =>item.title.toLowerCase().includes(searchItem.toLowerCase())).
         arrOfData.map((item) =>{
            return(
              <Link to={`/DetailsPage/${item.id}`} key={item.id}>
                {console.log("item id: ", item.id)}
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
                    <p style={{textAlign:"right", margin:'0'}}><em> updated {getTimeDifference(item.timestamp)}</em></p>
                  </Card.Body>
              </Card></Link>
            )
          })
        }

    </Container>
  )
}

export default AllItem
