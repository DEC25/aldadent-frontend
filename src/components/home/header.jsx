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
        <div className=" bg-info">
            <ul className="nav container">
                <div className="col-8 ">
                    <li className="nav-item">
                        <Link className="nav-link h5" aria-current="page" to={'/'}><img src={logo} alt='' className="border border-secondary rounded-circle" style={{ width: "8%" }} /> <strong>&nbsp; ALDA DENT</strong>  </Link>
                    </li>

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
        </div>

    )
}
