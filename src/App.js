import { Container } from "react-bootstrap";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import SubmissionForm from "./Component/SubmissionForm";
import EditForm from "./Component/EditForm";
import DetailsPage from "./Component/DetailsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import AllItem from "./Component/AllItem";
import FavrouitesItem from "./Component/FavrouitesItem";
import './App.css'

export const AppContext = createContext();


function App() {
  // const [allData, setAlldata] = useState([]);
  // const [inpValues, setInpValues] = useState({
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
  

 
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [coverImg, setCoverImg] = useState('');
  const [hackthonName, setHackthonName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [github, setGithub] = useState("");
  const [otherLink, setOtherLink] = useState("");

  const [searchItem, setSearchItem] = useState("");
  return (
    <Container fluid>
      <Router>
        <AppContext.Provider
          value={{
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
            searchItem,
            setSearchItem,
        
          }}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<AllItem />} />
              <Route path="/favourite" element={<FavrouitesItem />} />
            </Route>
            <Route path="/SubmissionForm" element={<SubmissionForm />} />
            <Route path="/EditForm" element={<EditForm />} />
            <Route path="/DetailsPage/:id" element={<DetailsPage />} />
          </Routes>
        </AppContext.Provider>
      </Router>
    </Container>
  );
}

export default App;
