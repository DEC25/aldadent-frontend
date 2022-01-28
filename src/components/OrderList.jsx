import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import logo from '../image/101604286_1134460936932256_8747082428838838272_n.png'
import { isLogged } from '../services/auth.service'
import { getSummarySales } from '../services/sales.service'
import { toast } from 'react-hot-toast' 

const OrderListItem = ({ id, date }) => {
    return (
        <tr>
            <th scope="row">{`N° ${id}`}</th>
            <td>{new Date(date).toLocaleDateString()}</td>
            <td><button type="button" className="btn "><Link to={`/pedidos/${id}`}> Ver detalle</Link></button> </td>
        </tr>
    )
}

export default function OrderList() {

    const [Orders, setOrders] = useState([])

    useEffect(() => {
        if (isLogged()){
            getSummarySales()
                .then(order => {
                    console.log(order)
                    if (!order.success){
                        return toast.error(order.msg)
                    }

                    setOrders(order.pedidos)
                })
                .catch(err => toast.error(err.message))
        }
    }, [])

    return (
        <>
            {
                isLogged() ?
                    <main className="container">
                        <h1>Mis pedidos</h1>
                        <main className="container">
                            <div className="row">
                                <div className="col-12 col-lg-9">
                                    <table className="table table-success table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">#PEDIDO</th>
                                                <th scope="col">Fecha de pedido</th>
                                                <th scope="col">Ver Detalle</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                Orders.map((order, idx) => 
                                                    <OrderListItem key={idx} id={order.id} date={order.fecha}/>
                                                )
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 col-lg-3 ">
                                    <p>
                                        Acá puedes ver todo acerca de tu pedido , Gracias por tu preferencia<br />
                                    </p>
                                    <img src={logo} alt='' className="border border-secondary rounded-circle" style={{ width: "60%" }} />
                                </div>
                            </div>
                        </main>
                    </main >
                    :
                    <Navigate to={'/auth/login'} />
            }
        </>
    )
}
