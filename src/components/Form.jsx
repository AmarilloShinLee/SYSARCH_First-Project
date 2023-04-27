import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginElements = [
        {label: "Username", type: "text", placeholder: "Input username"},
        {label: "Password", type: "password", placeholder: "Input Password"},
    ]

    function setValue(e, element) {
        if (element.label === "Username")
            setUsername(e.target.value)

        if (element.label === "Password")
            setPassword(e.target.value)
    }

    return(
        <Form>
            <Form.Group>
                <Form.Label className="d-flex justify-content-center">
                    <h2>Login</h2>
                </Form.Label>
            </Form.Group>

            {loginElements.map((loginElement) => {
                return(
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{loginElement.label}</Form.Label>
                        <Form.Control type={loginElement.type} placeholder={loginElement.placeholder} onChange={(e) => setValue(e, loginElement)} />
                    </Form.Group>
                )
            })}

            <Row>
                <Col>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Col>
            </Row>

            <Form.Group>
                <h4>
                    <Form.Label>Username: </Form.Label>
                    {' '}
                    <Form.Label>
                        {username}
                    </Form.Label>
                </h4>
                <h4>
                    <Form.Label>Password: </Form.Label>
                    {' '}
                    <Form.Label>
                        {password}
                    </Form.Label>
                </h4>
            </Form.Group>

        </Form>
    );
}

export {LoginComponent}