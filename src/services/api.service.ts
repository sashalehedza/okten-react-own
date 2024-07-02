import axios from 'axios'
import { IUser } from '../models/IUser'
import { IPost } from '../models/IPost'

let axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
})

axiosInstance.interceptors.request.use((request) => {
  request.headers.set('Content-Type', 'application/json')
  return request
})

const getAllUsers = async (): Promise<IUser[]> => {
  return await axiosInstance
    .get('/users')
    .then((res) => res.data)
    .then((data) => data.users)
}
let getPostsOfUserById = async (id: number): Promise<IPost[]> => {
  return await axiosInstance
    .get('/users/' + id + '/posts')
    .then((response) => response.data)
    .then((data) => data.posts)
}

export { getAllUsers, getPostsOfUserById }
