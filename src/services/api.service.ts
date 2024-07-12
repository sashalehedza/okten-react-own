import axios from 'axios'
import { IPost } from '../models/IPost'
import { IUser } from '../models/IUser'
import { IComment } from '../models/IComment'

let axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com',
})

axiosInstance.interceptors.request.use((request) => {
  request.headers.set('Content-Type', 'application/json')
  return request
})

let getAllUsers = async (skip = 0): Promise<IUser[]> => {
  return await axiosInstance
    .get('/users', { params: { skip } })
    .then((response) => response.data.users)
}

let getSingleUser = async (id: number): Promise<IUser> => {
  return await axiosInstance
    .get(`/users/${id}`)
    .then((response) => response.data)
}

let getPostsOfUser = async (id: number): Promise<IPost[]> => {
  return await axiosInstance
    .get(`/users/${id}/posts`)
    .then((response) => response.data.posts)
}

let getAllPosts = async (skip = 0): Promise<IPost[]> => {
  return await axiosInstance
    .get('/posts', { params: { skip } })
    .then((response) => response.data.posts)
}

let getAllComments = async (skip = 0): Promise<IComment[]> => {
  return await axiosInstance
    .get('/comments', { params: { skip } })
    .then((response) => response.data.comments)
}

export {
  getAllUsers,
  getSingleUser,
  getPostsOfUser,
  getAllPosts,
  getAllComments,
}
