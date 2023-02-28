import { productsData } from "../Product/data"

const SalesItem = ({salesItems = productsData}) => {
    
  return (
    <div className="sales-container">
    <div className="sub-sales">
    <p>All</p>
    <p>Supplements</p>
    <p>Antibiotics</p>
    <p>Syrup</p>
    <p>Gel</p>
    <p>Capsule</p>
    <p>+</p>
</div>
    <div className="sales">
        {productsData.map(drugItem => ( 
            <div className="sales-card">
                <div className="sales-img">
                <img src={drugItem.image} alt="" />
                </div>
                <p>{drugItem.name}</p>
                <h6>${drugItem.price} <span>+</span></h6>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SalesItem