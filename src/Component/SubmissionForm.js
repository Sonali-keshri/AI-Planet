import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AppContext } from "../App";
import {v4} from 'uuid'

const SubmissionForm = () => {

  const {title,
    setTitle,
    summary,
    setSummary,
    description,
    setDescription,
    coverImg,
    setCoverImg,
    hackthonName,
    setHackthonName,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    github,
    setGithub,
    otherLink,
    setOtherLink} = useContext(AppContext)

    const Navigate = useNavigate();
 
  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   const newId = Date.now();
    // allData.push(inpValues)
    // setAlldata((...prevData)=>[...prevData,{}])
    // console.log(allData)
    // setInpValues({
    //   title:"",
    //   summary:"",
    //   description:"",
    //   coverImg:"",
    //   hackthonName:"",
    //   startDate:"",
    //   endDate:"",
    //   github:"",
    //   otherLink:""
    // })
  // }
  
  const handleSubmit = () => {
    
    let allData = JSON.parse(localStorage.getItem('allData') || '[]')
    let data = {
      id:v4(),title,summary,description,coverImg,hackthonName,startDate,endDate,github,otherLink
    }
    
    allData.push(data)
    
    localStorage.setItem('allData', JSON.stringify(allData))
    Navigate('/')
  }

  // function handleImageChange(event) {
  //   const file = event.target.files[0];
  //   console.log(file)
  //   // const reader = new FileReader();

  //   // reader.onload = () => {
  //   //   setCoverImg(reader.result);
  //   // };

  //   // reader.readAsDataURL(file);
  // }

  return (
    <Container style={{paddingInline:"50px", paddingBlock:"20px"}}>
      <Form className="w-50 justify-content-start" onSubmit={handleSubmit} >
        <Form.Label style={{fontSize:"1.6rem", fontWeight:"600"}} className="mb-4">New Hackathon Submission</Form.Label>
        <Form.Group className="mb-4" controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Title of your submission" name="title" onChange={(e)=>setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupSummary">
          <Form.Label>Summary</Form.Label>
          <Form.Control
            type="text"
            placeholder="A short summary of your submission (this will be visible with your submission)"
           name="summary" onChange={(e)=>setSummary(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Write a long description of your project. You can describe your idea and approach here."
            rows={8}
            name="description" onChange={(e)=>setDescription(e.target.value)}
          />
          <small style={{ float: "right" }}>0/3000 Characters</small>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupCoverImage">
          <Form.Label>Cover Image</Form.Label>
          <p className="text-muted">Minimum resolution: 360px X 360px</p>
          <Form.Control type="file" name="coverImg" onChange={(e)=>setCoverImg(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupName">
          <Form.Label>Hackathon Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            name="hackthonName" onChange={(e)=>setHackthonName(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-4">
          <Form.Group as={Col} controlId="formGridStartDate">
            <Form.Label>Hackathon Start Date</Form.Label>
            <Form.Control type="date" name="startDate" onChange={(e)=>setStartDate(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEndDate">
            <Form.Label>Hackathon End Date</Form.Label>
            <Form.Control type="date" name="endDate" onChange={(e)=>setEndDate(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-4" controlId="formGroupGithub">
          <Form.Label>GitHub Repository</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            name="github" onChange={(e)=>setGithub(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupOtherLink">
          <Form.Label>Others Links</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the name of the hackathon"
            name="otherLink" onChange={(e)=>setOtherLink(e.target.value)}
          />
        </Form.Group>
        <Button variant="success"  className="mt-5" type="submit">Upload Submission</Button>
      </Form>
    </Container>
  );
};

export default SubmissionForm;