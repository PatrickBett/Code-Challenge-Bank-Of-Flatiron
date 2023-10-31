import React from 'react'
import './transaction.css'

function Addtransaction(){

  const handleAddTransaction =()=>{
    alert('Add')
  }


  return (
    <div className="AddtransactionBar">
      <form onSubmit={handleAddTransaction}>
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
          <button className="AddTransactionbtn" >Add Transcation</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Addtransaction
