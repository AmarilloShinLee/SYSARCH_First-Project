import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import logo from '../logo.svg';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
    return (
        <div className="App">
        <header className="App-header">
            <Container>
                <Row>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                        <div>
                            <h2>Welcome to the Internet!</h2>
                            <p className='text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis elit sit amet pretium commodo. Etiam ac scelerisque quam. Praesent ac odio erat. Phasellus quis ornare metus. Vivamus rhoncus tellus eu mi volutpat, nec convallis dolor porta.
                            </p>
                            <Button href="/Login" variant="primary" size="lg"><b>Sign In</b></Button>{' '}
                            <Button href="/Registration" variant="secondary" size="lg"><b>Sign Up</b></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
        </div>
    );
};

export default HomePage;