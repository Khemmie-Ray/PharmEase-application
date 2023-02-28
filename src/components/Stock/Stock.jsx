import { useState, useRef } from "react";
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import { BsDownload, BsFileExcel, BsFilePdf, BsSearch } from 'react-icons/bs';
import {AiFillCopy} from 'react-icons/ai';
import {saveAs} from 'filesaver';
import html2pdf from 'html2pdf.js';
import * as XLSX from "xlsx";
// import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useReactToPrint } from "react-to-print";
import TitleBar from "../Global/TitleBar";
import { productsData } from "../Product/data";

const Stock = ({ data = productsData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.quantity.toString().includes(searchTerm.toLowerCase()) ||
      item.price.toString().includes(searchTerm.toLowerCase())
    );
  });

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleDownloadPdf = () => {
    const input = componentRef.current;
    const pdf = html2pdf(input, {
      filename: 'stock-table.pdf',
      margin: [0, 0, 0, 0],
      enableLinks: true,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
    pdf.toBlob((blob) => {
      saveAs(blob, 'stock-table.pdf');
    });
  };


  const handleDownloadExcel = () => {
    const filename = "stock-table.xlsx";
    const sheetName = "Stock";
    const sheetData = filteredData.map((item) => [
      item.name,
      item.category,
      item.quantity,
      item.price,
    ]);
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([["Name", "Category", "Quantity", "Price"], ...sheetData]);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, filename);
  };

  const handleCopy = () => {
    const table = document.getElementById("stock-table");
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
  };

  return (
    <div>
      <TitleBar title="Stock" icon="BsStack"/>
      <div className="bg-white p-4" style={{width:"90%", margin:"auto"}}>
      <div className="d-flex justify-content-between align-items-center">
        <div> <Button variant="primary" className="me-2" onClick={handleCopy}>
          <AiFillCopy /> Copy
        </Button>
         <Button
          variant="success"
          className="me-2"
          onClick={handleDownloadExcel}
        >
          <BsFileExcel /> Excel
        </Button>
        <Button
          variant="danger"
          className="me-2"
          onClick={handleDownloadPdf}
        >
          <BsFilePdf /> PDF
        </Button>
        <Button variant="secondary"  onClick={handlePrint}>
          <BsDownload /> Print
        </Button>
        
       
        
        </div>
       
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
        
       
        <div ref={componentRef}>
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
export default Stock;
