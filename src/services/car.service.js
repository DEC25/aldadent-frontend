import axios from 'axios'

const API_URL = 'http://localhost:3001/api/car'

export const getItemsCarService = async () => {
    const { data } = await axios.get(API_URL, {
        headers: {
            'authorization': `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const addItemCarService = async ({idProd, cantidad}) => {
    const { data } = await axios.post(API_URL, { idProd, cantidad }, {
        headers: {
            'authorization': `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    });
    return data;
}