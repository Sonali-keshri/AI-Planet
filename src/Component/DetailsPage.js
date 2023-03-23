import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import image from "../assets/Pirate ipsum.jpg";
import { AiOutlineStar, AiFillGithub } from "react-icons/ai";
import { MdDateRange, MdDelete, MdModeEditOutline } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);


  useEffect(() => {
    const data = localStorage.getItem("allData");
    setData(JSON.parse(data));
    getcurrent();
  }, []);

  // console.log("data:", data)

  const getcurrent = async () => {
    const result = await data.find((item) => item.id === id);
    // console.log(result.id)
    setCurrentData(result);
    console.log(result);
  };
  

  return (
    <Container fluid>
      {currentData.map((singleData) => {
        return (
          <Container
            fluid
            style={{ backgroundColor: "#003145", height: "45vh" }}
          >
            <Container className="d-flex pt-5 gap-5">
              <Card
                style={{
                  width: "50rem",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                }}
                className="pt-2 mb-3"
              >
                <Container className="d-flex justify-content-start align-items-center gap-3">
                  <Card.Img
                    src={image}
                    style={{ width: "80px", height: "70px" }}
                  />
                  <Card.Title>InterviewMe</Card.Title>
                </Container>
                <Card.Body>
                  <Card.Text>
                    Built with GPT-3, React, and Flask. Practice interviews with
                    AI and ace your next interview.
                  </Card.Text>
                </Card.Body>
                <Card.Body className="d-flex align-items-center gap-5">
                  <AiOutlineStar />
                  <div className="border border-left-10">
                    <MdDateRange />
                    <small>giuk</small>
                  </div>
                </Card.Body>
              </Card>
              <div className="d-flex flex-column rounded-pill">
                <Button variant="outline-light" className="w-100">
                  <MdModeEditOutline /> Edit
                </Button>
                <br />
                <Button variant="outline-light" className="w-100">
                  <MdDelete /> Delete
                </Button>
              </div>
            </Container>

            <Container className="mt-5 ">
              <Row className=" gap-5">
                <Col xs={8}>
                  <h2>Description</h2>
                  <p className="text-justify">
                    Pirate ipsum arrgh bounty warp jack. Locker rig hail-shot
                    log jack parrel. Keelhaul swab lugsail me cat blow ensign.
                    Spot dock pinnace quarterdeck yawl ketch cup mizzen
                    coxswain. Tell halter chase locker boatswain pink guns
                    piracy gaff grog. On chain fluke measured arr execution
                    spanker driver. Keelhaul crow's weigh reef nipperkin lanyard
                    timbers spirits keelhaul. Sloop sink dock yard pillage
                    jennys lubber jennys salmagundi bounty. Arr cog log sails
                    to. Log cutlass killick yawl crack coast driver. Blossom
                    spanker round boatswain pillage cutlass log or grog grog.
                    Shot lass chantey nest hail-shot topgallant. Corsair fathom
                    landlubber across hempen. Seas fer schooner ipsum me prey
                    cup. Furl chantey six gabion spirits boom sloop shiver brace
                    locker. Arr brethren hearties jolly guns jolly prey blossom
                    anchor. Gun bow arr pillage gunwalls. Me furl log ipsum
                    blimey. Tea piracy rum o'nine cup ahoy pirate spirits.
                    Bounty spanker guns deck cat. Nest or topsail scurvy ballast
                    men splice spyglass topgallant coxswain. Cat belay chains
                    spanish guns lanyard. Grog arrgh corsair pay no lateen aft
                    chain bow. Spanish of heave topsail driver. Round nest tails
                    tell warp aye. Gaff ahoy the shrouds anchor pirate bow cat
                    aft. Black nest pounders hearties or tales guns hail-shot
                    pinnace brethren. Nipper crack fathom schooner fleet blimey.
                    Quarterdeck pink gaff spanker of. Fer pirate crow's scourge
                    boatswain the jib chain pounders blow. Spanker clipper
                    jones' jib guns shot jib. Aye pounders sheet gabion parrel
                    fer sails weigh. Gold ahoy shrouds scurvy clipper crack spot
                    locker.
                  </p>
                </Col>
                <Col>
                  <p>Hackthon</p>
                  <h4>Oceanic Treasure Hunt</h4>
                  <p>
                    <MdDateRange /> 24 Feb 2023 - 24 March 2023
                  </p>
                  <div className="d-grid gap-3 mt-5">
                    <Button variant="success">
                      <AiFillGithub /> GitHub Repo
                    </Button>
                    <Button>
                      <GoLinkExternal /> Other Link
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        );
      })}
    </Container>
  );
};

export default DetailsPage;
