import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Addresses() {
    return (
        <div>
            <div className="h6 text-muted mb-3">
                Direcciones Vinculadas
            </div>
            <p>Aquí podrás administrar las direcciones que estan vinculadas a tu cuenta.</p>
            <ListGroup variant="flush">
                <ListGroup.Item action>
                    <div className="h6 text-muted">Domicilio</div>
                    <div className="h6">Urb. Las Lomas, Lima</div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="h6 text-muted">Departamento</div>
                    <div className="h6">Calle Siempre viva, Springfield</div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
