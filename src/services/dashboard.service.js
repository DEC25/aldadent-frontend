import axios from 'axios'

const API_URL = 'http://localhost:3001/api/dashboard'

export const getDataSales = async () => {
    const { data } = await axios.get(`${API_URL}/sales`);
    return data;
}

export const getDataDash = async () => {
    const { data } = await axios.get(`${API_URL}/amount`)
    return data
}