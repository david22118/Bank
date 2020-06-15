import React, { Component } from "react";
import "../style/Transcations.css";
import Transction from "./Transction";
class Transcations extends Component {
  state = {};
  render() {
    const transcations = this.props.transcations;
    return (
      <div className="Transcations2">
        <div className="tableDiv">
        <table className="Table">
          <tr>
            <th>Amount</th>
            <th>Vendor</th>
            <th>Category</th>
          </tr>
          {transcations.map((t, i) => (
            <Transction
              deleteTransaction={this.props.deleteTransaction}
              key={i}
              id={t._id}
              amount={t.amount}
              vendor={t.vendor}
              category={t.category}
            />
          ))}
          
        </table>
        </div>
      </div>
    );
  }
}

export default Transcations;
