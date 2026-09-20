import React from "react";
import {Link} from 'react-router-dom'


function Sidebar(){

    return(<>
    <div className="dashboard-nav sidebar">
                    <Link to="#!" className="menu-toggle cust_mobile__close"><i className="bi bi-x-circle"></i></Link>
                    <nav className="dashboard-nav-list">
                        <Link to="#" className="dashboard-nav-item active" data-tooltip="Inbox">
                            <i className="bi bi-inbox"></i> Dashboard
                        </Link>
                        <Link to="#" className="dashboard-nav-item " data-tooltip="Submit RTI Application">
                            <i className="bi bi-person-add"></i> New RTI Request
                        </Link>
                        <Link to="#" className="dashboard-nav-item " data-tooltip="Master Page">
                            <i className="bi bi-inbox"></i> RTI Inbox
                        </Link>
                        <Link to="#" className="dashboard-nav-item " data-tooltip="Master Page">
                            <i className="bi bi-person-gear"></i> Edit Profile
                        </Link>
                        <Link to="#" className="dashboard-nav-item " data-tooltip="Master Page">
                            <i className="bi bi-gear"></i> Change Password
                        </Link>
                        <Link to="#" className="dashboard-nav-item" data-tooltip="Master Page">
                            <i className="bi bi-box-arrow-right"></i>Logout
                        </Link>
                    </nav>
                </div>
        </>);
}

export default Sidebar;