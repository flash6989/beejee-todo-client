import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept': 'application/json'
  }
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = async config => {
  config.headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Accept': 'application/json',
  }
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}