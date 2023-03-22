import { useState} from 'react';
import { Table, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { productsData } from './data';
import Pagination from '../Global/Pagination';
// import Badge from 'react-bootstrap/Badge';
import {productsData} from "../Product/data";
import TitleBar from '../Global/TitleBar';


const Order = ({ products = productsData }) => {  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const searchResults = products.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredProducts(searchResults);
      };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   Logic to display current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
        <TitleBar title="Order" icon="BsFillCartCheckFill"/>
        <div className="bg-white p-4" style={{width:"90%", margin:"auto"}}>
      <div className="d-flex justify-content-between align-items-center mb-4">

        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table bordered hover responsive="sm md lg xl">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Customer's Name</th>
            <th>Batch No</th>
            <th>Quantity</th>
            <th>Price Per Unit</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1 + (currentPage - 1) * productsPerPage}</td>
              <td>{product.customer}</td>
              <td>{product.batch}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.expiry}</td>
              <td>{product.order === "Delivered" && (<Button style={{padding:"1px", fontSize:"12px"}} variant ="success">{product.order}</Button>)}
              {product.order === "Pending" && (<Button style={{padding:"1px", fontSize:"12px"}}variant = "warning">{product.order}</Button>)}
              {product.order === "Cancelled" && (<Button style={{padding:"1px", fontSize:"12px"}} variant ="danger">{product.order}</Button>)}
              {product.order === "Shipped" && (<Button style={{padding:"1px", fontSize:"12px"}} variant ="warning">{product.order}</Button>)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      /></div>
    </div>
  );
};

export default Order;;
