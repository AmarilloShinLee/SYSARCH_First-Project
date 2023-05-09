import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import {LoginComponent} from '../components/Form';
import '../NewStyle.css';

function BasicExample() {
  return (
    <Container className="">
        <Row className="d-flex justify-content-center">
            <Col xl="6" className="border rounded bg-container">
                <LoginComponent />
            </Col>
        </Row>
    </Container>
  );
}

export default BasicExample;