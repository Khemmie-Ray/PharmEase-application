import TitleBar from "../Global/TitleBar"
import SalesItem from "./SalesItem"
import ProductInfo from "./ProductInfo"
import FooterTab from "./FooterTab"

const Pos = () => {
  return (
    <>
        <TitleBar title="Point of Sales" icon="HiShoppingCart" />
        <div className="container" id="pos">
          <div className="topInput">
            <div className="inputOne">
              <input type="text" placeholder="🔍Search"/>
              <select name="" id="drugOpt">
                <option value="">-- Select medicine --</option>
                <option value="">Ampicillin</option>
                <option value="">Caffeine</option>
                <option value="">Coflin</option>
                <option value="">Cusson Baby oil</option>
              </select>
              <input type="text" placeholder="Barcode or QR-code scan"/>
              <input type="text" placeholder="Manual Input Barcode"/>
            </div>
            <div className="inputTwo">
              <input type="text" placeholder="Walk in Customer"/>
              <button className="addBtn">+</button>
            </div>

          </div>
            <div className="card-sales">
            <SalesItem />
            <ProductInfo />
            </div>
            <div>
              <FooterTab />
            </div>
        </div>
    </>
  )
}

export default Pos