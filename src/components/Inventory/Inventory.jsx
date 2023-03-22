import { Tabs, Tab} from 'react-bootstrap';
import ExpiredProducts from '../Inventory/ExpiredProducts';
import OutOfStock from '../Inventory/OutOfStock';
import TitleBar from '../Global/TitleBar';
import "../Product/ProductList.css";


function Inventory() {
  return (
    <div className='product-wrapper'>
    <TitleBar title="Inventory" icon="MdOutlineInventory" />
    <div className="container mt-5 product-container">
      <Tabs defaultActiveKey="out of stock" id="uncontrolled-tab-example">
        <Tab eventKey="out of stock" title="Out of Stock">
          <OutOfStock />
        </Tab>
        <Tab eventKey="exipired" title="Expired Products">
          <ExpiredProducts/>
        </Tab>
      </Tabs>
    </div>
    </div>
  );
}

export default Inventory;
