import axios from 'axios'
import { IPost, IPostResponse } from '../models/IPost'

let axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

axiosInstance.interceptors.request.use((request) => {
  request.headers.set('Content-Type', 'application/json')
  return request
})

let postData = async (data: IPost): Promise<IPostResponse> => {
  return await axiosInstance
    .post('/posts', data, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.data)
}

export { postData }
