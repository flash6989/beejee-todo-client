import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const fetchTasks = async (limit = 3, page = 1, filter = {filterName: 'text', direction: 'ASC'}) => {
  console.log(limit, page, filter)
  const {data} = await $host.get(`/fetchtasks`, {
    params: {
      filter, page, limit
    }
  })
  return data
}

export const changeTask = async (task) => {
  try {
    const {data} = await $authHost.post('/changetask', task)
    console.log(data)
    return data
  } catch(e) {
    alert(e.response.data.message)
  }
}

export const addTask = async (task) => {
  const {data} = await $host.post('/createtask', task)
  return data
}