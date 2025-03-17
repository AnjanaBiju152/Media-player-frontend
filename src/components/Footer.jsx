import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 bg-dark'>
        <div className='d-flex align-items-center justify-content-evenly'>

          <div className='overview' style={{ width: '400px' }}>
            <h5>
              <i class="fa-solid fa-video  text-warning me-3"></i>
              <span style={{ color: 'white', fontWeight: '600' }}>MEDIA PLAYER</span>
              <p className='mt-3' style={{ color: 'white', textAlign: 'justify' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolore, ducimus inventore unde voluptatibus dolorem aliquam blanditiis doloribus facilis saepe magni reprehenderit rem. Excepturi sequi consequatur sed culpa autem perferendis?</p>
            </h5>

          </div>
          <div className='links d-flex flex-column ms-3' style={{ color: 'white' }}>
            <h5 >LINKS</h5>

            <Link to={'/'} style={{textDecoration:'none',color:'white'}} >  LANDING PAGE</Link>
            <Link to={'/home' }style={{textDecoration:'none',color:'white'}}>
              HOME
            </Link>
            <Link to={'/watch'}style={{textDecoration:'none',color:'white'}}>
              WATCH HISTORY
            </Link>

          </div>
          <div className='guides d-flex flex-column ms-3' style={{ color: 'white' }}>
            <h5 >GUIDES</h5>
            REACT
            <br />
            REACT BOOTSTRAP
            <br />
            FONT AWESOME
          </div>
          <div className='contact_us ms-3' style={{ color: 'white' }}>
            <h5 > CONTACT US</h5>
            <div className='d-flex '>
              <input type="text" name='' placeholder='Enter Your Email' className='form-control' />
              <button className='btn btn-warning ms-3'> SUBSCRIBE</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-3'>
              <i class="fa-brands fa-instagram fa-2x"></i>
              <i class="fa-brands fa-twitter fa-2x"></i>
              <i class="fa-brands fa-linkedin fa-2x"></i>
              <i class="fa-brands fa-reddit  fa-2x"></i>
            </div>
          </div>
        </div>

      </div>
      <p className='text-center mt-5 textStyle'>COPY RIGHT&#169; 2025 MEDIA PLAYER BUILT WITH REACT</p>
    </>
  )
}

export default Footer