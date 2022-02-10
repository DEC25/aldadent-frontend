import axios from 'axios'

const API_URL = 'http://localhost:3001/api/products'

export const getProductsService = async () => {
    const { data } = await axios.get(API_URL, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const getProductService = async id => {
    const { data } = await axios.get(`${API_URL}/${id}`)
    return data
}

export const updateProductService = async (id, dataProduct) => {
    const { data } = await axios.patch(`${API_URL}/${id}`, dataProduct)
    return data
}

export const postProductService = async dataProduct => {
    const { data } = await axios.post(API_URL, dataProduct)
    return data
}

export const getProductsSearch = async product => {
    const { data } = await axios.get(`${API_URL}/search?name=${product.toLowerCase().replace(' ', '%20')}`)
    return data
}