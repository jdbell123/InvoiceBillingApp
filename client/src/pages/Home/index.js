
// Import Bootstrap Components
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css" // Leave this below the bootstrap components to override them

// Import Project Components
import HeaderMain from '../../components/Header';
import SideBar from '../../components/SideBar';


function Home() {
    return (
        <SideBar />
    );
}

// Exported for import within app.js
export default Home;