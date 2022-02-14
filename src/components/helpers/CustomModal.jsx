import React from 'react'
import { Modal, Row, Col, Form, Button } from 'react-bootstrap'

export default function CustomModal({ modalshow, onModalHide, Title, Descrip, children, modalFooter }) {
    return (
        <Modal
            show={modalshow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            onHide={onModalHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {Title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='h6 text-muted mt-1 mb-3'>
                    {Descrip}
                </div>
                {children}
            </Modal.Body>
            <Modal.Footer>
                {
                    modalFooter
                }
            </Modal.Footer>
        </Modal>
    )
}