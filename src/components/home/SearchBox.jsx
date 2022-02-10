import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { getProductsSearch } from '../../services/products.service'

export default function SearchBox({ Placeholder }) {

    const goTo = useNavigate()
    const [Products, setProducts] = useState([])

    const searchProduct = e => {

        if (!e.target.value) {
            return setProducts([])
        }
        getProductsSearch(e.target.value)
            .then(({ success, results }) => {
                if (!success) {
                    return toast.error('No se pudo buscar el producto')
                }

                setProducts([...results])
            })
            .catch(err => console.log(err.message))
    }

    const redirectTo = (id) => {
        setProducts([])
        goTo(`/productos/${id}`)
    }


    return (
        <div className='search-box'>
            <input
                id='search-box__input'
                type={'search'}
                className={'form-control me-2'}
                placeholder={Placeholder}
                onChange={searchProduct}
            />
            <ul id='search-box__result' className='list-group'>
                {
                    Products.map((item, idx) => {
                        return (
                            <button
                                key={idx}
                                type='button'
                                className='list-group-item list-group-item-action'
                                onClick={() => redirectTo(item.id)}
                            >
                                <div>
                                    {item.name}
                                </div>
                            </button>
                        )
                    })
                }
            </ul>
        </div>
    )
}