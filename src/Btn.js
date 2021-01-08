import React from 'react';




//nappulat
function Btn(props) {
  return (
    <div className="allbuttons">
        {(props.status===0)?
        <button className="button" onClick={props.start}>Start</button> : ""
        }   


        {(props.status===1)?
        <div>
            <button className="button" onClick={props.stop}>Pause</button>
            <button className="button" onClick={props.reset}>Reset</button>
        </div> : ""
        }
            
        {(props.status===2)?
        <div>
            <button className="button" onClick={props.resume}>Start</button>
            <button className="button" onClick={props.reset}>Reset</button>
            
            
        </div> : ""
        }



    </div> 
     
  );
}
//<button className="button" onClick={props.save}>Save</button>
export default Btn;
