import React, {useState} from 'react';
import Btn from './Btn';
import Display from './Display';
import Saver from './Saver';
import './App.css';
import Lista from './Lista';


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>




function App() {
  const [time, setTime]= useState({ms:0,s:0,m:0,h:0});
  const [interv,setInterv] = useState ();
  const [status,setStatus] = useState (0);



  const start= () => {
    run();
    setStatus(1);
    setInterv(setInterval(run,10));
  };

  //kellon toiminta
  var updatedMs= time.ms, updatedS=time.s,updatedM=time.m, updatedH=time.h;
  
  const run = () => {
    if( updatedS === 60){
      updatedM++;
      updatedS=0;
    }
    if (updatedM===60){
      updatedH++;
      updatedM=0;
    }
    if (updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH});

  };

  const stop= () => {
    clearInterval(interv);
    setStatus(2);
    
  };


  const reset= () => {
    clearInterval(interv);
    setStatus(0);
    return setTime({ms:0,s:0,m:0,h:0});
  };

  const resume = () => start();


 
 //erilaisia väsäyksiä saada aika tallentumaan, mutta ei onnistunut propsien tai eventien avulla itselläni
 // const save sai sen näkymään consolelogissa, funktiolla sain sen ruudulle päivittymään
 const save = () => {
   console.log(time);
   JSON.stringify(time)
   
  
 };

 const save2 = JSON.stringify(time);


   
  const save4 = ({time}) => {
    return(
      console.log(JSON.stringify(time))
    );
  }


  const sata = ({time}) => {
    return(
    
      JSON.stringify(time)
      
    );
  }

  function Savedtime() {
    return(
      <h3 className="time">{JSON.stringify(time.h)}:{JSON.stringify(time.m)}:{JSON.stringify(time.s)}:{JSON.stringify(time.ms)}</h3>
    );
  }

 //testei



//save={save} btn status

  return (
    <div>                 
          <div className="stopwatch">
             <h1 className="otsikko">Stopwatch/Tommi Kalliomäki</h1>
              < Display time={time}/>
              <Btn status={status} resume= {resume} reset={reset} stop={stop}  start={start}/>
            </div>

      <div className="saver">       
        < Saver />
       
        

        
        
      </div>
        
  </div>    
  );
  
}

export default App;
