import React, { Component } from 'react';
import "../style/Operations.css"
import { ThemeProvider } from '@material-ui/core';

class Operations extends Component {
    constructor() {
        super();
        this.state={
            amount:"",
            vendor:"",
            category:"",
            
        }
    }
    resetState=()=>{
       
        this.setState({
            amount:"",
            vendor:"",
            category:"",
        })
      }
    handelInputs=(e)=>{
        let input = e.target.value
        let name = e.target.name
        this.setState({
            [name]:input,
        })
      }

    withDraw=()=>{
     if(this.state.amount==0||this.state.vendor.length==0||this.state.category.length==0){
         alert("Please fill in all fields")
     }else{
     this.props.withDraw(this.state)
     }
     this.resetState()
    }
  
    Deposit=()=>{
        if(this.state.amount==0||this.state.vendor.length==0||this.state.category.length==0){
            alert("Please fill in all fields")
        }else{
        this.props.Deposit(this.state)
        }
        this.resetState()
    }
    render() { 
        return ( <div className="Operations">
            <div className="oop">
            <input type="text" name="amount" onChange={this.handelInputs} value={this.state.amount} className="input-operations" placeholder="Amount"></input>
            <input type="text" name="vendor" onChange={this.handelInputs} value={this.state.vendor} className="input-operations" placeholder="Vendor"></input>
            <input type="text" name="category" onChange={this.handelInputs} value={this.state.category} className="input-operations" placeholder="Category"></input> 
            <div><button onClick={this.withDraw} className="Withdraw">Withdraw</button>
            <button onClick={this.Deposit} className="Deposit">Deposit</button></div>
            </div>
        </div> );
    }
}
 
export default Operations;