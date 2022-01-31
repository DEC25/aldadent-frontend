import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLogged, loginService } from '../../services/auth.service'
import { Link } from 'react-router-dom'
import aldaDent from '../../image/aldadent.png'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'

export default function LoginForm() {

    const navigate = useNavigate()
    const [Correo, setCorreo] = useState(null)
    const [Password, setPassword] = useState(null)
    const [DisableButton, setDisableButton] = useState(false)

    useEffect(() => {
        if (isLogged()){
            navigate('/', { replace: true })
        }
    })

    const sendForm = async (e) => {
        e.preventDefault()
        setDisableButton(true)
        if (!Correo || !Password) {
            setDisableButton(false)
            return toast.error('Rellene todos los campos', { duration: 1350, icon: '📋' })
        }

        loginService({ correo: Correo, password: Password })
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg, { icon: '🔒' })
                }

                navigate('/')
                toast.success(msg, { icon: '🔓' })
            })
            .catch(err => toast.error(err.message));

        // axios.post('http://192.168.5.11:3001/api/auth/login', {
        //     correo: Correo,
        //     password: Password
        // })
        //     .then(res => {
        //         if (!res.data.success) {
        //             return toast.error(res.data.msg, { duration: 1350 })
        //         }

        //         toast.success('Bienvenido', { duration: 1350 })
        //     })
        //     .catch(err => toast.error(err.message, { duration: 1350 }));

        setDisableButton(false)
    }

    return (
        <>
            <form action="#">
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" name="email" onChange={e => setCorreo(e.target.value)}></input>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="email" onChange={e => setPassword(e.target.value)} ></input>
                </div>
                <div className="mb-4 form-check">
                    <input type="checkbox" name="connected" className="form-check-input" />
                    <label htmlFor="connected" className="form-check-label">Mantenerme Conectado</label>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" disabled={DisableButton} onClick={sendForm}>Iniciar Sesión</button>
                </div>
                <div className="my-3">
                    <span>¿No tienes cuenta? <Link to={'/auth/signup'} >Registrate </Link></span><br />
                </div>
            </form>

            <div className="container w-100 my-5">
                <div className="row text-center">
                    <div className="col-12">Iniciar Sesión</div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-outline-primary w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-2 d-none d-md-block">
                                    <img src={aldaDent} width="32" alt="" />
                                </div>
                                <div className="col-12 col-md-10 text-center">
                                    Facebook
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-danger w-100 my-1">
                            <div className="row align-items-center">
                                <div className="col-2 d-none d-md-block">
                                    <img src={aldaDent} width="32" alt="" />
                                </div>
                                <div className="col-12 col-md-10 text-center">
                                    Google
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {/* <Toaster /> */}
        </>
    )
}
