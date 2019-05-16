import React, { Component } from 'react'
import Timer from './Timer'




export default class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timems: 0,
            isWorking:false
        }
            setInterval(() => {
        if (this.state.isWorking){
            
                this.setState({
                    timems:this.state.timems +1000
                     })
             } }, 1000);
        
       
    }
    
    start =() => {
    this.setState({
        isWorking: !this.state.isWorking
    });
};
    reset =() =>{
        this.setState({
            timems:0,
            isWorking:false
        })
    }   

    

    render() {
        return (
            <div className="container">

                <div className="hautp"></div>
                <div className='ecran'>
                    <Timer ms={this.state.timems} />
                    <button className="btn start" onClick={this.start}>{this.state.isWorking ? "Pause":"Start"} </button>
                    <button className="btn reset" onClick={this.reset}>Reset </button>
                    


                </div>
                <div className='footer'></div>


            </div>
        )
    }
}
