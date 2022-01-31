import React from 'react';

export default function SaleCompare() {
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
                                    <h6>Cantidad Total del año</h6>
                                    <h3>aca va p dec</h3>
                                </div>
                                <div class="col-lg-6">
                                    <h6>Meses registrados</h6>
                                    <h3></h3>
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
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                </div>
            </section>
            <br />

            <container >
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
            </container>
        </>
    );
}
