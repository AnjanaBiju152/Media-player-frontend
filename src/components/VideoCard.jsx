import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';

function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, embededLink } = displayVideo;
    const today = new Date();
    console.log(today);

    const year = today.getFullYear();
    const month = today.getMonth() +1;
    const day = today.getDate();
    console.log(year, month, day);
    const hour = String( today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const timeValue = day + '-' +month+ '-'+year + ' '+hour + ':' +minutes
    
  console.log(timeValue);
  
const history = {
  caption,
  embededLink,
  timeStamp:timeValue
  
}
console.log ('history:',history);

await addToHistory(history)

  };
  const removeVideo = async (id) => {
    const response = await deleteVideo(id)
    console.log("Delete Response");
    console.log(response);
    if (response.status === 200) {
      setDeleteVideoStatus(response)
      toast.success(`${ displayVideo.caption } Successfully Deleted`);
    }


  }
  return (
    <>

      <Card style={{ width: '14rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={'200px'} />
        <Card.Body>
          <div className='d-flex justify-content-between'>
            <Card.Title>{displayVideo.caption.slice(0, 12)}</Card.Title>
            <Button variant="danger" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash"></i></Button>
          </div>

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400" src={displayVideo.embededLink}></iframe>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </>
  )
}

export default VideoCard