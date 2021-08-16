import axios from "axios";
import './App.css';
import {useEffect,useState} from 'react';
function App() {

  const [meaning, setMeanings] = useState([]);

  const distApi = async() => {
    try{
      const data =await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/fill");
      
      setMeanings(data.data);
          }
          catch(error){
            console.log(error);
          }

  };
  console.log(meaning);
  useEffect(()=>{
    distApi();
  },[]);
  return (
    <div className="App">
      <h1>saibaba</h1>
    </div>
  );
}

export default App;
