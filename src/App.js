import React from 'react'
import './App.css';
import { Table } from 'react-bootstrap'
// import Demo from './Demo'


const App = () => {
  const array = [
    {
      name: "Kartik", email: "kartiksehgal232004@gmail.com", phone: 9996861194, address: [
        {Street: 10, City: "Noida", State: "UP", Country: "India"},
          {Street: 20, City: "Pune", State: "MH", Country: "India"},
          {Street: 30, City: "Mohali", State: "PB", Country: "India"},
          {Street: 40, City: "Ambala", State: "HR", Country: "India"},
      ]
    },
    {
      name: "Karan", email: "karan@gmail.com", phone: 9984781194, address: [
        {Street: 30, City: "Mohali", State: "PB", Country: "India"},
        {Street: 40, City: "Ambala", State: "HR", Country: "India"},
        
      ]
    },
    {
      name: "Sehgal", email: "sehgal@gmail.com", phone: 9913581194, address: [
        {Street: 10, City: "Noida", State: "UP", Country: "India"},
        {Street: 40, City: "Ambala", State: "HR", Country: "India"},
        
      ]
    },
  ]
  return (
    <div className='App'>
      <Table border={"1"} striped bordered  variant='dark'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>

          {
            array.map((item, i) => (
              // console.log(item, " ")
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

                <td>
                  <Table striped bordered variant='dark'>
                  <thead>
                    <tr>
                      <th>Street</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        item.address.map((data, index) => (
                          <tr key={index}>
                            <td>{data.Street}</td>
                            <td>{data.City}</td>
                            <td>{data.State}</td>
                            <td>{data.Country}</td>
                          </tr>
                        )
                        )
                      }
                    </tbody>
                  </Table>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default App;
