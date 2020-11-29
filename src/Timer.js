/*import React from 'react';


var Stopwatch = React.CreateClass ({

    getinitialState:function(){
        return {secondsElapsed: 0};
    },
    getSeconds: function() {
        
    
        return ('0' + this.state.secondsElapsed % 60).slice(-2);

    },
    getMinutes: function(){
        return Math.floor(this.state.secondsElapsed/60);

    },
    handleStartClick: function (){
        var _this=this;
        this.incrementer = setInterval(function(){
            _this.setState({
                secondsElapsed : (_this.state.secondsElapsed + 1)
            })
        }, 1000)
               
    },
    handleStopClick: function(){
        clearInterval(this.incrementer)
    }







      function () {
        return <div>
            <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
    
            
            
            <button type='button' onClick= {this.handleStartClick}>Start</button>


            <button type='button' onClick= {this.handleStopClick}>Stop</button>
            
        </div>;
    }
});





export default Timer*/