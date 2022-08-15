import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <img alt="Alt content" src={require('./../assets/images/trident-logo.png')} />
                </Link>
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/">
                            <i className="fa fa-dashboard"></i> Dashboard
                        </Link>
                </li>
                    

                    <li className="mb-1">
                        <Link tag="a" className="" to="/blank-page">
                            <i className="fa fa-file-o"></i> Service
                        </Link>
                    </li>
                    
                   
                  
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        Options
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Employees</a></li>
                            <li><a href="#" className="rounded">Guests</a></li>
                            <li><a href="#" className="rounded">Announcements</a></li>
                            <li><a href="#" className="rounded">Events</a></li>
                            <li><a href="#" className="rounded">Check-In</a></li>
                        </ul>
                        </div>
                    </li> 

                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse1" aria-expanded="false">
                        Rooms
                        </button>
                        <div className="collapse" id="dashboard-collapse1">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Room</a></li>
                            <li><a href="#" className="rounded">Bookings</a></li>
                            <li><a href="#" className="rounded">Lost And Founds</a></li>
                            <li><a href="#" className="rounded">Roomservices</a></li>
                            <li><a href="#" className="rounded">Arrivals</a></li>
                            <li><a href="#" className="rounded">Departures</a></li>
                            <li><a href="#" className="rounded">In House Guest</a></li>
                        </ul>
                        </div>
                    </li> 


                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse2" aria-expanded="false">
                        Inventory
                        </button>
                        <div className="collapse" id="dashboard-collapse2">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Food</a></li>
                            <li><a href="#" className="rounded">Gym</a></li>
                            <li><a href="#" className="rounded">Sports</a></li>
                             </ul>
                        </div>
                    </li> 


                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse3" aria-expanded="false">
                        Reservation
                        </button>
                        <div className="collapse" id="dashboard-collapse3">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Make Reservation</a></li>
                            <li><a href="#" className="rounded">Gym</a></li>
                            <li><a href="#" className="rounded">Sports</a></li>
                             </ul>
                        </div>
                    </li> 


                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse4" aria-expanded="false">
                        Funds
                        </button>
                        <div className="collapse" id="dashboard-collapse4">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Refunds</a></li>
                            <li><a href="#" className="rounded">Audit</a></li>
                            <li><a href="#" className="rounded">Fund Management</a></li>
                             </ul>
                        </div>
                    </li> 
                </ul>
            </PerfectScrollbar>
            <div className="dropdown fixed-bottom-dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://via.placeholder.com/50" alt="" width="32" height="32" className="rounded-circle me-2" />
                    <span>Admin</span>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><Link className="dropdown-item" to="/profile"><i className="fa fa-user-circle" aria-hidden="true"></i> Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Sign out</Link></li>
                </ul>
            </div>
        </div>
    }
}

export default Sidebar;