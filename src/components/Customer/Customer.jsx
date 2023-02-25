import TitleBar from "../Global/TitleBar"
import TableInfo from "./TableInfo"

const Customer = () => {
  return (
    <div>
    <TitleBar title="Customers" icon="HiUserGroup" />
    <div className="container" id="customer">
    <TableInfo />
    </div>
    </div>
  )
}

export default Customer