import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { getProductService, postProductService, updateProductService } from '../../services/products.service'

export default function UpdateProd() {

    const { id } = useParams()

    const [Name, setName] = useState(null)
    const [Descrip, setDescrip] = useState(null)
    const [Image, setImage] = useState(null)
    const [UNIMED, setUNIMED] = useState(null)
    const [Price, setPrice] = useState(null)
    const [Ctg, setCtg] = useState(null)

    const updateProduct = () => {
        updateProductService(id, {
            nombre: Name,
            descripcion: Descrip,
            imagen: `http://localhost:3001/api/products/image/${Image}`,
            unimed: UNIMED,
            precio: Price,
            idctg: Ctg
        })
            .then(({success, msg}) => {
                if (!success){
                    return toast.error(msg)
                }

                toast.success(msg)
            })
            .catch(err => {toast.error('Algo ocurrio'); console.error(err.message)})
    }

    const createProduct = () => {
        postProductService({
            nombre: Name,
            descripcion: Descrip,
            imagen: `http://localhost:3001/api/products/image/${Image}`,
            unimed: UNIMED,
            precio: Price,
            idctg: Ctg
        })
            .then(({ success, msg }) => {
                if (!success) return toast.error(msg)
                toast.success(msg)
                setName('')
                setDescrip('')
                setImage('')
                setUNIMED('')
                setPrice('')
                setCtg('')
                document.getElementById('nom').focus()

            })
            .catch(err => { toast.error('Algo fue mal'); console.error(err.message) })
    }

    useEffect(() => {
        if (id === '0') return
        getProductService(id)
            .then(prod => {
                setName(prod.nom_prod)
                setDescrip(prod.desc_prod)
                setImage(prod.img_prod)
                setUNIMED(prod.unimed_prod)
                setPrice(prod.precio_prod)
                setCtg(prod.id_ctg)
            })
    }, [])

    return (
        <div>
            <div className="">
                <input type="text" value={Name} placeholder='Nombre' id='nom' onChange={e => setName(e.target.value)} />
            </div>
            <div className="">
                <textarea cols='150' rows="10" value={Descrip} placeholder='Descripcion' onChange={e => setDescrip(e.target.value)}/>
            </div>
            <div className="">
                <input type="text" value={Image} placeholder='Imagen' onChange={e => setImage(e.target.value)} />
            </div>
            <div className="">
                <input type="text" value={UNIMED} placeholder='Unidad de medida' onChange={e => setUNIMED(e.target.value)} />
            </div>
            <div className="">
                <input type="text" value={Price} placeholder='Precio' onChange={e => setPrice(e.target.value)} />
            </div>
            <div className="">
                <input type="text" value={Ctg} placeholder='Categoria ID' onChange={e => setCtg(e.target.value)} />
            </div>
            <button onClick={ id === '0' ? createProduct : updateProduct}>{ id === '0' ? 'Crear' : 'Actualizar' }</button>
        </div>
    )
}
