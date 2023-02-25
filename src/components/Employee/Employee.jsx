import TitleBar from "../Global/TitleBar"
import { useState, useEffect } from "react"

const Employee = () => {
    // const [userImage, setUserImage] = useState([])
    // const [currentImage, setcurrentImage] = useState('')
    //     const roles = ["Operation Manager", "I.T Specialist", "Sales Rep", "Pharmacist"]

    useEffect(() => {
        fetch('https://api.unsplash.com/search/photos?query=doctor-profile&per_page=6&client_id=RCPdqXnOWsf2C1dFCQlPSmsfwMREmSW-wrETwp7i-qU', {
            cache: "force-cache"
        })
        .then(res => res.json())
        .then(data => console.log(data.results))
    }, []) 

  return (
    <div>
         <TitleBar title="Employee" icon="FaIdCard" />
        <div className="container" id="employee">
        
        </div>
    </div>
  )
}

export default Employee