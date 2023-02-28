import { useState, useRef } from "react";
import { FormControl, InputGroup, Table } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';

import TitleBar from "../Global/TitleBar";
import { productsData } from "../Product/data";

const Order = ({ data = productsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.quantity.toString().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm.toLowerCase())
    );
  });

 
  return (
    <div>
      <TitleBar title="Order" icon="BsStack"/>
      <div className="bg-white p-4" style={{width:"90%", margin:"auto"}}>
      <div className="d-flex justify-content-between align-items-center">
              
         <InputGroup className="mb-3 w-25">
          <InputGroup.Text>
            <BsSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>
        </div>
        
       
        <div >
          <Table hover bordered responsive="sm md lg xl" id="stock-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Order;
