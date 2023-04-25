import React from 'react'
import '../App.css'

function Table({arr}) {
    console.log(arr)
  return (
    <div>
      <div className="tableContainer">
      <table>
        <thead>
          <tr className="tableitems">
            { <th>ID</th>}
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>

        <tbody>
          {arr.map((item) => (
            <tr className="tableitems" key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.income}</td>
              <td>{item.city}</td>
              <td>{item.car}</td>
              <td>{item.quote}</td>
              <td>{item.phone_price}</td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Table
