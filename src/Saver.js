import React, {useState} from 'react';



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
    <div>
      <h3>Identifier for time</h3>

      <input
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder="Text.."
      />

      <button onClick={() => saveItem()}>Save</button>

      <button onClick={() => setItems([])}>Reset</button>
      
      {items.length > 0 && <p>Remove time with click!</p>}
      {items.length === 0 && <p>No times saved!</p>}

      <ul>
        {items.map((item, index) => {
          return (
            //<ListanJasen key={index} item={item} clickCallback={removeItem} />
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