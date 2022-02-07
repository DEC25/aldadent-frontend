import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getSalesCompareDash } from '../../services/dashboard.service';
import BarChart from './BarChart';
import DataTable from './DataTable';

export default function SaleCompare() {

    const [Sales, setSales] = useState([]);
    const [MonthSales, setMonthSales] = useState([]);
    const [YearSales, setYearSales] = useState([]);
    const [Chart, setChart] = useState({});

    useEffect(() => {
        getSalesCompareDash()
            .then(s => {
                if (!s.success) {
                    return toast.error('Algo fue mal... (SC)')
                }

                setSales([...s.sales])
                setMonthSales([...s.monthSales])
                setYearSales([...s.yearSales])
                setChart(s.dataChart)
            })
            .catch()
    }, [])

    return (
        <>
            <p class=" h1 text-center ">Ventas de cada mes</p>
            <br /><br /><br />
            <section class="bg-grey">
                <div class="container" >
                    <div class="card rounded-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h6>Cantidad Total del Año</h6>
                                    <h3>{YearSales.length}</h3>
                                </div>
                                <div class="col-lg-6">
                                    <h6>Cantitad Total del Mes</h6>
                                    <h3>{MonthSales.length}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section class="bg-grey">
                <div class="container" >
                    <div class="card rounded-0">
                        <div class="card-header">
                            Graficos de las ventas de cada mes
                        </div>
                        <div class="card-body">
                            <BarChart
                                title={'VENTAS POR MES'}
                                labeltext={'Cantidad Vendida'}
                                labels={Chart.l}
                                data={Chart.d}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <br />

            <DataTable
                title={'Reporte de Ventas'}
                headers={['ID', 'Cliente', 'Fecha']}
                data={Sales}
            />
            {/* <container >
                <br />
                <br />
                <br /><br />
                <div class="container">
                    <div class="card">
                        <div class="card-header">
                            Reporte
                        </div>
                        <div class="card-body">
                            <button id="btnExportar" class="btn btn-success">
                                <i class="fas fa-file-excel"></i> Exportar datos a Excel
                            </button>

                            <table id="tabla" class="table table-border table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr><tr>
                                        <td>9</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Freddy</td>
                                        <td>Hilari</td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </container> */}
        </>
    );
}
