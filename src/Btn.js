import React from 'react';
import Saver from './Saver';



//nappulat
function Btn(props) {
  return (
    <div>
        {(props.status===0)?
        <button className="stopwatch" onClick={props.start}>Start</button> : ""
        }   


        {(props.status===1)?
        <div>
            <button className="stopwatch" onClick={props.stop}>Pause</button>
            <button className="stopwatch" onClick={props.reset}>Reset</button>
        </div> : ""
        }
            
        {(props.status===2)?
        <div>
            <button className="stopwatch" onClick={props.resume}>Start</button>
            <button className="stopwatch" onClick={props.reset}>Reset</button>
            <button className="stopwatch" onClick={props.save}>Save</button>
            
        </div> : ""
        }



    </div> 
     
  );
}

export default Btn;
