import React from "react";
import {Link} from 'react-router-dom'

function Header() {
    return (<>
        <header className="header_bg ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="parent_header">

                            <div className="logo_dashbiar">
                                <img src="#" alt="" />
                                <div className="logo-content">
                                    <Link to="#">
                                        <h4>High Court of Delhi</h4>
                                        <h4>RTI System</h4>
                                    </Link>
                                </div>
                                <Link to="#" className="menu-toggle custom_menu_toggle"><i className="bi bi-list"></i></Link>
                            </div>

                            <div className="user_logIn-">
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Welcome
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="Profiel_name">TEST</li>
                                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="#">Logout</Link></li>
                                    </ul>
                                </div>
                                <div className="profile">
                                    <img src="#" alt="user" className="emblem" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>);
}

export default Header;