import React from 'react';

export default function DashUsers() {
    return (
        <>
            <p class=" h1 text-center ">Usuarios que se han registrado en el mes</p>
            <br /><br /><br />
            <section class="bg-grey">
                <div class="container" >
                    <div class="card rounded-0">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h6>Cantidad Total del mes</h6>
                                    <h3>aca va p dec</h3>
                                </div>
                                <div class="col-lg-6">
                                    <h6></h6>
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
                            Graficos de los registrados del mes
                        </div>
                        <div class="card-body">
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>

                </div>

            </section>
        </>
    );
}
