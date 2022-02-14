import React from 'react'
import { Tab, Row, Col, Nav } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { isLogged } from '../../services/auth.service'
import AcercaDe from '../About/AcercaDe'
import AccountSecurity from './AccountSecurity'
import AccountInfo from './AcountInfo'

export default function AccountPage() {

    return (
        <>
            {
                isLogged() ?
                    < Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Row style={{ maxWidth: '100vw' }}>
                            <Col sm={2}>
                                <Nav variant='pills' className="flex-column" style={{ cursor: 'pointer' }}>
                                    <Nav.Item>
                                        <Nav.Link
                                            key={1}
                                            eventKey="first"
                                            style={{}}
                                        >
                                            👤 Informacion
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            key={2}
                                            eventKey="second"
                                        >
                                            🔐 Seguridad y Privacidad
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            key={3}
                                            eventKey="third"
                                        >
                                            ❓ Acerca de
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <AccountInfo />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <AccountSecurity />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <AcercaDe />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container >
                    :
                    <Navigate to={'/'} replace />
            }
        </>
    )
}
