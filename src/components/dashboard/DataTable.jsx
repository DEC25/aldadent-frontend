import React from 'react';

const RowTable = ({ data }) => {
    return (
        <>
            {
                data.map((r, _) => {
                    return (
                        <tr>
                            <td>{r.id_venta}</td>
                            <td>{r.client}</td>
                            <td>{`${r.day}/${r.month}/${r.year}`}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default function DataTable({ title, headers, data }) {

    return (
        <container >
            <br />
            <br />
            <br /><br />
            <div class="container">
                <div class="card">
                    <div class="card-header">
                        {title}
                    </div>
                    <div class="card-body">
                        <button id="btnExportar" class="btn btn-success">
                            <i class="fas fa-file-excel"></i> Exportar datos a Excel
                        </button>

                        <table id="tabla" class="table table-border table-hover">
                            <thead>
                                <tr>
                                    {
                                        headers ?
                                            headers.map((h, _) => <th>{h}</th>) :
                                            Object.keys(data[0]).map((v, _) => <th>{v}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <RowTable data={data} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </container>
    );
}
