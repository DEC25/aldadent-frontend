import React, { useEffect, useState } from 'react'
import { Table, Button, Form, Row, Col } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { deleteProductService, getProductsService, updateProductService } from '../../services/products.service'
import CustomModal from '../helpers/CustomModal'

export default function ProductList() {

    const [Products, setProducts] = useState([])
    const [ModalShow, setModalShow] = useState(false)
    const [SelectProduct, setSelectProduct] = useState({})

    const clickProduct = (id) => {
        setSelectProduct(Products.find((V, _) => V.id_prod === id))
        setModalShow(true)
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        SelectProduct[name] = value
    }

    const updateProduct = () => {

        updateProductService(SelectProduct.id_prod, SelectProduct)
            .then(res => {
                if (!res.success) {
                    return toast.error(res.msg)
                }

                toast.success(res.msg)
            })
            .catch(e => console.error(e.message))

    }

    const deleteProduct = id => {

        deleteProductService(id)
            .then(res => {
                if (!res.success) {
                    return toast.error(res.msg)
                }

                toast.success(res.msg)
            })
            .catch(e => console.error(e.message))

    }

    useEffect(() => {

        getProductsService()
            .then(data => {
                console.log(data)
                setProducts([...data])
            })
            .catch(e => console.error(e.message))

    }, [])

    return (
        <div className='container'>
            <CustomModal
                Title={`Producto | ID: ${SelectProduct.id_prod}`}
                Descrip='Aqui podras modificar o eliminar el producto que seleccionaste.'
                onModalHide={() => setModalShow(false)}
                modalshow={ModalShow}
                modalFooter={
                    <>
                        <Button size='sm' variant='secondary' onClick={() => setModalShow(false)}>Cancelar</Button>
                        <Button size='sm' variant='danger' onClick={() => { }}>Eliminar</Button>
                        <Button size='sm' variant='primary' onClick={() => updateProduct()}>Guardar</Button>
                    </>
                }
            >
                <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name='nom_prod'
                                placeholder='Nombre del producto'
                                defaultValue={SelectProduct.nom_prod}
                                onChange={onChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                name='precio_prod'
                                placeholder='Precio del Producto'
                                defaultValue={SelectProduct.precio_prod}
                                onChange={onChangeHandler}
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Label>Descripcion</Form.Label>
                        <textarea
                            rows={8}
                            name='desc_prod'
                            defaultValue={SelectProduct.desc_prod}
                            onChange={onChangeHandler}
                        />
                    </Row>
                </Form>
            </CustomModal>
            <div className="h2 mt-3 mb-4">
                Productos
            </div>
            <div className="h6 text-muted">
                Aqui puedes ver y agregar nuevos productos. Haz click en un producto para ver mas opciones.
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map((prod, idx) => {
                            return (

                                <tr onClick={() => clickProduct(prod.id_prod)} key={idx}>
                                    <td>{prod.id_prod}</td>
                                    <td>{prod.nom_prod}</td>
                                    <td>{prod.precio_prod.toFixed(2)}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}