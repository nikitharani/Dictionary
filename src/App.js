import axios from "axios";
import './App.css';
import {useEffect,useState} from 'react';
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
// import categories from "./data/Category";
function App() {

  const [word,setWord]=useState("");

  const [meanings, setMeanings] = useState([]);

  const [category, setCategory] = useState('en');

  const distApi = async() => {
    try{
      const data =await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      // console.log(data); 
      setMeanings(data.data);
          }
          catch(error){
            console.log(error);
          }

  };
  console.log(meanings);
  useEffect(()=>{
    distApi();
  },[word,category]);
  
  return (
    <div className="App" style={{height:'100vh', backgroundColor:'#282c34',color:'white'}}>
      {/* <h1>saibaba</h1> */}
      <Container maxWidth="md" style={{display:'flex',flexDirection:'column',height:'100vh'}}>
      <Header 
        category={category}
        setCategory={setCategory}
        word={word}
        setWord={setWord}
      />
      {meanings && (<Definitions word={word} meanings={meanings} category={category}/>)}
      </Container>      
    </div>
  );
}

export default App;
