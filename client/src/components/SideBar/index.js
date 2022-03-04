import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";

import "./index.css"

function SideBar() {
    return (
        <ul className="nav nav-fill flex-column mb-auto text-blue">
            <li className="nav-item px-0 my-2 text-center" href="/">
                <NavLink to="/" exact={true} className="nav-link ps-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                    <div>
                        Home
                    </div>
                </NavLink>
            </li>
            <hr className="m-0" />

            <li className="nav-item">
                <a href="#" className="nav-text nav-link active" aria-current="page">
                    Set Processing Dates
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Import EC Data
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Pay Detail Process
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Pay Detail Process
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Create Billing Reports
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Create Group Info Report
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Create IIF Files
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Run NPY Delete
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Create Division EDI Import File
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Import Division EDI File
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Create Group Balance Report
                </a>
            </li>
            <hr className="m-0" />

            <li className="nav-item ">
                <a href="#" className="nav-link active" aria-current="page">
                    Overrides
                </a>
            </li>
            <hr className="m-0" />

            <li className=" nav-item my-2 text-center">
                <NavLink to="/agent" className="nav-link ps-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    <div>
                        Agent
                    </div>
                </NavLink>
            </li>
            <hr className="m-0" />
        </ul>
    )
}

// function SideBar() {
//     return (
//         <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={style_NavBar}>
//             <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                 <svg className="bi me-2" width="40" height="32"></svg>
//                 <span className="fs-4">Sidebar</span>
//             </a>
//             <hr />
//             <ul className="nav nav-pills flex-column mb-auto">
//                 <li className="nav-item">
//                     <a href="#" className="nav-link active" aria-current="page">
//                         <svg className="bi me-2" width="16" height="16"></svg>
//                         Home
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="nav-link text-white">
//                         <svg className="bi me-2" width="16" height="16"></svg>
//                         Dashboard
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="nav-link text-white">
//                         <svg className="bi me-2" width="16" height="16"></svg>
//                         Orders
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="nav-link text-white">
//                         <svg className="bi me-2" width="16" height="16"></svg>
//                         Products
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" className="nav-link text-white">
//                         <svg className="bi me-2" width="16" height="16"></svg>
//                         Customers
//                     </a>
//                 </li>
//             </ul>
//             <hr />
//             <div className="dropdown">
//                 <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
//                     <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
//                     <strong>mdo</strong>
//                 </a>
//                 <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
//                     <li><a className="dropdown-item" href="#">New project...</a></li>
//                     <li><a className="dropdown-item" href="#">Settings</a></li>
//                     <li><a className="dropdown-item" href="#">Profile</a></li>
//                     <li><hr className="dropdown-divider" /></li>
//                     <li><a className="dropdown-item" href="#">Sign out</a></li>
//                 </ul>
//             </div>
//         </div>
//     )

// };



export default SideBar;
