import React, { useEffect, useState } from 'react'
import { CardProduct } from './cardProduct'
import { getProductsService } from '../../services/products.service'
import { Spinner } from 'react-bootstrap'

export default function ProductList() {

    const [Products, setProducts] = useState([])
    const [Loading, setLoading] = useState(true)

    const getProducts = async () => {
        await getProductsService()
            .then(prods => { setProducts([...prods]); console.log(prods) } )
            .catch(err => { console.log(err.message) })

        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center text-shadow h1 p-4">PRODUCTOS DENTALES</h2>
                <br />
                <br />
            </div>
            {
                Loading
                    ?
                    <div className="text-center">
                        <Spinner animation="border" variant="info" />
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-2 row-cols-sm-2 row-cols-md-4">
                        {
                            Products.map((prod, idx) => 
                            <CardProduct
                                key={idx}
                                img={prod.img_prod}
                                id={prod.id_prod}
                                added={ prod.en_carrito ? true : false }
                            />)
                        }
                    </div>
            }
        </div>
    )
}
