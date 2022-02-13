import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { getAddressesService } from '../../services/client.service'

export default function Addresses() {

    const [Addresses, setAddresses] = useState([])

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
    }, [])

    return (
        <div>
            <div className="h6 text-muted mb-3">
                Direcciones Vinculadas
            </div>
            <p>Aquí podrás administrar las direcciones que estan vinculadas a tu cuenta.</p>
            {
                Addresses.length > 0 ?
                <ListGroup variant="flush">
                    {
                        Addresses.map((A, _) => {
                            return (
                                <ListGroup.Item
                                    onClick={() => console.log(`Direccion ${A.id}`)}
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
