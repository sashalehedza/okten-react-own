import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostsOfUser } from '../../services/api.service'
import { IPost } from '../../models/IPost'

function UserPostsPage() {
  const [posts, setPosts] = useState<IPost[]>([])
  const { id } = useParams()

  useEffect(() => {
    getPostsOfUser(Number(id)).then((data: IPost[]) => {
      setPosts(data)
    })
  }, [id])
  return (
    <div>
      <h3>Posts of user: {id}</h3>
      {posts.map((post) => (
        <div key={post.id}>
          <p>Id: {post.id}</p>
          <p>UserId: {post.userId}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default UserPostsPage
