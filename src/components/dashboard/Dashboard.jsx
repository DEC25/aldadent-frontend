import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
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
    );
}
