import React, { Component } from 'react';
import '../style/Breakdown.css'
import CanvasJSReact from '../canvasjs.react'
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Breakdown extends Component {
    constructor() {
        super();
    }
    breakdown=()=>{
        debugger
        const transcations = this.props.transcations
          /* console.log(transcations) */
          let b={}
     for (let t of transcations){
         if(b[t.category]){
             b[t.category]+=t.amount
         }
         else{
             b[t.category]=t.amount
         }
          
         
     }
     
     const categoryArr=Object.entries(b)
     return categoryArr
         
    }
    dataPoints=()=>{
       debugger
       const arry =this.breakdown()
       let data=[]
        for(let a of arry ){
            data.push({y:a[1],label:a[0]})
        }
        return data
    }
   
    render() {
        
        console.log( this.dataPoints())
        const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Income-Exspenses Pie"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label}  {y}",
				dataPoints: 
                    this.dataPoints()
				
			}]
		}
        
        return (<div className="Breakdown">
               <table className="breakdownTable">
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
    {this.breakdown().map((b,i)=><tr><td>{b[0]}</td>{b[1]>0?<td className="positiveAmount">{b[1]}</td>:<td className="negetivAmount" >{b[1]*(-1)}</td>} </tr>)}
            
              </table>

              <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>

        </div>  );
    }
}
 
export default Breakdown;