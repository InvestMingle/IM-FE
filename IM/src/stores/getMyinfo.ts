import axios from "axios";


const token = localStorage.getItem('accessToken');
export const getInfo = axios.get('https://stock.bulbtalk.com/myinfo/', 
    { headers : 
        {
            Authorization: `Bearer ${token}`
        }
    }
).then((response)=>{
    return response.data
})