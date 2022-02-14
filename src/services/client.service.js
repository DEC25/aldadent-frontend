import axios from 'axios'

const API_URL = 'http://localhost:3001/api/client'

export const getClient = async () => {
    const { data } = await axios.get(API_URL, {
        headers: { authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}` }
    })
    return data
}

export const updateClientService = async cli => {
    const { data } = await axios.patch(API_URL, cli, {
        headers: { authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}` }
    })
    return data
}

export const postAddress = async addressData => {
    const { data } = await axios.post(`${API_URL}/address`, addressData, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const getAddressesService = async () => {
    const { data } = await axios.get(`${API_URL}/address`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const updateAddressService = async (Address) => {
    const { data } = await axios.patch(`${API_URL}/address/${Address.id}`, Address, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })

    return data
}

export const deleteAddressService = async id => {
    const { data } = await axios.delete(`${API_URL}/address/${id}`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}