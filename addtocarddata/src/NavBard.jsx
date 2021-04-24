import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const NavBar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 max-auto">


                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" exact to="/Bootstrap5demo/Home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            {/* <NavLink className="nav-link" activeClassName="menu_active" to="/Bootstrap5demo/Addcard">Addcard</NavLink> */}
                                        </li>
                             
                                        <li className="nav-item">
                                            {/* <NavLink className="nav-link" activeClassName="menu_active" to="/AddToCard">AddToCard</NavLink> */}
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;