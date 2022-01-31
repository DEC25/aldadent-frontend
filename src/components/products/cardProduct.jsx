import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { addItemCarService } from '../../services/car.service'
import { isLogged } from '../../services/auth.service'

export const CardProduct = ({ id, img }) => {

    const navigate = useNavigate()

    const [Cantidad, setCantidad] = useState('')

    const addToCar = async (e) => {
        e.preventDefault()

        if (!isLogged()){
            return toast('Debes iniciar sesión', { icon: '🔒' })
        }

        if (Cantidad === ''){
            return toast.error('Elige una cantidad')
        }
        addItemCarService({idProd: id, cantidad: Cantidad})
            .then(({ success, msg }) => {
                if (!success) {
                    return toast.error(msg)
                }

                toast.success(msg)
            })
            .catch(err => { toast.error('Ocurrió un problema inesperado!'); console.log(err.message) })

    }

    return (
        <div className="col-sm">
            <img 
                src={img} 
                alt="" 
                className="w-100 amiibo"
                onClick={e => navigate(`/productos/${id}`)}
            />
            <div className="text-center">
                <span className="amiibo-name h5 p-2">
                    <br />
                    <div className="col-12 text-center">
                        <input 
                            type="number" 
                            className='text-center' 
                            placeholder='Cantidad'
                            min={1}
                            value={Cantidad} 
                            onChange={e => setCantidad(e.target.valueAsNumber)}
                        />
                        <br />
                        <br />
                        <button type="button" className="btn btn-outline-info btn-lg" onClick={addToCar}>
                            Comprar
                        </button>
                    </div>
                </span>
            </div>
        </div>
    )
}
