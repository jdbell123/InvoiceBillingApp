import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

// Import Bootstrap Components
import "./index.css" // Leave this below the bootstrap components to override them

// Import Project Components
import HeaderMain from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Test1 from "../../components/_TestComponents/Test1";


function Home() {
    return (
        <div className="home-hero h-100">
            <Container>
                <Row>
                    <Col className="col-lg-12 align-items-center">
                        <Test1></Test1>
                    </Col>
                </Row >
            </Container >
        </div>
    );
}

// Exported for import within app.js
export default Home;