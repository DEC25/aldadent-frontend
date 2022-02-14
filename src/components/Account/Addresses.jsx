import React, { useEffect, useState } from 'react'
import { ListGroup, Form, Row, Col, Button } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { deleteAddressService, getAddressesService, updateAddressService } from '../../services/client.service'
import CustomModal from '../helpers/CustomModal'

export default function Addresses() {

    const [Addresses, setAddresses] = useState([])
    const [ModalShow, setModalShow] = useState(false)
    const [SelectAddress, setSelectAddress] = useState({})

    const clickHandler = (id) => {

        setSelectAddress( Addresses.find((A, _) => A.id === id))
        setModalShow(true)
    }

    const changeHandler = (e) => {
        
        const { name, value } = e.target

        SelectAddress[name] = value
    }

    const deleteAddress = (id) => {

        deleteAddressService(id)
            .then(({ success, msg }) => {
                if (!success){ 
                    return toast.error(msg)
                }

                toast.success(msg)
            })
            .catch(e => console.log(e.message))

        setSelectAddress({})
        setModalShow(false)

    }

    const updateAddress = (e) => {

        updateAddressService(SelectAddress)
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                toast.success(msg)
            })
            .catch(e => console.error(e.message))

        setSelectAddress({})
        setModalShow(false)

    }

    const getAddress = () => {
        getAddressesService()
            .then(res => {
                if (!res.success) {
                    return toast.error(res.msg)
                }

                setAddresses([...res.data])

            })
            .catch(e => console.log(e.message))
    }

    useEffect(() => {
        getAddress()
    }, [SelectAddress])

    return (
        <div>
            <CustomModal
                Title={'Direcciones'}
                Descrip='Aqui podras modificar o eliminar la direccion que seleccionaste.'
                modalshow={ModalShow}
                onModalHide={() => { setSelectAddress({}); setModalShow(false) }}
                modalFooter={
                    <>
                        <Button variant='secondary' onClick={() => setModalShow(false)} size='sm'>Cancelar</Button>
                        <Button variant='danger' size='sm' onClick={() => deleteAddress(SelectAddress.id)}>Eliminar</Button>
                        <Button onClick={updateAddress} size='sm'>Guardar Cambios</Button>
                    </>
                }
            >
                <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                name='direccion'
                                placeholder='Escribe tu direccion'
                                defaultValue={SelectAddress.direccion}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Departamento</Form.Label>
                            <Form.Control
                                name='departamento'
                                placeholder='Selecciona'
                                defaultValue={SelectAddress.departamento}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Nombre / Etiqueta</Form.Label>
                            <Form.Control
                                name='tag'
                                placeholder='Ej. Casa, Domicilio'
                                defaultValue={SelectAddress.tag}
                                onChange={changeHandler}
                            />
                            <Form.Text>Ponle un nombre a tu direccion. (No es obligatorio)</Form.Text>
                        </Form.Group>
                    </Row>
                    <Form.Group>
                        <Form.Label>Direccion Principal</Form.Label>
                        <Form.Check label='Establecer como Direccion Principal' />
                    </Form.Group>
                </Form>
            </CustomModal>
            <div className="h6 text-muted mb-3">
                Direcciones Vinculadas
            </div>
            <p>Aquí podrás administrar las direcciones que estan vinculadas a tu cuenta. Haz click en una de ellas para ver mas opciones.</p>
            {
                Addresses.length > 0 ?
                    <ListGroup variant="flush">
                        {
                            Addresses.map((A, idx) => {
                                return (
                                    <ListGroup.Item
                                        key={idx}
                                        onClick={() => clickHandler(A.id)}
                                        action
                                    >
                                        <div className="h6 text-muted">{A.tag}</div>
                                        <div className="h5">{A.direccion}, {A.departamento}</div>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                    :
                    <div className="h6 text-muted text-center">
                        No hay direcciones vinculadas a tu cuenta
                    </div>
            }
        </div>
    )
}
