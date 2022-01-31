import React, { useEffect, useState } from 'react';
import BarChart from './BarChart'
import { getAllUsersDash, getUserMonthDash } from '../../services/dashboard.service'
import { toast } from 'react-hot-toast'

const UserTotalMes = () => {

    const [Cant, setCant] = useState('');

    useEffect(() => {
        const d = new Date()
        getUserMonthDash(d.getMonth() + 1, d.getFullYear())
            .then(({ success, data }) => {
                if (!success) {
                    return toast.error('Algo fue mal')
                }

                setCant(data.length.toString())
            })
            .catch()
    }, [])

    return (
        <section class="bg-grey">
            <div class="container" >
                <div class="card rounded-0">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <h6>Cantidad Total del Mes</h6>
                                <h3>{Cant}</h3>
                            </div>
                            <div class="col-lg-6">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ChartUsersMonth = () => {

    const [Data, setData] = useState([]);
    const [Months, setMonths] = useState([]);
    const [DataMonth, setDataMonth] = useState([]);

    useEffect(() => {
        getAllUsersDash()
            .then(({success, months}) => {
                if (!success){
                    return toast.error('No se pudo obtener las estadisticas')
                }

                setData([...months])
                setMonths([...months.map((v,i) => `${v.month}/${v.year}`)])
                setDataMonth([...months.map((v,i) => v.cant)])
            })
            .catch()

    }, [])



    return (
        <section class="bg-grey">
                <div class="container" >
                    <div class="card rounded-0">
                        <div class="card-header">
                            Graficos de los registrados del mes
                        </div>
                        <div class="card-body">
                            <BarChart 
                                title={'TABLA DE USUARIOS'}
                                labeltext={'CANTIDAD DE RESGISTROS'}
                                labels={Months}
                                data={DataMonth}
                            />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default function DashUsers() {

    return (
        <>
            <p class=" h1 text-center ">Usuarios Registrados</p>
            <br /><br /><br />
            <UserTotalMes />
            <br />
            <ChartUsersMonth />
        </>
    );
}
