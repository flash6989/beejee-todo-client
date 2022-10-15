import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const login = async (login, password) => {
  console.log(login, password)
  const {data} = await $host.post('login', {login, password})
  return jwt_decode(data.token)
}

export const check = async () => {
  const response = await $host.post('', {}) 
  return response
}