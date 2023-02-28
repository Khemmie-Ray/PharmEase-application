import { useState } from "react"
import { Table } from "react-bootstrap"

const ProductInfo = () => {
    const [emptyRow, setEmptyRow] = useState([])

    const handleSave = (event) => {
        event.preventDefault();
        const newProductData = {
          productInfo: event.target.productInfo.value,
          batch: event.target.batch.value,
          expiryDate: event.target.expiryDate.value,
          quantity: event.target.quantity.value,
          price: event.target.price.value,
          discount: event.target.discount.value,
          total: event.target.total.value,
        };
        setEmptyRow([...emptyRow, newProductData]);
        event.target.reset();
      };

  return (
    <div className="salesTab">
              <form onSubmit={handleSave}>
        <table bordered responsive="sm md lg xl" hover className="posTable">
            <thead>
                <tr>
                <th>Production Information</th>
                <th>Batch</th>
                <th>Expiry Date</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Discount %</th>
                <th>Total</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {emptyRow.map((item, index) => (
              <tr key={index}>
                    <td>{item.productInfo}</td>
                    <td>{item.batch}</td>
                    <td>{item.expiryDate}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{item.total}</td>
                    <td>Saved</td>
                </tr>
            ))}
                <tr>
                  <td>
                    <input
                      type="text"
                      name="productInfo"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="batch"
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="expiryDate"
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="quantity"
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="price"
                      required
                    />
                  </td>
                    <td>
                    <input
                      type="text"
                      name="discount"
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="total"
                      required
                    />
                  </td>
                  <td>
                    <button className="save-btn">Save</button>
                  </td>
                </tr>
            </tbody>
        </table>
        </form>
        <div className="mini-card">
            <label htmlFor="">Invoice Discount:
                <input type="text" placeholder="0.00"/>
            </label>
            <label htmlFor="">Total Discount:
                <input type="text" placeholder="0.00"/>
            </label>
            <label htmlFor="">Total VAT:
                <input type="text" placeholder="0.00"/>
            </label>
            <label htmlFor="">Grand Total:
                <input type="text" placeholder="0.00"/>
            </label>
            <label htmlFor="">Previous:
            <input type="text" placeholder="0.00"/>
            </label>
            <label htmlFor="">Change:
                <input type="text" placeholder="0.00"/>
            </label>
        </div>
    </div>
  )
}

export default ProductInfo