
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import "../style/Balance.css"
const color = red[500];
const color2= blue[500]
const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

class Balance  extends Component {
    constructor() {
        super();
        
    }
    balance=()=>{
        let balance= this.props.transcations 
        let sum =0
        for(let b of balance){
         sum+=b.amount
        }
        return sum
       }
       income=()=>{
        let balance= this.props.transcations 
        let sum=0
        for(let b of balance){
            if(b.amount>0){
                sum+=b.amount
            }
        }    
        return sum
       }
       expense=()=>{
        let balance= this.props.transcations 
        let sum=0
        for(let b of balance){
            if(b.amount<0){
                sum+=b.amount
            }
        }    
        return sum*(-1)
       }

    render() { 
        return (<div className="Balance">
            
            <h6>YOUR BALANCE</h6>
            
            <h3 className="sum">${this.balance()}</h3>
            <div className="status">
             <span className="income">INCOME</span>
             <span className="expense">EXPENSE</span>  
             </div> 
             <div className="details">
             <span className="details-income">{this.income()}</span>
             <span className="details-expense">{this.expense()}</span>
            </div>
            {/* <hr></hr> */}
            </div>  );
    }
}
 
export default Balance ;