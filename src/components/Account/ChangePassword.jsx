import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

export default function ChangePassword() {
    return (
        <Form className='mb-4'>
            <div className="h6 text-muted mb-3">
                Cambiar de Contraseña
            </div>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Control
                        type='password'
                        placeholder='Nueva contraseña'
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control
                        type='password'
                        placeholder='Repita la contraseña'
                    />
                </Form.Group>
            </Row>
            <Row className='mb-3'>
                <Form.Group as={Col}>
                    <Form.Control
                        type='password'
                        placeholder='Escriba su contraseña actual'
                    />
                </Form.Group>
            </Row>
            <Form.Group className='mb-2'>
                <Form.Check type='checkbox' label='Cerrar sesiones diferentes a esta' />
                <Form.Text></Form.Text>
            </Form.Group>
            <Button variant='primary' size='sm'>
                Cambiar
            </Button>
        </Form>
    )
}