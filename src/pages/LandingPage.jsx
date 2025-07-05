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
            <h3 className='textStyle'>WELCOME TO <span className='text-warning'>TuneNest</span></h3>
            <p className='textStyle mt-3' style={{ textAlign: 'justify' }}>  Discover your rhythm with TuneNest – the ultimate hub for music lovers. Stream curated playlists,  
  explore indie artists, and organize your favorites effortlessly. Whether you're a creator or a listener,  
  dive into a world where music meets simplicity. </p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-3'>GET STARTED <i class="fa-solid fa-arrow-right"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e" alt="" width={'400px'} className='ms-5' />
          </Col>
        </Row>
      </Container>

      {/* second section- features */}
      <div className='container'>
      <h3 className='textStyle'>FEATURES</h3>
      <div className='d-flex align-items-center justify-content-evenly mt-5'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4
"/>
          <Card.Body>

            <Card.Text>
              Auto-sort tracks by genre, mood, or tempo. Your library, your rules. 
            </Card.Text>
            <Link to={'./home'}>
              <Button variant="primary">ADD VIDEO</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec" />
          <Card.Body>

            <Card.Text>
              Add your music videos in seconds. Share your creations with the community.  
            </Card.Text>
            <Link to={'/home'}>
              <Button variant="primary">VIEW VIDEO</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff" />
          <Card.Body>

            <Card.Text>
              Revisit recently played songs and pick up where you left off.  
 

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