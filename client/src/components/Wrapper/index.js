import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import SideBar from "../SideBar";

function Wrapper() {
    return (
        <main className="d-inline-block bg-dark vh-100" >
            <Row>
                <Col>
                    <SideBar />
                </Col>
            </Row>
        </main>
    )
}


export default Wrapper;