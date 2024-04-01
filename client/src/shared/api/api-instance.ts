import axios from 'axios'
import { API_URL } from './routes'

export const instance = axios.create({
  baseURL: 'http://' + API_URL,
})

export const authInstance = axios.create({
  // к запросу будет приуепляться cookies
  withCredentials: true,
  baseURL: 'http://' + API_URL,
})

authInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem('token')}`
  return config
})

// export const apiInstanceTg = axios.create({
//   baseURL: API_URL,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
//   },
// })
