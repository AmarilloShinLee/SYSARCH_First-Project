import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import logo from '../pictures/logo.svg';
import newLogo from '../pictures/circle-user.png'
import Button from 'react-bootstrap/Button';
import { PrimaryButton } from '../components/Button';
import { useEffect, useState } from 'react';

const HomePage = () => {
    let title = "Welcome to the Internet!";

    // UseState and UseEffect
    // const [count, setCount] = useState(0);
    
    // const addCount = () => {
    //     setCount(count + 1);
    // };

    // useEffect(() => {
    //     document.title = `You pressed 'Sign Up' ${count} times`;
    // }, [addCount]);

    return (
        <div className="App">
        <header className="App-header">
            <Container>
                <Row>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <img src={newLogo} className="App-logo" alt="logo" />
                    </Col>
                    <Col md={6} className='d-flex align-items-center justify-content-center'>
                        <div>
                        <h2>{title}</h2>
                            <p className='text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis elit sit amet pretium commodo. Etiam ac scelerisque quam. Praesent ac odio erat. Phasellus quis ornare metus. Vivamus rhoncus tellus eu mi volutpat, nec convallis dolor porta.
                            </p>
                            <PrimaryButton />
                            {/* <Button variant="primary" href="/Login" size="lg"><b>Sign In</b></Button>{' '}
                            <Button variant="secondary" href="/Registration" size="lg"><b>Sign Up</b></Button> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
        </div>
    );
};

export default HomePage;