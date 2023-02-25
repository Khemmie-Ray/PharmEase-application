import TitleBar from "../Global/TitleBar"
import TableInfo from "./TableInfo"

const Suppliers = () => {
  return (
    <div>
    <TitleBar title="Suppliers" icon="BiGroup" />
    <div className="container" id="supplier">
    <TableInfo />
    </div>
    </div>
  )
}

export default Suppliers