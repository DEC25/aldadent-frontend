import React, { useEffect, useState } from 'react'
import { Spinner, Button, Form } from 'react-bootstrap'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { isLogged } from '../../services/auth.service'
import { getItemsCarService } from '../../services/car.service'
import { toast } from 'react-hot-toast'

const InfoProduct = ({ idx, prod, price, cant, total }) => {

    const [Cant, setCant] = useState(cant.toString())

    const addCant = () => {

        setCant((Number(Cant) + 1).toString())
    }

    const subsCant = () => {

        if (Number(Cant) > 1) {
            return setCant((Number(Cant) - 1).toString())
        }

        setCant("1")

    }

    return (

        <tr>
            <th scope='row'>{idx + 1}</th>
            <th>{prod}</th>
            <th className='text-center'>{parseFloat(price).toFixed(2)}</th>
            <th className='d-flex align-items-center justify-content-center'>
                <Button size='sm' variant='secondary' className='text-white' onClick={() => subsCant()}><b>-</b></Button>
                {/* <div style={{ marginLeft: '10px', marginRight: '10px' }}>{Cant}</div> */}
                <input
                    type="text"
                    className='text-center m-0'
                    onChange={e => setCant(e.target.value)}
                    value={Cant}
                    style={{ width: '2rem' }}
                />
                <Button size='sm' variant='secondary' className='text-white' onClick={() => addCant()}><b>+</b></Button>
            </th>
            <th className='text-center'>{parseFloat(total).toFixed(2)}</th>
        </tr>

    )
}

export default function Car() {

    const nav = useNavigate();
    const [Items, setItems] = useState([])
    const [SubTotal, setSubTotal] = useState(0)
    const [TotalF, setTotalF] = useState(0)
    const [NI, setNI] = useState(0)
    const [Loading, setLoading] = useState(false)

    const getCarItems = async () => {
        setLoading(true)
        await getItemsCarService()
            .then(items => {
                setItems([...items])
                setNI(items.length)
                calculate(items)
            })
            .catch(err => console.log(err.message))
        setLoading(false)
    }

    const calculate = (itms) => {
        let subtotal = 0;
        let total = 0;
        // itms.map((item, i) => {
        //     subtotal = subtotal + item.precio_prod;
        // })
        itms.forEach((value) => {
            subtotal = subtotal + value.total;
        })
        total = subtotal * 1.18;
        setSubTotal(parseFloat(subtotal).toFixed(2))
        setTotalF(parseFloat(total).toFixed(2))
    }

    const goTo = () => {
        if (NI === 0) {
            return toast.error('No tienes items en el carrito')
        }
        nav('/pedido', { state: { st: SubTotal, tf: TotalF } })
    }

    useEffect(() => {
        if (isLogged()) {
            getCarItems()
        }
    }, [])

    return (
        <>
            {Loading &&
                <div className="text-center">
                    <Spinner animation="border" variant="info" />
                </div>}
            {
                isLogged() ?
                    <main className="container">
                        <main className="container p-3">
                            <h1 className='pb-3'>MI CARRITO</h1>
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    {
                                        NI === 0 ?
                                            <div style={{ height: '100%' }} className='d-flex align-items-center justify-content-center'>
                                                <h6 className='text-muted text-center'>
                                                    Aún no hay productos por aquí...
                                                    <Link className='nav-link' to='/productos'>¿Agregar algunos?</Link>
                                                </h6>
                                            </div>
                                            :
                                            <>
                                                <table className="table table-success table-striped">
                                                    <thead>
                                                        <tr>
                                                            <th scope='col' className='text-center'>#</th>
                                                            <th scope='col' className='text-center'>Producto</th>
                                                            <th scope='col' className='text-center'>Precio</th>
                                                            <th scope='col' className='text-center'>Cantidad</th>
                                                            <th scope='col' className='text-center'>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            Items.map((item, idx) =>
                                                                <InfoProduct
                                                                    idx={idx}
                                                                    key={idx}
                                                                    prod={item.nom_prod}
                                                                    price={item.precio_prod}
                                                                    cant={item.cantidad}
                                                                    total={item.total}
                                                                />)
                                                        }
                                                    </tbody>
                                                </table>
                                                <Link
                                                    to={'/productos'}
                                                    className='nav-link text-center text-muted'
                                                >
                                                    ¿ Seguir Comprando ?
                                                </Link>
                                            </>
                                    }
                                </div>
                                <div className="col-12 col-lg-3 ">
                                    <p>
                                        ¿Tienes un cupon o vales de descuento?<br />
                                    </p>
                                    <input type="text" name="address1" maxLength="100" placeholder="Ejem: Aor-892" />
                                    <br />
                                    <div className="container px-4"> <br />
                                        <div className="row gx-5">  <br />
                                            <button type="button" className="btn btn-light bg-info text-white">Aplicar</button>
                                            <div className="col-lg-3 col-lg-3 ">
                                                <br />
                                                <p>
                                                    Subtotal: {SubTotal}
                                                </p>
                                                <p className="text-danger">Descuentos:</p>
                                                <p>total: {TotalF}</p>
                                                <br />
                                            </div>
                                            <button type="button" className="btn btn-light bg-info text-white" onClick={goTo}>
                                                Continuar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </main>
                    :
                    <Navigate to={'/auth/login'} state={{ from: '/carrito' }} />
            }
        </>
    )
}
