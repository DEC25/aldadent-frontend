import axios from 'axios'

const API_URL = 'http://localhost:3001/api/client/address'

export const postAddress = async addressData => {
    const { data } = await axios.post(API_URL, addressData, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}