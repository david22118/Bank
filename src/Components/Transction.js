import React, { Component } from 'react';
import "../style/Transction.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
class Transction extends Component {
    state = {  }
    deleteTransaction=()=>{
        
        this.props.deleteTransaction(this.props.id)
    }

    render() { 
        const amount= this.props.amount
        const vendor= this.props.vendor   
        const category= this.props.category
        
        return ( <tr className="Transction">

            {amount<0?<td className="negetivAmount">{amount*(-1)}</td>:<td className="positiveAmount">{amount}</td>}  <td>{category}</td><td>{vendor}</td><FontAwesomeIcon className="FontAwesomeIcon"  onClick={this.deleteTransaction} icon={faTrash} ></FontAwesomeIcon>  
        </tr> );
    }
}
 
export default Transction;