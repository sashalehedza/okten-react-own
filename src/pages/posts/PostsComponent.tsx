import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostComponent from './PostComponent'
import PaginationComponent from '../../components/PaginationComponent'
import { IPost } from '../../models/IPost'
import { getAllPosts } from '../../services/api.service'

const PostsComponent = () => {
  let [searchParams] = useSearchParams()
  let page = searchParams.get('page')
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    let skip = page ? +page * 30 - 30 : 0

    getAllPosts(skip)
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error))
  }, [page])

  return (
    <div>
      <hr />
      <div>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
      <hr />
      <PaginationComponent />
    </div>
  )
}

export default PostsComponent
