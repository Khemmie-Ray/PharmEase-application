import "./Sidebar.css";
import { NavLink} from "react-router-dom";
import {links} from "./links"
import {IoPersonCircleSharp} from "react-icons/io5";

const SideBar = ({isOpen}) => {

    return (
    <>
      
      <aside className= {isOpen ? "sidebar__open" : "sidebar__closed"}>
        
        <div className="sidebar__menu">
          <>
        <div className="sidebar__avatar">
        {isOpen && (<span className="sidebar__text" style={{color: "#333", textAlign:"center"}}><IoPersonCircleSharp className= "avatar" />Admin</span>
        
        )}</div>
        
        {
          links.map((item)=>(
            <div key={item.links.icon} className="sidebar-menu-item">
              {isOpen && (<p >
                  {item.title}
                </p>)}
              {
                item.links.map((link)=>(
                  <NavLink 
                  to={`/${link.name}`}
                  key={link.name}
                  
                  activeClassName="sidebar__link--active"
                  >
                    <div className="sidebar-menu-link">
                    <div style={{fontSize:"17px"}}>{link.icon}</div>
                    {isOpen && <span className="sidebar__text" >{link.name}</span>
                    }
                    </div>
                  </NavLink>
                ))
              }
            </div>
          ))
        }
 
        </> 
    </div>
      </aside>
      
    </>
  );
};

export default SideBar;

