import React, { useRef } from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { addItemCarService } from '../../services/car.service'
import { isLogged } from '../../services/auth.service'
import { Card, Button, Badge } from 'react-bootstrap'

export const CardProduct = ({ id, img, added }) => {

    const navigate = useNavigate()

    const [Cantidad, setCantidad] = useState('')
    const [Added, setAdded] = useState(false)
    const [MouseOver, setMouseOver] = useState(false)

    const normal = { width: '17rem' }
    const over = { width: '17rem', borderColor: 'blue' }

    const addToCar = async (e) => {
        e.preventDefault()

        if (!isLogged()) {
            setCantidad('')
            return toast(
            <h6>
                Primero debes {' '}
                <span
                    className='text-primary'
                    onClick={() => navigate('/auth/login', { state: { from: '/productos' } })}
                    style={{ cursor: 'pointer' }}
                >
                    iniciar sesión
                </span>
            </h6>, {
                icon: '🔒',
                duration: 1800
            })
        }

        if (Cantidad === '') {
            return toast.error('Elige una cantidad')
        }

        addItemCarService({ idProd: id, cantidad: Cantidad })
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                setCantidad('')
                setAdded(true)
                toast.success(msg)
            })
            .catch(err => { toast.error('Ocurrió un problema inesperado!'); console.log(err.message) })

    }

    return (
        <div className="col-sm p-2">
            <Card
                style={MouseOver ? over : normal}
                onMouseOver={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
            >
                <Card.Img
                    variant="top"
                    src={img}
                    onClick={e => navigate(`/productos/${id}`)}
                />
                <Card.Body className='col-12 text-center'>
                    <Card.Text>
                        <input
                            type="number"
                            className='text-center me-2'
                            placeholder={ 'Cantidad' }
                            min={1}
                            value={Cantidad}
                            onChange={e => setCantidad(e.target.valueAsNumber)}
                            disabled={Added || added ? true : false}
                        />
                    </Card.Text>

                    {
                        Added || added ?
                            <span className='h6'>
                                <Badge pill bg='danger'>
                                    Agregado
                                </Badge>
                            </span>
                            : <Button
                                variant="primary"
                                onClick={addToCar}
                            >
                                Comprar
                            </Button>
                    }

                </Card.Body>
            </Card>

            {/* <img 
                src={img} 
                alt="" 
                className="w-100 amiibo"
                onClick={e => navigate(`/productos/${id}`)}
            />
            <div className="text-center">
                <span className="amiibo-name h5 p-2">
                    <br />
                    <div className="col-12 text-center">
                        <input 
                            type="number" 
                            className='text-center' 
                            placeholder='Cantidad'
                            min={1}
                            value={Cantidad} 
                            onChange={e => setCantidad(e.target.valueAsNumber)}
                        />
                        <br />
                        <br />
                        <button type="button" className="btn btn-outline-info btn-lg" onClick={addToCar}>
                            Comprar
                        </button>
                    </div>
                </span>
            </div> */}
        </div>
    )
}
