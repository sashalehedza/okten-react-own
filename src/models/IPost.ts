export type IPost = {
  title: string
  body: string
  userId: number
}

export type IPostResponse = IPost & { id: number }
