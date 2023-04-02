import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { v4 } from "uuid";
import { MdCloudUpload } from "react-icons/md";
import UploadIcon from "../assets/upload-icon.png";

const SubmissionForm = () => {
  const {
    title,
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
    setOtherLink,
    active,
    setActive,
    edit,
    setEdit,
    arrOfData,
    setArrOfData,
    setSelectedFile,
    selectedFile,
  } = useContext(AppContext);

  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !title ||
      !summary ||
      !coverImg ||
      !description ||
      !hackthonName ||
      !startDate ||
      !endDate ||
      !github ||
      !otherLink
    ) {
      alert("Please fill the all field");
    } else if (edit) {
      const date = new Date();
      let text = date.toLocaleString();
      setArrOfData(
        arrOfData.map((item) => {
          if (item.id === active) {
            return {
              ...item,
              timestamp: text,
              title,
              summary,
              description,
              coverImg,
              hackthonName,
              startDate,
              endDate,
              github,
              otherLink,
              selectedFile,
            };
          }
          return item;
        })
      );
      setTitle("");
      setSummary("");
      setDescription("");
      setCoverImg("");
      setHackthonName("");
      setStartDate("");
      setEndDate("");
      setGithub("");
      setOtherLink("");
      setSelectedFile("");

      setActive(null);
      setEdit(false);
      Navigate("/");
    } else {
      const date = new Date();
      let text = date.toLocaleString();
      let data = {
        id: v4(),
        timestamp: text,
        title,
        summary,
        description,
        coverImg,
        hackthonName,
        startDate,
        endDate,
        github,
        otherLink,
        selectedFile,
      };
      setArrOfData([...arrOfData, data]);
      setTitle("");
      setSummary("");
      setDescription("");
      setCoverImg("");
      setHackthonName("");
      setStartDate("");
      setEndDate("");
      setGithub("");
      setOtherLink("");
      setSelectedFile("");
      Navigate("/");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

      previewFile(file);
      setSelectedFile(file.name);
   
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCoverImg(reader.result);
    };
  };

  console.log("seleted File: " ,selectedFile)

  return (
    <Container fluid style={{ backgroundColor: "#F5F5F5" }} className="m-0">
      <Container
        style={{ fontSize: "1.6rem", fontWeight: "600", marginTop: "70px" }}
        className="p-5"
      >
        <div className="row w-75 p-4 rounded-4" style={{backgroundColor:"white"}}>
          <Form className="col-12 col-md-10 formBox" onSubmit={handleSubmit}>
            <p>{edit ? "Edit " : "New "} Hackathon Submission</p>
            <Form.Group className="mb-4 " controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title of your submission"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupSummary">
              <Form.Label>Summary</Form.Label>
              <Form.Control
                type="text"
                placeholder="A short summary of your submission (this will be visible with your submission)"
                name="summary"
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Write a long description of your project. You can describe your idea and approach here."
                rows={8}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <small style={{ float: "right" }}>0/3000 Characters</small>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupCoverImage">
              <Form.Label>Cover Image</Form.Label><br/>
              <Form.Label className="text-muted fontSize ">Minimum resolution: 360px X 360px</Form.Label>
              <div
                className="img-upload-div"
                onClick={() =>
                  document.querySelector(".img-upload-control").click()
                }
              >
                <Form.Control
                  type="file"
                  name="coverImg"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="img-upload-control"
                  hidden
                />
                {coverImg ? (
                  <div className="d-flex align-items-center justify-content-between gap-2 upload-control-img ">
                    <img src={coverImg} alt="Preview" />
                    <p className="img-name m-0">
                      {selectedFile}
                    </p>
                    <p className="img-reupload-icon m-0">
                      Reupload <MdCloudUpload className="fontSize" />
                    </p>
                  </div>
                ) : (
                  <img
                    src={UploadIcon}
                    width="40px"
                    className="m-auto"
                    alt="upload-icon"
                  />
                )}
              </div>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupName">
              <Form.Label>Hackathon Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of the hackathon"
                name="hackthonName"
                onChange={(e) => setHackthonName(e.target.value)}
                value={hackthonName}
              />
            </Form.Group>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Hackathon Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  className="text-muted"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEndDate">
                <Form.Label>Hackathon End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  className="text-muted"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-4" controlId="formGroupGithub">
              <Form.Label>GitHub Repository</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of the hackathon"
                name="github"
                onChange={(e) => setGithub(e.target.value)}
                value={github}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupOtherLink">
              <Form.Label>Others Links</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name of the hackathon"
                name="otherLink"
                onChange={(e) => setOtherLink(e.target.value)}
                value={otherLink}
              />
            </Form.Group>
            <hr className="my-5" style={{width:"700px"}}/>
            <Button variant="success" className="" type="submit">
              {edit ? "Save" : "Upload"} Submission
            </Button>
          </Form>
        </div>
      </Container>
    </Container>
  );
};

export default SubmissionForm;
