import axios from "axios";
import './App.css';
import {useEffect,useState} from 'react';
import { Container, Switch, withStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";
// import categories from "./data/Category";
function App() {

  const [word,setWord]=useState("");

  const [meanings, setMeanings] = useState([]);

  const [category, setCategory] = useState('en');

  const [lightMode, setLightMode] = useState(false);


  //adding Switch-Theme button 
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  // get data from an API using aync await
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
    <div className="App" style={{height:'100vh', backgroundColor:lightMode?'#fff':'#282c34',color:lightMode?'black':'white',transition:"all 0.5s linear " }}>
      {/* <h1>saibaba</h1> */}
      <Container maxWidth="md" style={{display:'flex',flexDirection:'column',height:'100vh',justifyContent:"space-evenly"}}>

        <div style={{position:"absolute",top:0,right:15,paddingTop:10}}>
          <span>{lightMode ? "Dark": "Light"} Mode</span>
           <DarkMode checked={lightMode} onChange={()=>setLightMode(!lightMode)}/>
        </div>

      <Header 
        category={category}
        setCategory={setCategory}
        word={word}
        setWord={setWord}
        lightMode={lightMode}
      />
      {meanings && (<Definitions word={word} meanings={meanings} category={category} lightMode={lightMode}
/>)}
      </Container>      
    </div>
  );
}

export default App;
