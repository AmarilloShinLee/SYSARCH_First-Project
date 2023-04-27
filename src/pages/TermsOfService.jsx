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
                <h2>Terms of Service</h2>

                <p></p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit sodales sem ullamcorper vehicula. Nulla rutrum metus vitae condimentum luctus. Morbi leo lacus, pulvinar quis velit et, mattis molestie purus. Cras mauris lorem, tincidunt in placerat at, pharetra in metus. Praesent et tincidunt ligula. Nullam egestas vitae libero sit amet faucibus. Aliquam sit amet nisl at arcu vulputate feugiat. Nunc sed mollis tellus. Fusce porta mauris sit amet tincidunt efficitur.</p>

                <p>Morbi at tortor vulputate, iaculis augue vestibulum, commodo mi. Aenean eu cursus risus, in fringilla tellus. Donec dictum tortor sit amet mauris ullamcorper, ut molestie lorem gravida. Proin eu rutrum eros, nec condimentum lacus. Cras id elit in elit tincidunt semper ut id orci. Ut iaculis nisi mi, eget sodales arcu tempus et. Vivamus in odio condimentum, maximus tellus in, bibendum lacus. Aliquam luctus varius magna a ullamcorper. Nullam in sem vitae lectus sollicitudin posuere. Mauris finibus condimentum risus sed hendrerit.</p>

                <p>Aenean tristique justo ligula, in auctor sem semper iaculis. Sed consequat turpis orci. Aenean a dapibus ipsum, in tristique lacus. Aliquam nibh leo, mattis a turpis a, pretium hendrerit dui. Etiam porta metus neque, at sodales tellus rhoncus sed. Ut tempor viverra odio, quis viverra tellus pretium sit amet. Nunc quis sapien risus. Proin ut ipsum quis sem malesuada imperdiet sit amet non arcu. Morbi eu augue enim. Mauris blandit ligula vel neque euismod, in feugiat tellus faucibus. Cras maximus rhoncus nunc, sit amet lacinia metus condimentum at.</p>
            </Col>
        </Row>
    </Container>
  );
}

export default BasicExample;