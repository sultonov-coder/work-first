import "../App.css"
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <div className="header">
            <Link className="head-logo" to="/"> <h4>Welcome</h4>  </Link>
        </div>
    )
}