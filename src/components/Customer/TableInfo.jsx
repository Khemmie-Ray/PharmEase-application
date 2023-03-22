import React, { useState, useRef } from 'react';
import customerdata from './customerdata';
import './tableInfo.css'
import { Dropdown } from "react-bootstrap";
import { BiAddToQueue } from "react-icons/bi"

const TableInfo = () => {
  const [dataInfo, setDataInfo] = useState(customerdata);
  const [showModal, setShowModal] = useState(false)
  const [editIndex, setEditIndex] = useState(null);
  const [newData, setNewData] = useState({ id: '', name: '', email: '', phone: '', address: '', city: '', state: '' });
  const [searchItem, setSearchItem] = useState("")

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function openModal() {
    setShowModal(!showModal)
  }

  const handleAdd = () => {
    setDataInfo((prevData) => [
      ...prevData,
      { id: prevData.length + 1, ...newData },
    ]);
    setNewData({ id: '', name: '', email: '', phone: '', address: '', city: '', state: '' });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewData(data[index]);
  };

  const handleSave = () => {
    setDataInfo((prevData) => [
      ...prevData.slice(0, editIndex),
      newData,
      ...prevData.slice(editIndex + 1),
    ]);
    setEditIndex(null);
    setNewData({ id: '', name: '', email: '', phone: '', address: '', city: '', state: '' });
  };

  const handleDelete = (index) => {
    setDataInfo((prevData) => [
      ...prevData.slice(0, index),
      ...prevData.slice(index + 1),
    ]);
  };

   const handleSearchQuery = (evt) => {
    setSearchItem(evt.target.value);
   }

  return (
    <div>
         <div className='newData'>
            <button onClick={openModal} className="addNew">Add new <BiAddToQueue /></button>
            <input type="text" placeholder="Search" onChange={handleSearchQuery} value={searchItem} />
        </div>
      <table className='clients'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataInfo.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()))
          .map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={newData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={newData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="number"
                      name="phone"
                      value={newData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="address"
                      value={newData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="city"
                      value={newData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="state"
                      value={newData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </td>
                  <td>
                    <button onClick={handleSave} className="save">Save</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                      <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="toggle-btn"
                    variant="secondary"
                    id="dropdown-basic"
                  >
                    Action
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleEdit(index)}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleViewClick(product)}>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item
                     onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
     {showModal && (<div className="newClients">
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={newData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder='Email'
          value={newData.email}
          onChange={handleInputChange}
          required
        />
         <input
          type="text"
          name="phone"
          placeholder='Phone'
          value={newData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder='Address'
          value={newData.address}
          onChange={handleInputChange}
          required
        />
         <input
          type="text"
          name="city"
          placeholder='City'
          value={newData.city}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder='State'
          value={newData.state}
          onChange={handleInputChange}
          required
        />
        <button onClick={handleAdd} className="addNew">Add</button>
      </div>)}
    </div>    
  );
};

export default TableInfo;
