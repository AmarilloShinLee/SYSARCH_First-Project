import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function BasicExample() {
  return (
    <Container>
        <Row className="d-flex justify-content-center">
            <Col sm="8" className="border rounded bg-container" style={{margin: "6em", padding: "4em"}}>
                {/* <Form >

                    <Form.Group >
                    <Form.Label className="d-flex justify-content-center">
                        <h2>Registration</h2>
                    </Form.Label>
                    </Form.Group>

                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="email" placeholder="Enter first name" />
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="email" placeholder="Enter last name" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={<label>I have read the <a href="/TermsOfService">Terms of Service</a></label>} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}
            </Col>
        </Row>
    </Container>
  );
}

export default BasicExample;