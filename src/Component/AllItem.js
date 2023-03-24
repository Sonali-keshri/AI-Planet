import React, { useState } from 'react'
import './style.css'
import { Container } from 'react-bootstrap'

import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link} from 'react-router-dom';
// import InterviewMe from "../assets/InterviewMe.png";


const AllItem = () => {



  const [data, setData] = useState([])

    useEffect(()=>{
      const data= localStorage.getItem("allData")
      setData(JSON.parse(data))
    },[])


 
  return (
    <Container className="mt-4 d-flex gap-5 flex-wrap " style={{height:"70vh"}}>
      {
        !data ? (
          <div>
            <h1>No data Found</h1>
          </div>
        ):(
          data.map(item =>{
            return(
              <Link to={`/DetailsPage/${item.id}`} key={item.id}>
                <Card style={{ width: "20rem", cursor:"pointer", color:"black"}} className="pt-2 mb-4"  >
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
                    <p style={{textAlign:"right", margin:'0'}}><em>updated 3 mins ago</em></p>
                  </Card.Body>
              </Card></Link>
            )
          })
        )
      }
    </Container>
  )
}

export default AllItem
