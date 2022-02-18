import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Badge, Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getProductService } from '../../services/products.service'

export default function ProductView() {

    const { id } = useParams()

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Image, setImage] = useState('')
    const [Added, setAdded] = useState(false)

    const getProduct = async () => {
        await getProductService(id)
            .then(prod => {
                console.log(prod)
                setName(prod.nom_prod)
                setDescription(prod.desc_prod)
                setImage(prod.img_prod)
                setAdded(prod.carrito)
            })
    }

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={Image} alt='' className="" style={{ width: '100%' }} />
                </div>
                <br />
                <br />
                <br />
                <div className="col-6">
                    <br />
                    <br />
                    { Added && <Badge bg='danger' className='mb-2' >Agregado</Badge> }
                    <h1>{Name}</h1>
                    <br />
                    <p style={{ whiteSpace: 'pre-line' }}>{Description.trim()}</p>
                    {

                        !Added &&
                            <Form style={{ marginTop: '2rem' }}>
                                <Form.Group className='d-flex'>
                                    <Form.Group className='d-flex' style={{ marginRight: '1rem' }}>
                                        <Button variant='outline-info'>
                                            <b>
                                                -
                                            </b>
                                        </Button>
                                        <Form.Control
                                            type="numeric"
                                            className='text-center'
                                            style={{ width: '2.1rem', padding: '0' }}
                                            defaultValue={1}
                                        />
                                        <Button variant='outline-info'>
                                            <b>
                                                +
                                            </b>
                                        </Button>
                                    </Form.Group>
                                    <Button size='sm'>Agregar al Carrito</Button>
                                </Form.Group>
                            </Form>
                    }
                </div></div>
            <br />
            <br />
        </div>
    )
}
