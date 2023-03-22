import { useState } from "react"
import TitleBar from "../Global/TitleBar"
import employeedata from './employeedata'
import Card from "./Card"

const Employee = () => {
  const [currentImage, setcurrentImage] = useState('')

    const profile = employeedata.map(info => <Card key={info.id} info={info} handleCurrentImage={handleCurrentImage}/> )

    function handleCurrentImage(img) {
      setcurrentImage(prev => img) 
   }

  return (
    <>
         <TitleBar title="Employee" icon="FaIdCard" />
         <div className="container" id="employee">
         <div className="newData">
            <h2>Employee</h2>
        <button className="addNew">Add employee</button>
        </div>
          {!currentImage ? ( <div className="card-content">
        {profile}
        </div>) : (
        <div className="profileCard">
          <div className="banner">
            <div className="banner-img">
            <img src={currentImage.imageUrl} alt="" />
            </div>
            <div className="employeeName">
              <h5>{currentImage.firstname} {currentImage.lastname}</h5>
              <p>{currentImage.role}</p>
            </div>
            </div>
            <div className="dataTag">
              <div className="labelTag">
              <p>First Name</p>
            <p>Last Name</p>
          </div>
          <div className="infoTag">
            <p>{currentImage.firstname}</p>
            <p>{currentImage.lastname}</p>
          </div>
            <p>Job Title</p>
              <p className="roleTitle">{currentImage.role}</p>
              <div>
                <div className="labelTag">
              <p>Email Address</p>
              <p>Phone</p>
              </div>
            <div className="infoTag">
              <p className="staffMail">{currentImage.email}</p>
              <p>{currentImage.phone}</p>
            </div>   
            </div>
            <div>
              <div className="labelTag">
              <p>Mobile</p>
              <p>Fax</p>
              </div>
              <div className="infoTag">
                <p>{currentImage.mobile}</p>
                <p>{currentImage.fax}</p>
              </div>
            </div>
            <div className="profileBtn">
              <button className="addNew userBtn">Remove Employee</button>
              <button className="addNew userBtn">Edit Profile</button>
            </div>
          </div>
        </div>)}
    </div>
    </>
  )
}

export default Employee