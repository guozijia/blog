import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { getToken } from '../utils/setAuthToken'


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
    let token = getToken()
    if(token){
        config.headers.Authorization = `Bearer ${token}`
        return config;
    }
    return config
},err=>{
    return Promise.reject(err)
}
)

export default instance