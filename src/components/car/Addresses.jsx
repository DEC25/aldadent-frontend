import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { postAddress } from '../../services/client.service'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { postSale } from '../../services/sales.service'
import { getItemsCarService } from '../../services/car.service'

export default function Addresses(props) {

    const { state } = useLocation()

    const nav = useNavigate()

    const [Direcc, setDirecc] = useState('')
    const [Depart, setDepart] = useState('')
    const [NI, setNI] = useState(0)

    const createAddress = () => {
        postAddress({
            direccion: Direcc,
            departamento: Depart,
            proposito: ''
        })
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                toast.success('Direccion Creada Correctamente')
            })
            .catch(err => toast.error('Algo salio mal'))
    }

    const createSale = () => {

        if (NI === 0) {
            return toast.error('No tienes items en el carrito')
        }

        if (!state){
            return toast.error('Primero debes pasar por la pagina del carrito')
        }

        postSale({
            igv: state.tf - state.st,
            total: state.tf
        })
            .then(res => {
                if (!res.success){
                    return toast.error(res.msg)
                }

                toast.success(res.msg)
                nav(`/pedidos/${res.id}`, { replace: true })
            })
            .catch()
    }

    useEffect(() => {
        if (!state){
            getItemsCarService()
            .then(items => {
                setNI(items.length)
            })
            .catch()
            return
        }

        setNI(state.ni)

    }, [])

    return (
        <>
            <div className="container">
                <h4>Direccion de Envio</h4> <br />
            </div>

            <main className="container ">
                <div className="row">
                    <div className="col-12 col-lg-12 ">
                        <div className="row">
                            <div className="col-12 col-lg-8 ">
                                <article className="card h-100 bg-light" >
                                    <div className="card body p-3">
                                        <div className="d-flex ">
                                            <div className="ps-Lg-3">
                                                <br />
                                                <h6 className="m-0 h6">Elegir una direccion de entrega</h6>
                                                <p className="m-0 h6"></p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <br />
                                            <label>Dirección <small>(Obligatorio)</small></label><br />
                                            <input type="text" name="address1" maxLength="100" value={Direcc} onChange={e => setDirecc(e.target.value)} placeholder="Ejem: Avenida Cutervo 734" />
                                        </div>
                                        <div className="col-100">
                                            <div className="form-group">
                                                <br /><label>Departamento <small>(Obligatorio)</small></label>
                                                <div className="custom-select no-margin">
                                                    <select className="drop_down" name="state" id="state" onChange={e => setDepart(e.currentTarget.options[e.currentTarget.options.selectedIndex].text)}>
                                                        <option value="00">Seleccione</option>
                                                        <option selected value="01">AMAZONAS</option>
                                                        <option value="02">ANCASH</option>
                                                        <option value="03">APURIMAC</option>
                                                        <option value="04">AREQUIPA</option>
                                                        <option value="05">AYACUCHO</option>
                                                        <option value="06">CAJAMARCA</option>
                                                        <option value="07">CALLAO</option>
                                                        <option value="08">CUSCO</option>
                                                        <option value="09">HUANCAVELICA</option>
                                                        <option value="10">HUANUCO</option>
                                                        <option value="11">ICA</option>
                                                        <option value="12">JUNIN</option>
                                                        <option value="13">LA LIBERTAD</option>
                                                        <option value="14">LAMBAYEQUE</option>
                                                        <option value="15">LIMA</option>
                                                        <option value="16">LORETO</option>
                                                        <option value="17">MADRE DE DIOS</option>
                                                        <option value="18">MOQUEGUA</option>
                                                        <option value="19">PASCO</option>
                                                        <option value="20">PIURA</option>
                                                        <option value="21">PUNO</option>
                                                        <option value="22">SAN MARTIN</option>
                                                        <option value="23">TACNA</option>
                                                        <option value="24">TUMBES</option>
                                                        <option value="25">UCAYALI</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-50">
                                            <div className="form-group">
                                                <label>Teléfono fijo</label>
                                                <br /><input type="text" id="phone1" name="phone1" maxLength="9" placeholder="Ejem: 215978" />
                                            </div>
                                            <br />
                                            <div className="col-50">
                                                <div className="form-group">
                                                    <label>Celular</label>
                                                    <br />
                                                    <input type="text" id="phone1" name="phone1" maxLength="9" placeholder="Ejem: 974227814" />
                                                </div>
                                            </div>
                                            <br />
                                            <div className="d-grid gap-2 col-6 mx-auto">
                                                <button type="button" onClick={createAddress} className="btn btn-info">Crear Direccion</button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-12 col-lg-4" >
                                <article className="card h-100 bg-light">
                                    <div className="card body p-3">
                                        <div className="d-flex">

                                            <div className="d-grid gap-2 col-6 mx-auto">
                                                <button type="button" className="btn btn-info" onClick={createSale}>Finalizar Compra</button>
                                            </div>
                                        </div>
                                        <div>
                                            <br /><p className="h6">Subtotal: {state?.st ?? 0}</p>
                                            <p className="fs-6">Envio</p>
                                            <br /><p className="h6">TOTAL: {state?.tf ?? 0}</p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
