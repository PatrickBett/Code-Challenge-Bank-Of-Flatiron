import React, { useEffect, useState} from 'react'
import './transactions.css'

function Transaction(){ 

  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      const response = await fetch('http://localhost:3000/transactions')
      const jsonData = await response.json()
      setData(jsonData);
      
    }
    fetchData()
  }
  )
 
  return (
    <div className="transactions"> 
    <ul>{data.map(item => (
          <li >{item.date}</li>
        ))}</ul>
<table>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
  </tr>

   <tr key="item.id">{data.map(item => (
          <td >{item.date}</td>  
                  
        ))}</tr>










  {/* <tr key={item.id}>{{data.map(item => (
    <td>{item.date}</td>
    <td>{item.description}</td>
    <td>{item.category}</td>
    <td>{item.amount}</td>
  ))}</tr> */}
  
</table>

    {/* <table >
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>category</th>        
        <th>Amount</th>
      </tr>

       
    </table> */}
          
    </div>
  )
}

export default Transaction









  
  
  // const [state, setState]=useState("") 

 
  // async function getData(){
  //    const url="http://localhost:3000/transactions"
  //    const response= await fetch(url)
  //    const data= await response.json()
     
  //    data.map((d)=>{
  //     setState(d)
  //    })

  // }
  // getData()