import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import aldaDent from '../../image/aldadent.png'

export default function Login() {
    
    const navigate = useNavigate()
    const path = useLocation();

    useEffect(() => {

        if (path.pathname === '/auth'){
            navigate('/auth/login', { replace: true })
        }
    }, [navigate, path])

    return (
        <div className="container w-75  mt-5 rounded shadow">
            <div className="row align-items-stretch">
                <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 "></div>
                <div className="col bg-white p-5 rounded-end">
                    <div className="text-end">
                        <img src={aldaDent} width="70px" alt="" />
                    </div>
                    <h2 className="fw-bold text-center py-5">Bienvenido</h2>
                    <Outlet />     
                </div>
            </div>
        </div>
    )
}
