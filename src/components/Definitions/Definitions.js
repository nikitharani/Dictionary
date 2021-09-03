import React from 'react';
import "./Definitions.css";


const Definitions = ({word,category,meanings}) => {
    return (
        <div className="meanings">
            {
                meanings[0] && word && category ==="en" &&(
                    <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} style={{ backgroundColor:"white", borderRadius: 10}} controls>
                        Your Browser Doesnt support audio component
                    </audio>
                )
            }
          { word === ""  ? (<span className='subTitle' style={{fontSize:'70px'}}>Start by typying a word in Search</span>):
          (meanings.map((mean)=>
              mean.meanings.map((item) => 
              item.definitions.map((def)=>
              (<div className="singleMean" style={{ backgroundColor:"white", color:"black"}}>
                 <b> {def.definition}</b>
                 <hr style={{ backgroundColor:"black", width:"100%"}}/>
    {def.synonyms && (<span><b>synonyms:</b>{def.synonyms.map((syn)=> `${syn},`)}</span>)}
              </div>
              ))
              )
              )
          )}
        </div>
    );
}

export default Definitions



