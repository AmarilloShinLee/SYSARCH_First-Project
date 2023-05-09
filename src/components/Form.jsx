import { useState } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginElements = [
        { label: "Username", type: "text", placeholder: "Input username" },
        { label: "Password", type: "password", placeholder: "Input Password" },
    ]

    function setValue(e, element) {
        if (element.label === "Username")
            setUsername(e.target.value)

        if (element.label === "Password")
            setPassword(e.target.value)
    }

    return (
        <Form>
            <Form.Group>
                <Form.Label className="d-flex justify-content-center">
                    <h2>Login</h2>
                </Form.Label>
            </Form.Group>

            {loginElements.map((loginElement) => {
                return (
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

const RegistrationComponent = () => {
    const registrationElements = [
        { label: "FirstName", type: "text", placeholder: "(e.g. Jose Pablo)" },
        { label: "LastName", type: "text", placeholder: "(e.g. Gonzales)" },
        { label: "Email", type: "email", placeholder: "(e.g. josepablogonzales@email.com)" },
        { label: "Username", type: "text", placeholder: "Input username" },
        { label: "Password", type: "password", placeholder: "Input Password" },
        { label: "ConfirmPassword", type: "password", placeholder: "Input Password" },
        { label: <label>I have read the <a href="/TermsOfService">Terms of Service</a></label>, type: "checkbox" }
    ]

    const formGroup = (element) => {
        <Col lg={6}>
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>{element.label}</Form.Label>
                <Form.Control type={element.type} placeholder={element.placeholder} />
            </Form.Group>
        </Col>
    }

    return (
        <Form >
            <Form.Group >
                <Form.Label className="d-flex justify-content-center">
                    <h2>Registration</h2>
                </Form.Label>
            </Form.Group>

            {registrationElements.map((regElement) => {
                //if (regElement.Label === )

                <Row>

                </Row>
            })}

            {/* <Row>
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
            </Form.Group> */}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export { LoginComponent }