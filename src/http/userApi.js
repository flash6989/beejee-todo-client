import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const login = async (login, password) => {
  try {
    const {data} = await $host.post('login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
  } catch(e) {
    console.log(e)
  }
}

export const check = async () => {
  try {
    const {data} = await $authHost.get('/checkauth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
  } catch(e) {
    console.log(e)
  }
}