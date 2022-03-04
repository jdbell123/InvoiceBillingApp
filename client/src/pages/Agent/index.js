import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

// Import Bootstrap Components
// import "./index.csss" // Leave this below the bootstrap components to override them

// Import Project Components

function Agent() {

    return (
        <div className="home-hero h-100">
            <Container>
                <Row>
                     <Col className="col-lg-12 align-items-center">
                        <h1>Agent Page</h1>
                    </Col>
                </Row >
            </Container >
        </div>
    );
}

// Exported for import within app.js
export default Agent;