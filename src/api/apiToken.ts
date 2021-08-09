import axios from 'axios'

const apiToken = axios.create({
  baseURL: "/"
})

apiToken.interceptors.request.use(
  (config) => {
    // Add authorization key to config object if it exist
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common.Authorization = `${token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default apiToken