import React from 'react'
import './transaction.css'

function Addtransaction(){
  return (
    <div className="AddtransactionBar">
      <div className="inputs">
        <div className="datediv"> 
        <span>Date</span>
        <input type="Date" />
      </div>

      <div>         
        <input type="text" placeholder="Description" />
      </div>

       <div>         
        <input type="text" placeholder="Category" />
      </div>

       <div>         
        <input type="number" placeholder="Amount" />
      </div>
      

      </div>
      
      <div className="AddTransactionBtn">         
        <div>
          <button className="AddTransactionbtn">Add Transcation</button>
        </div>
      </div>
    </div>
  )
}

export default Addtransaction
