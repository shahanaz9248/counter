import React from 'react';
import './counter.css'
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment(){
       if(this.state.count<100){
        this.setState({
            count:this.state.count+1
           })
       }else{
        alert('value cannot be increased to greater than 100') ;
    }
    }

    decrement(){
       if(this.state.count>=1){
        this.setState({
            count:this.state.count-1
        })
       }else{
           alert("value cannot be decreased to less than 0") ;
       }
    }

    render(){
        return(
          <> 
          <h1 align='center'>Interactive Counter</h1>
          <div className='container'>
            <div>
            <h4>count: {this.state.count}</h4>
            <div className='btns'>          
            <button onClick={()=>this.decrement()}>-</button>
            <button onClick={()=>this.increment()}>+</button>
            </div>
            </div>
          </div>
          
          </>
        );
    }
}

export default Counter;