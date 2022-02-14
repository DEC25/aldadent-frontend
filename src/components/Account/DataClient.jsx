import React, { useEffect, useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { getClient, updateClientService } from '../../services/client.service'

export default function DataClient() {

    const [Cliente, setCliente] = useState({})

    const updateClient = (e) => {
        updateClientService(Cliente)
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                toast.success(msg)
            })
    }

    const changeHandler = (e) => {

        const { name, value } = e.target

        Cliente[name] = value

    }

    useEffect(() => {

        getClient()
            .then(cli => {
                if (!cli.success) {
                    console.log(cli.msg)
                    return toast.error('Hubo un problema, revisa la consola')
                }

                setCliente(cli.data)

            })
            .catch()

    }, [])

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
                        name='nombre'
                        placeholder='Escribe tu nombre'
                        className='mb-3'
                        onChange={changeHandler}
                        defaultValue={Cliente.nombre}
                    />
                    <Form.Label>
                        Correo
                    </Form.Label>
                    <Form.Control
                        type='email'
                        name='correo'
                        placeholder='Escribe tu correo'
                        className='mb-3'
                        onChange={changeHandler}
                        defaultValue={Cliente.correo}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>
                        DNI
                    </Form.Label>
                    <Form.Control
                        type='text'
                        name='dni'
                        placeholder='Escribe tu DNI'
                        className='mb-3'
                        onChange={changeHandler}
                        defaultValue={Cliente.dni}
                        disabled
                    />
                    <Form.Label>
                        Telefono
                    </Form.Label>
                    <Form.Control
                        type='text'
                        name='telefono'
                        placeholder='Escribe tu numero de telefono'
                        className='mb-3'
                        onChange={changeHandler}
                        defaultValue={Cliente.telefono}
                    />
                </Form.Group>
            </Row>
            <Button size='sm' className='mt-1 mb-3' onClick={updateClient}>
                Guardar Cambios
            </Button>
        </Form>
    )
}
