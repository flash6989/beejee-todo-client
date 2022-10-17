import { $authHost, $host } from ".";

export const fetchTasks = async (limit = 3, page = 1, filter = {filterName: 'text', direction: 'ASC'}) => {
  const {data} = await $host.get(`/fetchtasks`, {
    params: {
      filter, page, limit
    }
  })
  return data
}
export const changeStatusTask = async (id, status) => {
  const {data} = await $authHost.post('/changestatustask', {id, status})
  return data
}

export const changeTask = async (task) => {
  try {
    const {data} = await $authHost.post('/changetask', task)
    return data
  } catch(e) {
    alert(e.response.data.message)
  }
}

export const addTask = async (task) => {
  const {data} = await $host.post('/createtask', task)
  return data
}