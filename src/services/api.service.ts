import axios from 'axios'
import { IUser } from '../models/IUser'
import { IPost } from '../models/IPost'
import { IComment } from '../models/IComment'

let axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

axiosInstance.interceptors.request.use((request) => {
  request.headers.set('Content-Type', 'application/json')
  return request
})

let getAllUsers = async (): Promise<IUser[]> => {
  return await axiosInstance
    .get('/users', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

let getAllPosts = async (): Promise<IPost[]> => {
  return await axiosInstance
    .get('/posts', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

let getAllComments = async (): Promise<IComment[]> => {
  return await axiosInstance
    .get('/comments', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

export { getAllUsers, getAllPosts, getAllComments }
