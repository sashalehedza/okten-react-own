export type IPost = {
  body: string
  id: number
  title: string
  userId: number
  views: number
  tags: string[]
  reactions: {
    dislikes: number
    likes: number
  }
}

export type Response = {
  limit: number
  skip: number
  total: number
}

export type PostsResponse = Response & {
  posts: IPost[]
}
