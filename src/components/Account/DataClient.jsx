import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default function DataClient() {
    return (
        <Form className='mb-3'>
            <div className="h6 text-muted mb-3">
                Tus Datos Personales
            </div>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>
                        Nombre
                    </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Escribe tu nombre'
                        className='mb-3'
                        defaultValue={'Diego'}
                    />
                    <Form.Label>
                        Correo
                    </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Escribe tu correo'
                        className='mb-3'
                        defaultValue={'diego@elias.com'}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>
                        DNI
                    </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Escribe tu DNI'
                        className='mb-3'
                        defaultValue={'87654321'}
                        disabled
                    />
                    <Form.Label>
                        Telefono
                    </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Escribe tu numero de telefono'
                        className='mb-3'
                        defaultValue={'987654321'}
                    />
                </Form.Group>
            </Row>
        </Form>
    )
}
