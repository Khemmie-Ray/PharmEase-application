
const Card = (props) => {
    const {info, handleCurrentImage} = props

  return (
        <div className="card" onClick={() => handleCurrentImage(info)}>
        <img src={info.imageUrl} alt="" />
        <h4 className="role-name">{info.firstname} {info.lastname}</h4>
        <p>{info.role}</p>
        <button className="addNew profileNew">View Profile</button>
        </div>
  )
}

export default Card