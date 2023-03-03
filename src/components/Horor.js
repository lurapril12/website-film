import { Card, Container, Row, Col, Image } from "react-bootstrap"
import annabelleImage from "../assets/img/horor/annabelle.jpg"
import chukyImage from "../assets/img/horor/chuky.jpg"
import hallowenImage from "../assets/img/horor/hallowen.jpg"
import mirrorsImage from "../assets/img/horor/mirrors.jpg"
import thedollImage from "../assets/img/horor/thedoll.jpg"
import thenunImage from "../assets/img/horor/thenun.jpg"

const Horor = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">HOROR MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="horor">
            <Card className="movieImage">
              <Image src={annabelleImage} alt="Annabelle Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">ANNABELLE</Card.Title>
                <Card.Text className="text-left">
                Released in 2014 genre horror, this movie tells the story of a couple who is haunted by a doll
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={chukyImage} alt="Chuky Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">CHUKY</Card.Title>
                <Card.Text className="text-left">
                  Released in 2021 genre horror, This movie tells the story of a doll that is possessed by a spirit</Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={hallowenImage} alt="Hallowen Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">HALLOWEN</Card.Title>
                <Card.Text className="text-left">
                  Released in 2018 genre horror, This movies typically involve horror and suspense themes
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={mirrorsImage} alt="Mirrors Movies" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MIRRORS</Card.Title>
                <Card.Text className="text-left">
                  Released in 2008 genre horror, he film features stromh making it a must-see for fans of the horror genre.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thedollImage} alt="The Doll Movies" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">THE DOLL</Card.Title>
                <Card.Text className="text-left">
                Released in 1987 genre horror, he film only to find themselves at the mercy of a group of possessed dolls
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thenunImage} alt="The Nun Movies" className="images"/>
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">THE NUN</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content.
                </Card.Text>
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

export default Horor;
