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

export const getUserMonthDash = async (m,y) => {
    const { data } = await axios.get(`${API_URL}/users/date?m=${m}&y=${y}`)
    return data
}

export const getAllUsersDash = async () => {
    const { data } = await axios.get(`${API_URL}/users`)
    return data
    
}