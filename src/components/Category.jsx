import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteVideoCategory, getAllCategory } from '../services/allApi';
import { toast } from 'react-toastify';


function Category() {
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([])

    const handleClose = (

    ) => {
        setShow(false)
        setCategoryName("")
    }
    const handleShow = () => setShow(true);
    const [categoryName, setCategoryName] = useState("")
    const handleAddCategory = async () => {
        if (!categoryName) {
            toast.warning("please enter category")
        }
        else {
            const body = {
                categoryName: categoryName,
                allVideos: []

            }
            const response = await addCategory(body);
            console.log("Category responsed");
            console.log(response);
            if (response.status === 201) {
                toast.success(`${categoryName} Successfully saved`);
                getCategory();

            }

            handleClose()
        }
    }
    const getCategory = async () => {
        const response = await getAllCategory()
        console.log("categories");
        console.log(response);
        const { data } = response
        setCategories(data)

    }
    useEffect(() => {
        getCategory();

    }, [])
    
    const deleteCategory = async (id) => {
        await deleteVideoCategory(id)
        getCategory();

    }
    return (
        <>
            <div>
                <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                data-bs-theme='dark'
            >
                <Modal.Header closeButton>
                    <Modal.Title className='textStyle'> <i class="fa-solid fa-list text-warning me-3"></i>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="CATEGORY NAME"
                                onChange={(e) => setCategoryName(e.target.value)} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CANCEL
                    </Button>
                    <Button variant="primary" onClick={handleAddCategory} >ADD</Button>
                </Modal.Footer>
            </Modal>
            {
                categories?.map((item) => (

                    <div className='border border-secondary rounded p-3 m-3'>
                        <div className='d-flex justify-content-between align-items-center'>

                            <h6>{item.categoryName}</h6>
                            <button className='btn btn-danger' onClick={() => deleteCategory(item.id)}><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                ))
            }



        </>
    )
}

export default Category