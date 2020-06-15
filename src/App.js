import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import Transcations  from "./Components/Transcations";
import Transction  from "./Components/Transction"
import Operations from "./Components/Operations"
import axios  from 'axios'
import Balance from "./Components/Balance";
import Breakdown from "./Components/Breakdown"
import ReactTooltip from 'react-tooltip'
class App extends Component {
  constructor() {
    super();
    this.state = {transcations:[] };
  
  }
   
  
  newState=(response)=>{
    this.setState({ transcations: response.data },function(){
    })
  }
  async componentDidMount() {
    const response = await axios.get("http://localhost:8080/transactions")
    this.newState(response)
  }
  

  withDraw= async (withDraw)=>{
    withDraw.amount=withDraw.amount*(-1)
    const response = await axios.post("http://localhost:8080/transaction",withDraw)
    this.newState(response)
  }

  Deposit = async (Deposit)=>{
    Deposit.amount=Deposit.amount*(1)
    const response = await axios.post("http://localhost:8080/transaction",Deposit)
    this.newState(response)
  }
    deleteTransaction= async (TransctionId)=> {
    const response = await axios.delete(`http://localhost:8080/transaction/${TransctionId}`)
    this.newState(response)
  } 
  render() {
    return ( <Router><div className="App">
      <header className="header">
        <nav>
     <li data-tip="Home" data-background-color="white" data-text-color="black" data-place="bottom" ><Link className="Home" to="/"><FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon ></Link></li>
     <ReactTooltip />
     <li data-tip="Transcations" data-background-color="white" data-text-color="black" data-place="bottom"><Link className="Transcations" to="/Transcations"><FontAwesomeIcon className="icon"  icon={faWallet}></FontAwesomeIcon></Link></li>
     <li data-tip="Operations" data-background-color="white" data-text-color="black" data-place="bottom"><Link className="Operations" to="/Operations"><FontAwesomeIcon className="icon" icon={faHandHoldingUsd}></FontAwesomeIcon></Link></li>
     <li data-tip="Breakdown" data-background-color="white" data-text-color="black" data-place="bottom"><Link className="Breakdown" to="/Breakdown"><FontAwesomeIcon className="icon" icon={faReceipt}></FontAwesomeIcon></Link></li>
     <ReactTooltip />
      </nav>
      </header>
      <h1>Expense Tracker</h1>
      <Route path='/Breakdown'exact render={()=><Breakdown transcations={this.state.transcations} />} />
      <Route path='/' exact render={()=> <Balance  transcations={this.state.transcations} />} />
      <Route path='/Transcations' exact render={()=><Transcations deleteTransaction={this.deleteTransaction}   transcations={this.state.transcations} />}/>
      <Route path='/Operations' exact render={()=><Operations Deposit={this.Deposit} withDraw={this.withDraw} />} />
      </div></Router>)
  }
}

export default App;
