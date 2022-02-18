import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// All Styling Objects
const style_Container = {
    // color: 'white',
};

function SideBar() {
    return (
        <div className="d-inline-block bg-dark vh-100" style={style_Container}>
            <ul className="nav nav-fill flex-column mb-auto text-white">
                
                {/* Nav Links */}
                <li className="nav-item">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Set Processing Dates
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Import EC Data
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Pay Detail Process
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Pay Detail Process
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Create Billing Reports
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Create Group Info Report
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Create IIF Files
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Run NPY Delete
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Create Division EDI Import File
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Import Division EDI File
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Create Group Balance Report
                    </a>
                </li>
                <hr className="m-0"/>

                <li className="nav-item ">
                    <a href="#" className="nav-link active text-light" aria-current="page">
                        Overrides
                    </a>
                </li>
                <hr className="m-0"/>




            </ul>
        </div>
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
