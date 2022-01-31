import React, { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { isLogged, signupService } from '../../services/auth.service'

export default function Signup() {

    const navigate = useNavigate()
    const [Nombre, setNombre] = useState(null)
    const [DNI, setDNI] = useState(null)
    const [Telef, setTelef] = useState(null)
    const [Correo, setCorreo] = useState(null)
    const [Password, setPassword] = useState(null)
    const [PasswordV, setPasswordV] = useState(null)

    useEffect(() => {
        if (isLogged()){
            navigate('/', { replace: true })
        }
    }, [navigate])

    const sendForm = async (e) => {
        e.preventDefault()

        if (!Nombre || !DNI || !Telef || !Correo || !Password || !PasswordV) {
            return toast.error('Rellene todos los campos', { duration: 1350, icon: '📋' })
        }

        if (Password !== PasswordV) {
            return toast.error('Las contraseñas no coinciden', { duration: 1350, icon: '🕵' })
        }

        await signupService({
            nombre: Nombre,
            dni: DNI,
            telef: Telef,
            correo: Correo,
            password: Password
        })
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                toast.success(msg)
                navigate('/auth/login', { replace: true })
            })
            .catch(err => { console.error(err.message); toast.error('Ocurrió un problema inesperado') })
    }

    return (
        <>
            <form>
                <div className="mb-4">
                    <label htmlFor="text" className="form-label">Ingrese su Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="text"
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="text" className="form-label">Ingrese su DNI</label>
                    <input
                        type="text"
                        className="form-control"
                        name="text"
                        onChange={e => setDNI(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="text" className="form-label">Ingrese su Número Telefónico</label>
                    <input
                        type="text"
                        className="form-control"
                        name="text"
                        onChange={e => setTelef(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="form-label">Ingrese su Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={e => setCorreo(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Escriba una Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Repita la Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={e => setPasswordV(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={sendForm}
                    >
                        Registrarse
                    </button>
                </div>
            </form>

            <div className="container w-100 my-5">
                <div className="row text-center">
                </div>
                <div className="row ">
                    <div className="col-12 ">
                        <button className="btn btn-outline-primary w-50 items my-1">
                            <div className=" row align-items-center">
                                <Link to={'/auth/login'}>
                                    <div className="col-12 col-md-12 text-center ">
                                        Regresar
                                    </div>
                                </Link>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
