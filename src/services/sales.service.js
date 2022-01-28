import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'http://localhost:3001/api/sales'

export const getSummarySales = async () => {
    const { data } = await axios.get(API_URL, {
        headers: {
            'authorization': `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data;
}

export const getSale = async saleID => {
    const { data } = await axios.get(`${API_URL}/${saleID}`, {
        headers: {
            'authorization': `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })

    return data
}

export const postSale = async saleData => {
    const { data } = await axios.post(API_URL, saleData, {
        headers: {
            authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}`
        }
    })
    return data
}

export const downloadInvoice = async (id) => {
    axios(`http://localhost:3001/api/client/pedido/download/${id}`, {
        method: 'GET',
        responseType: 'blob', //Force to receive data in a Blob Format,,
        headers: { authorization: `bearer ${window.sessionStorage.getItem('tkn_ad')}` }
    })
        .then(response => {
            const file = new Blob([response.data]);
            const fileURL = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = fileURL;
            link.download = `F${Date.now()}.pdf`;
            document.body.append(link)
            link.click();
            link.remove();
            setTimeout(() => URL.revokeObjectURL(link.href), 7000);
        })
        .catch(error => {
            console.log(error);
            toast.error(error.message)
        });
}