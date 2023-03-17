import { logout } from "../Redux/Actions/myAction";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import dd from '../CSS/signupComponent.module.css'

const Dropdown = ({setDropdown}) => {
const dispatch= useDispatch();
  
  let navigate = useNavigate()
   let style={
    
    backgroundColor:'black'
   }
  
    return (
      <ul className={dd.dropdown}
       type="none"
       onClick={()=>{
        setDropdown(false)
       }}
       
       >
        
          <li>
            <Link to ="/watchlist">
            watchlist
            </Link>
          </li>
        <li onClick={() => {
          dispatch(logout())
          navigate('/')
        }} >Logout</li>
      
      </ul>
    );
  };
  
  export default Dropdown;