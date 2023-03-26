
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import SubmissionForm from "./Component/SubmissionForm";
import DetailsPage from "./Component/DetailsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useState,useEffect } from "react";
import AllItem from "./Component/AllItem";
import FavrouitesItem from "./Component/FavrouitesItem";
import './App.css'

export const AppContext = createContext();

const getLocalStorage = () => {
  let savedArrOfData = JSON.parse(localStorage.getItem("Complete-data"));
  if (savedArrOfData) {
    return savedArrOfData;
  }else {
    return [];
  }
};

const getFavStorage = () => {
  let savedFavData = JSON.parse(localStorage.getItem("Fav-data"));
  if (savedFavData) {
    return savedFavData;
  } else {
    return [];
  }
};

function App() {
  
  const [arrOfData, setArrOfData] = useState(getLocalStorage());
  const [favData, setFavData] = useState(getFavStorage());

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [coverImg, setCoverImg] = useState('');
  const [hackthonName, setHackthonName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [github, setGithub] = useState("");
  const [otherLink, setOtherLink] = useState("");

  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    localStorage.setItem("Complete-data", JSON.stringify(arrOfData));
  }, [arrOfData]);


  const deleteNote = (id) => {
   setArrOfData(arrOfData.filter((item) => item.id !== id));
  }

  
  const editdata = (id) => {
    const matchedItem = arrOfData.find((item) => item.id === id);
    setEdit(true);
    setActive(id);
 
    setTitle(matchedItem.title);
    setSummary(matchedItem.summary);
    setDescription(matchedItem.description);
    setCoverImg(matchedItem.coverImg);
    setHackthonName(matchedItem.hackthonName);
    setStartDate(matchedItem.startDate);
    setEndDate(matchedItem.endDate);
    setGithub(matchedItem.github);
    setOtherLink(matchedItem.otherLink);
    
  };

  
  return (
   
      <Router>
        <AppContext.Provider
          value={{ title, setTitle, summary, setSummary, description, setDescription, coverImg, setCoverImg, hackthonName, setHackthonName, startDate, setStartDate, endDate,
             setEndDate,github,setGithub,otherLink,setOtherLink,arrOfData, setArrOfData,edit, setEdit,active, setActive,favData, setFavData,searchItem,setSearchItem
            }}
            >
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={< AllItem   />}/> 
              <Route path="/favourite" element={<FavrouitesItem />} />
            </Route>
            <Route path="/SubmissionForm" element={<SubmissionForm />} />
            <Route path="/DetailsPage/:id" element={<DetailsPage editdata={editdata} deleteNote={deleteNote}/>} />
          </Routes>
        </AppContext.Provider>
      </Router>
  
  );
}


export default App;
