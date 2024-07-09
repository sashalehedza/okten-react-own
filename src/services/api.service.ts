import axios from 'axios'

let axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

axiosInstance.interceptors.request.use((request) => {
  request.headers.set('Content-Type', 'application/json')
  return request
})

let getAllUsers = async (): Promise<any> => {
  return await axiosInstance
    .get('/users', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

let getAllPosts = async (): Promise<any> => {
  return await axiosInstance
    .get('/posts', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

let getAllComments = async (): Promise<any> => {
  return await axiosInstance
    .get('/comments', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

export { getAllUsers, getAllPosts, getAllComments }
