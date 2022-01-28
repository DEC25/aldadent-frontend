import axios from 'axios'
const API_URl = 'http://localhost:3001/api/auth'

export const loginService = async creadential => {
    const { data } = await axios.post(`${API_URl}/login`, creadential)

    if (data.success) {
        window.sessionStorage.setItem('tkn_ad', data.token)
    }

    return data
}

export const signupService = async userData => {
    const { data } = await axios.post(`${API_URl}/signup`, userData)
    return data
}

export const isLogged = () => {
    const tkn = window.sessionStorage.getItem('tkn_ad')
    return tkn != null
}