import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = (()=>{

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link className="navbar-brand" to='/'>Főoldal</Link>
                <NavLink className="navbar-brand" to='/ermesek'>Az olimpia érmesei</NavLink>
                <NavLink className="navbar-brand" to='/mermesek'>A magyar érmesek</NavLink>

            </nav>
        </div>
    )

}
)
export default Navbar