import React, {useState} from 'react';
import time from './App';
import Display from './Display';
import Savedtime from './App';



const Saver = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  

  const saveItem = () => {
    // lisää listaan
    if (value === "") {
      return;
    }
    setItems([...items, value]);
    setValue("");
    
    
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const removeItem = (e) => {
    let item = e.target.innerText;
    let filtered = items.filter((x) => {
      return x !== item;
    });
    setItems(filtered);
  };

  
  
  
    

  return (
    <div className="otsikko">
      <h3>Identifier for time</h3>

      <input className="input"
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="Text.."
      />

      <button className="buttonsaver" onClick={() => saveItem()}>Save</button>  
      

      <button className="buttonsaver" onClick={() => setItems([])}>Reset</button>

     
      
      {items.length > 0 && <p>Remove time with click!</p>}
      {items.length === 0 && <p>No times saved!</p>}

      <ul>
        {items.map((item, index) => {
          return (            
             <li onClick={(e) => removeItem(e)} key={index}>
               {item}            
            </li>           
          );
        })}        
      </ul>
      
    
    </div>
  );
};    





      

    




 




export default Saver;