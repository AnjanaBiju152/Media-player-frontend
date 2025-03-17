import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { toast } from 'react-toastify';
function Add({ setuploadVideoStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setVideoDetails({
            caption: '',
            thumbnailUrl: '',
            embededLink: ''
        })
    }
    const handleShow = () => setShow(true);
    const [videoDetails, setVideoDetails] = useState({
        caption: '',
        thumbnailUrl: '',
        embededLink: ''
    })
    const handleUpload = async () => {
        console.log("Upload videos ");
        console.log(videoDetails);
        const { caption, thumbnailUrl, embededLink } = videoDetails;
        if (!caption || !thumbnailUrl || !embededLink) {

            toast.warning("please enter the form completely")
        }
        else {
            const result = await uploadVideo(videoDetails);
            console.log("result");
            console.log(result);
            if (result.status === 201) {
                setuploadVideoStatus(result)
                toast.success("successfully uploaded");
                handleClose();
            }
            else {
                toast.error("something went to wrong")
            }
        }

    }
    const setembeddedLink = (data) => {
        //set embeddedLink
        const link = `https://www.youtube.com/embed/${data.slice(-11)}`
        console.log(link);
        setVideoDetails({ ...videoDetails, embededLink: link })
    }
    return (
        <>

            <div className='d-flex align-item-center'>

                <h5 className='textStyle'>UPLOAD NEW VIDEO</h5>
                <button className='btn'><i class="fa-solid fa-cloud-arrow-up textStyle fs-5" onClick={handleShow}></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                data-bs-theme='dark'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='textStyle'> <i class="fa-solid fa-film text-warning me-3"></i>UPLOAD VIDEO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="VIDEO TITLE"
                                onChange={(e) => setVideoDetails({
                                    ...videoDetails, caption: e.target.value
                                })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="VIDEO THUMBNAIL"
                                onChange={(e) => setVideoDetails({
                                    ...videoDetails, thumbnailUrl: e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="VIDEO LINK"
                                onChange={(e) => setembeddedLink(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>UPLOAD</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Add