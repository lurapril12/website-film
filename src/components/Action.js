import { Card, Container, Row, Col, Image } from "react-bootstrap";
import avatarImage from "../assets/img/action/avatar.jpg";
import rampageImage from "../assets/img/action/rampage.jpg";
import guardianImage from "../assets/img/action/guardian.jpg";
import piretesImage from "../assets/img/action/piretes.jpg";
import starwarsImage from "../assets/img/action/starwars.jpg";
import missimImage from "../assets/img/action/missim.jpg";

const Action = () => {
  return (
    <div>
        <Container>
            <br />
            <h1 className="text-white">ACTION MOVIES</h1>
            <br />
            <Row>
            <Col md={4} className="movieWrapper" id="action">
                <Card className="movieImage">
                <Image src={avatarImage} alt="Avatar Movies" className="images" />
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">AVATAR</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={rampageImage} alt="Rampage Movies" className="images" />
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">RAMPAGE</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={guardianImage} alt="Guardian Movies" className="images" />
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">GUARDIAN</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={piretesImage} alt="Piretes Movies" className="images" />
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">PIRETES</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={starwarsImage} alt="Star Wars Movies" className="images" />
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">START WARS</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            <Col md={4} className="movieWrapper">
                <Card className="movieImage">
                <Image src={missimImage} alt="Miss Im Movies" className="images" />
                <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MISSION IMPOSSIBLE</Card.Title>
                    <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </div>
                </Card>
            </Col>
            </Row>
        </Container>
    </div>
    );
};

export default Action;
