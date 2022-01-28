import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductService } from '../services/products.service'

export default function ProductView() {

    const { id } = useParams()

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Image, setImage] = useState('')

    const getProduct = async () => {
        await getProductService(id)
            .then(prod => {
                console.log(prod)
                setName(prod.nom_prod)
                setDescription(prod.desc_prod)
                setImage(prod.img_prod)
            })
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={Image} alt='' className="" style={{ width: '100%' }} />
                </div>
                <br />
                <br />
                <br />
                <div className="col-6 text-center">
                    <br />
                    <br />
                    <h1>{Name}</h1>
                    <br />
                    <p>{Description}</p>
                    <br />
                    <button type="button" className="btn btn-outline-info btn-lg">
                        Agregar al carrito
                    </button>
                </div></div>
            <br />
            <br />
        </div>
    )
}
