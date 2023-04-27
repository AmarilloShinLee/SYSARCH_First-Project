import Button from 'react-bootstrap/Button';

const PrimaryButton = () => {
    return (
        <Button variant="primary" href="/Login" size="lg">
            <b>SIgn In</b>
        </Button>
    );
}

const SecondButton = (value) => {
    return (
        <Button variant="secondary" href="/Registration" size="lg"><b>{value}</b></Button>
    );
}

export {PrimaryButton, SecondButton}