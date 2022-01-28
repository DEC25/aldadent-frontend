import React, { useEffect, useState } from 'react'
import { CardProduct } from './cardProduct'
import { getProductsService } from '../services/products.service'

export default function ProductList() {

    const [Products, setProducts] = useState([])

    const getProducts = async () => {
        await getProductsService()
            .then(prods => setProducts([...prods]))
            .catch(err => { console.log(err.message) })

    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center  text-shadow h1">PRODUCTOS DENTALES</h2>
                <br />
                <br />
            </div>
            <div className="row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-4">
                {
                    Products.map((prod, idx) => <CardProduct key={idx} img={prod.img_prod} id={prod.id_prod} />)
                }
            </div>
        </div>
    )
}
