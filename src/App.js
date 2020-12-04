import React, {useState} from 'react';
import Btn from './Btn';
import Display from './Display';
import Saver from './Saver';




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


 
 
 const save = () => {
   console.log(time);
   
 };
   
    
  
  const testi = ({time})=> <h1>{time}</h1>
  
  
  return (
    <div>
      <header>
        <h1>Stopwatch/Tommi Kalliomäki</h1>
      </header>             
          <div className="stopwatch">
              < Display time={time}/>
              <Btn status={status} resume= {resume} reset={reset} stop={stop} save={save} start={start}/>
            </div>

      <div className="saver">       
        < Saver />  
        <button onClick={testi}>testisave</button>
        
        
      </div>
        
  </div>    
  );
  
}

export default App;
