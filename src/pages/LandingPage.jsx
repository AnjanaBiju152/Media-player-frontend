import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      {/* first section */}
      <Container className='mt-5 mb-5 d-flex align-items-center justify-container-evenly'>
        <Row>
          <Col>
            <h3 className='textStyle'>WELCOME TO <span className='text-warning'>MEDIA PLAYER</span></h3>
            <p className='textStyle mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quae suscipit dolores dolore cumque laboriosam, eos pariatur error officiis! Recusandae dolore quaerat libero similique eos hic voluptatibus illo quam sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat harum ex expedita vitae veritatis voluptatum, eos architecto dolor sed repellendus libero aliquid enim labore, quibusdam, voluptates blanditiis deserunt quasi esse! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sint temporibus tenetur, expedita quos voluptate dolorum consequuntur recusandae iure placeat accusantium magnam aut deleniti? Blanditiis ipsam molestias et voluptates cum.</p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-3'>GET STARTED <i class="fa-solid fa-arrow-right"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" width={'400px'} className='ms-5' />
          </Col>
        </Row>
      </Container>

      {/* second section- features */}
      <div className='container'>
      <h3 className='textStyle'>FEATURES</h3>
      <div className='d-flex align-items-center justify-content-evenly mt-5'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"/>
          <Card.Body>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={'./home'}>
              <Button variant="primary">ADD VIDEO</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
          <Card.Body>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={'/home'}>
              <Button variant="primary">VIEW VIDEO</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
          <Card.Body>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to={'/watch'}>
              <Button variant="primary">VIEW HISTORY</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      </div>
      {/* third section */}
      <div className='container mt-5 mb-5 border border-2 border-secondary rounded p-5'>
<Row>
<Col>
<h3 className='textStyle'>SIMPLE AND POWERFUL</h3>
<p className='textStyle'><span className='fs-5 fw-bolder'>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim sint neque unde ullam molestias ratione odit nesciunt quos rerum doloribus modi, possimus porro mollitia nulla ipsum ad omnis vel.</p>
<p className='textStyle'><span className='fs-5 fw-bolder'>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim sint neque unde ullam molestias ratione odit nesciunt quos rerum doloribus modi, possimus porro mollitia nulla ipsum ad omnis vel.</p>
<p className='textStyle'><span className='fs-5 fw-bolder'>PLAY EVERYTHING:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim sint neque unde ullam molestias ratione odit nesciunt quos rerum doloribus modi, possimus porro mollitia nulla ipsum ad omnis vel.</p>
</Col>
<Col>
<div>
  <iframe width="640" height="360" src="https://www.youtube.com/embed/XMrZO7hH6sw?list=RDXMrZO7hH6sw" title="Vazhithunaiye | Dragon | Pradeep Ranganathan, Kayadu Lohar | Ashwath Marimuthu | Leon James | AGS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</Col>
</Row>

      </div>
    </>
  )
}

export default LandingPage