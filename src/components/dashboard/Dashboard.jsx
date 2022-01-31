import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import { useState } from 'react';
import { useEffect } from 'react';
import { getDataDash, getDataSales } from '../../services/dashboard.service';

export default function Dashboard() {

    const [Products, setProducts] = useState([])
    const [Cantidad, setCantidad] = useState([])
    const [Amount, setAmount] = useState(0)
    const [Entry, setEntry] = useState(0)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'PRODUCTOS VENDIDOS EN EL MES',
            },
        },
    };

    const labels = Products

    const data = {
        labels,
        datasets: [
            {
                label: 'Cantidad Vendida',
                data: Cantidad,
                backgroundColor: 'blue'//rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    // const exportTable = () => {
    //     const $btnExportar = document.querySelector("#btnExportar"),
    //         $tabla = document.querySelector("#tabla");

    //     $btnExportar.addEventListener("click", function () {
    //         let tableExport = new TableExport($tabla, {
    //             exportButtons: false, // No queremos botones
    //             filename: "Reporte de AldaDent", //Nombre del archivo de Excel
    //             sheetname: "Reporte de AldaDent", //Título de la hoja
    //         });
    //         let datos = tableExport.getExportData();
    //         let preferenciasDocumento = datos.tabla.xlsx;
    //         tableExport.export2file(preferenciasDocumento.data, preferenciasDocumento.mimeType, preferenciasDocumento.filename, preferenciasDocumento.fileExtension, preferenciasDocumento.merges, preferenciasDocumento.RTL, preferenciasDocumento.sheetname);
    //     });
    // }

    useEffect(() => {
        getDataSales()
            .then(res => {
                setProducts(res.map((p, idx) => p.producto))
                setCantidad(res.map((p, idx) => p.cantidad))
                console.log(res)
            })
            .catch()

        getDataDash()
            .then(d => {
                if (!d.success) {
                    return
                }

                setAmount(d.cantidad)
                setEntry(d.total)

            })

    }, [])

    return (

        // Aqui va el HTML, dentro de la funcion 'return( _aqui_ )'

        <>
            <p className=" h1 text-center mt-5">Productos vendidos del mes,cantidades,ingresos</p>
            <br /><br /><br />
            <section className="bg-grey">
                <div className="container" >
                    <div className="card rounded-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h6>Cantidad Total de Productos Vendidos</h6>
                                    <h3>{Amount}</h3>
                                </div>
                                <div className="col-lg-6">
                                    <h6>Ingresos Totales del mes</h6>
                                    <h3>{Entry.toFixed(2)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <br />
            <section className="bg-grey">
                <div className="container" >




                    <div className="card rounded-0">
                        <div className="card-header">
                            Graficos de las ventas del mes
                        </div>
                        <div className="card-body">
                            <Bar options={options} data={data} />
                        </div>
                    </div>

                    <button id="btnExportar" class="btn btn-success">
                        <a href="http://localhost:5000/export" className='text-decoration-none' style={{textDecoration: 'none', color: 'white'}}>
                            <i class="fas fa-file-excel"></i> Exportar datos a Excel
                        </a>
                    </button>
                </div>

            </section>
            <section hidden>
                <div class="container">
                    <div class="card">
                        <div class="card-header">
                            Reporte
                        </div>
                        <div class="card-body">

                            <table id="tabla" class="table table-border table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nombre</th>
                                        <th>Cantidad</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                    }
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
            </section>
        </>
    )
}
