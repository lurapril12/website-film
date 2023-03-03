import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
            <Col>
                <div className="title">RELAX AND CHILL</div>
                <div className="title">HAVE FUN</div>
                <div className="introButton mt-4 text-center">
                <Button href="#horor" variant="dark">LIST MOVIES</Button>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Intro;
