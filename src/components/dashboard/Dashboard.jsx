import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDashboardAccess } from '../../services/dashboard.service';
import { toast } from 'react-hot-toast'

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
    })

    return (
        <>
            {
                Success &&
                <>
                    <p class=" h1 text-center ">DashBoard de nuestra empresa</p>
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
                    </div>
                </>
            }

        </>
    );
}
