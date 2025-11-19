import axios from 'axios'

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  timeout: 10000
})

http.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API ERROR]', error)
    return Promise.reject(error)
  }
)

export default http

