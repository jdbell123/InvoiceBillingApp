import { Outlet } from 'react-router-dom';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Header from "../Header";
import SideBar from "../SideBar";

function Wrapper() {

    return (
        <main className="d-inline-block bg-light vh-100" >
            <Row>
                <Header />
            </Row>
            <Row>
                <Col>
                    <SideBar />
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </main>
    )
}


export default Wrapper;