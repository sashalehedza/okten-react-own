import { useEffect, useState } from 'react'
import PostComponent from './PostComponent'
import { IPost } from '../../models/IPost'
import { getAllPosts } from '../../services/api.service'

const PostsComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    getAllPosts().then((value: IPost[]) => {
      setPosts([...value])
    })
  }, [])

  return (
    <div>
      <hr />
      <div>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
      <hr />
    </div>
  )
}

export default PostsComponent
