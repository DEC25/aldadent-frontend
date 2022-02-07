import axios from 'axios'

const API_URL = 'http://localhost:3001/api/dashboard'

export const getDataSales = async () => {
    const { data } = await axios.get(`${API_URL}/sales`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    });
    return data;
}

export const getDataDash = async () => {
    const { data } = await axios.get(`${API_URL}/amount`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const getUserMonthDash = async (m, y) => {
    const { data } = await axios.get(`${API_URL}/users/date?m=${m}&y=${y}`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const getAllUsersDash = async () => {
    const { data } = await axios.get(`${API_URL}/users`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data

}

export const getSalesCompareDash = async () => {
    const { data } = await axios.get(`${API_URL}/sales/compare`, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const getDashboardAccess = async () => {
    const { data } = await axios.post(API_URL, null, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}