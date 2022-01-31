import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { isLogged } from '../../services/auth.service'
import { getItemsCarService } from '../../services/car.service'
import { toast } from 'react-hot-toast'

const InfoProduct = ({ idx, prod, price, cant, total }) => {
    return (

        <tr>
            <th scope='row'>{idx + 1}</th>
            <th>{prod}</th>
            <th>{parseFloat(price).toFixed(2)}</th>
            <th>{cant}</th>
            <th>{parseFloat(total).toFixed(2)}</th>
        </tr>

        // <>
        //     <div className="col-12 col-lg-3 bg-light">
        //         <p>
        //             {prod}
        //         </p>
        //     </div>
        //     <div className="col-12 col-lg-3 bg-light">
        //         <p>
        //             {price}
        //         </p>
        //     </div>
        //     <div className="col-12 col-lg-3 bg-light">
        //         <p>
        //             <button>-</button>
        //             <input type="number" value={cant} style={{ display: 'inline-flex' }} />
        //             <button>+</button>
        //         </p>
        //     </div>
        //     <div className="col-12 col-lg-3 bg-light">
        //         <p>
        //             {total}
        //         </p>
        //     </div>
        // </>
    )
}

export default function Car() {

    const nav = useNavigate();
    const [Items, setItems] = useState([])
    const [SubTotal, setSubTotal] = useState(0)
    const [TotalF, setTotalF] = useState(0)
    const [NI, setNI] = useState(0)

    const getCarItems = async () => {
        await getItemsCarService()
            .then(items => {
                setItems([...items])
                setNI(items.length)
                calculate(items)
            })
            .catch(err => console.log(err.message))
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
        console.log(total, subtotal)
    }

    const goTo = () => {
        if (NI === 0){
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
            {
                isLogged() ?
                    <main className="container">
                        <main className="container">
                            <h1>MI CARRITO</h1>
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <table className="table table-success table-striped">
                                        <thead>
                                            <tr>
                                                <th scope='col'>#</th>
                                                <th scope='col'>Producto</th>
                                                <th scope='col'>Precio</th>
                                                <th scope='col'>Cantidad</th>
                                                <th scope='col'>Total</th>
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
                                        {/* {CarItems.map((item, idx) =>
                                <InfoProduct
                                    prod={item.nom_prod}
                                    price={item.precio_prod}
                                    cant={item.cantidad}
                                    total={item.total}
                                />)} */}
                                    </table>
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
                                                <button type="button" className="btn btn-info text-white" onClick={goTo}>
                                                    {/* <a href="Yarasca.html"> */}
                                                    Continuar
                                                    {/* </a> */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </main>
                    :
                    <Navigate to={'/auth/login'} />
            }
        </>
    )
}
