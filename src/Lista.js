import React from 'react';
import time from './App';
import Display from './Display';


//kokeilu ajan tallentamiseen
class Lista extends React.Component{
    constructor(){
        super();
        this.state = {items : [JSON.stringify(time)]}
    }



    handleClick = (e) => {
        let newItems=this.state.items
        newItems.push(time)
        this.setState({items:newItems});
    };

    render(){
        return(
            <div>
                <button onClick={(e) => this.handleClick(e) }>lisää</button>
                <ul>
                    {this.state.items.map( (x,i) => {
                        return <li key={i}>{x}</li>;
                    })}
                </ul>
            </div>
        );       
    }

}



export default Lista;