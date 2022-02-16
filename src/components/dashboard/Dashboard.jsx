import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getDashboardAccess } from '../../services/dashboard.service';
import { toast } from 'react-hot-toast'
import { Tab, Row, Col, Nav, Accordion } from 'react-bootstrap'

export default function Dashboard() {

    const nav = useNavigate()
    const [Success, setSuccess] = useState(false);

    useEffect(() => {
        getDashboardAccess()
            .then(a => {
                if (!a.success) {
                    return nav('/auth/login', { replace: true })
                }

                setSuccess(a.success)
            })
            .catch(e => {
                toast.error(e.message)
                nav('/', { replace: true })
            })
            console.log('aqui')
    }, [])

    return (
        <>
            {
                Success &&

                <Tab.Container id="left-tabs-example" defaultActiveKey={'first'}>
                    <Row>
                        <Col sm={2} className='bg-gray'>
                            <Nav variant="pills" className="flex-column" style={{ cursor: 'pointer' }}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Productos</Accordion.Header>
                                        <Accordion.Body>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" onClick={() => nav('/dashboard/products')}>Resumen</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" onClick={() => nav('/dashboard/productlist')}>Listado</Nav.Link>
                                            </Nav.Item>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Ventas</Accordion.Header>
                                        <Accordion.Body>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third" onClick={() => nav('/dashboard/sales')}>Resumen</Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                                <Nav.Link eventKey="forth">Listado</Nav.Link>
                                            </Nav.Item> */}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Usuarios</Accordion.Header>
                                        <Accordion.Body>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fith" onClick={() => nav('/dashboard/users')} >Resumen</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sixth">Listado</Nav.Link>
                                            </Nav.Item>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <Outlet />
                            </Tab.Content>
                        </Col>
                    </Row>
                    {/* <p class=" h1 text-center ">DashBoard de nuestra empresa</p>
                    <br /><br /><br />
                    <div class="d-grid gap-2">
                        <button class="btn btn-info" type="button">
                            <Link to={'/dashboard/products'}>
                                Productos - Cantidades - Ingresos
                            </Link>
                        </button>
                        <br /><br />
                        <button class="btn btn-info" type="button">
                            <Link to={'/dashboard/users'}>
                                Usuarios Registrados
                            </Link>
                        </button>
                        <br /><br />
                        <button class="btn btn-info" type="button">
                            <Link to={'/dashboard/sales'}>
                                Comparacion de Ventas
                            </Link>
                        </button>
                    </div> */}
                </Tab.Container>

            }

        </>
    );
}
