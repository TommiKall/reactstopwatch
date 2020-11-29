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


  var updatedMs= time.ms, updatedS=time.s,updatedM=time.m, updatedH=time.h;
  //kellon toiminta
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
    
  


  return (
    <div style={{ textAlign: 'left'}}>
      <header>
        <h1>Stopwatch/Tommi Kalliomäki</h1>
      </header> 
      
      <div className="main-section">

        <div className="clock-holder"></div>

          <div className="stopwatch"></div>
              < Display time={time}/>
              <Btn status={status} resume= {resume} reset={reset} stop={stop} start={start}/>
      </div>


    <div className= "saved">
      <header> 
        <h2>Saved Times</h2>
      </header>
    </div>
      
    </div>  

   
  );
  
}

export default App;
