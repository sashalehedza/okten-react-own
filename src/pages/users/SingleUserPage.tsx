import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostsOfUser, getSingleUser } from '../../services/api.service'
import { IUser } from '../../models/IUser'
import { IPost } from '../../models/IPost'

function SingleUserPage() {
  const [singleUser, setSingleUser] = useState<IUser>()
  const [posts, setPosts] = useState<IPost[]>([])
  const { id } = useParams()

  useEffect(() => {
    getSingleUser(Number(id)).then((value: IUser) => {
      setSingleUser(value)
    })
    getPostsOfUser(Number(id)).then((data: IPost[]) => {
      setPosts(data)
    })
  }, [id])
  return (
    <div>
      <p>Id: {singleUser?.id}</p>
      <p> Username: {singleUser?.username}</p>
      <p> Email: {singleUser?.email}</p>
      <hr />
      <h3>Posts</h3>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id} - {post.title}
        </div>
      ))}
    </div>
  )
}

export default SingleUserPage
