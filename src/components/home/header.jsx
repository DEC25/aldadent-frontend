import React from 'react'
import logo from '../../image/101604286_1134460936932256_8747082428838838272_n.png'
// import pedido from '../image/pedidos.png'
import carrito from '../../image/Carrito.png'
import login from '../../image/login.png'
import logout from '../../image/sesion.png'
import { Link, useNavigate } from 'react-router-dom'
import { isLogged } from '../../services/auth.service'
import toast from 'react-hot-toast'
import list from '../../image/pedidos (1).png'
import SearchBox from './SearchBox'
import { Navbar, Container, Nav, NavDropdown, NavLink } from 'react-bootstrap'
import { getProductsSearch } from '../../services/products.service'

export default function Header() {

    const navigate = useNavigate()
    const logged = isLogged()


    const logOut = () => {
        if (isLogged()) {
            window.sessionStorage.removeItem('tkn_ad')
            navigate('/')
            return toast('Hasta Luego', { icon: '👋' })
        }

        return toast('No has iniciado sesion', { icon: '👤' })
    }

    return (
        <>
            <Navbar bg='info' expand="lg">
                <Container>
                    <Navbar.Brand id='navbar-brand'>
                        <Link className='nav-link' to={'/'}>
                            <img src={logo} alt="" className='rounded-circle nav-logo' />
                            <b className='d-none d-lg-inline'>ALDA DENT</b>
                        </Link>
                    </Navbar.Brand>
                    <SearchBox
                        Placeholder='¿Que producto estás buscando?'
                    />
                    <Nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Link>
                                <Link to={'/productos'} className='nav-link'>
                                    Productos
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/carrito'} className='nav-link'>
                                    Carrito
                                </Link>
                            </Nav.Link>
                            {
                                logged ?
                                    <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={() => navigate('/pedidos')} >Mis Pedidos</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Configuración</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logOut} >Cerrar Sesión</NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    <Nav.Link href='/auth/login'> Iniciar Sesion </Nav.Link>
                            }
                        </Navbar.Collapse>
                    </Nav>
                </Container>
            </Navbar>

            {/* Esto es una prueba  */}

            {/* <div className=" bg-info">
                <ul className="nav container">
                    <div className="col-4 ">
                        <li className="nav-item">
                            <Link
                                className="nav-link h5"
                                aria-current="page"
                                to={'/'}
                            >
                                <img
                                    src={logo}
                                    alt=''
                                    className="border border-secondary rounded-circle"
                                    style={{ width: "8%" }}
                                />
                                <strong>&nbsp; ALDA DENT</strong>
                            </Link>
                        </li>

                    </div>
                    <div className='col-4'>
                        <SearchBox
                            Placeholder={'Busca un producto...'}
                            OnChange={(e) => console.log(e.target.value)}
                            ItemsResult={['Producto 1', 'Producto 2', 'Producto 3']}
                        />
                    </div>
                    <div className="col-4">
                        <div className="d-flex  bd-highlight">
                            <li className="nav-item  bd-highlight text-center">
                                <Link className="nav-link my-2" to={'/pedidos'}><img src={list} className="border border-dark rounded-circle rounded float-end" alt='' style={{ width: '70%' }} /></Link>
                            </li>
                            <li className="nav-item  bd-highlight text-center">
                                <Link className="nav-link my-2" to={'/carrito'}><img src={carrito} className="border border-dark rounded-circle rounded float-end" alt='' style={{ width: '70%' }} /></Link>
                            </li>
                            {!logged ?
                                <li className="nav-item bd-highlight text-center">
                                    <Link className="nav-link my-2 " to={'/auth/login'}><img src={login} className="border border-secondary rounded-circle" alt='' style={{ width: '30%' }} /></Link>
                                </li>
                                :

                                <li className="nav-item  bd-highlight text-center">
                                    <div className="nav-link my-2"  >
                                        <img src={logout} onClick={logOut} className="border border-dark rounded-circle rounded float-start" alt='' style={{ width: '70%', cursor: 'pointer' }} />
                                    </div>
                                </li>

                            }
                        </div>
                    </div>
                </ul>
            </div> */}
        </>
    )
}
