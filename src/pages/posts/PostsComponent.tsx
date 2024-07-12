import { useEffect, useState } from 'react'
import PostComponent from './PostComponent'
import { IPost } from '../../models/IPost'
import { useSearchParams } from 'react-router-dom'
import PaginationComponent from '../../components/PaginationComponent'

const PostsComponent = () => {
  let [searchParams] = useSearchParams()
  let page = searchParams.get('page')
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    let skip
    if (page) {
      skip = +page * 30 - 30

      fetch('https://dummyjson.com/posts?skip=' + skip)
        .then((value) => value.json())
        .then((value) => {
          setPosts(value.posts)
        })
    } else {
      fetch('https://dummyjson.com/posts')
        .then((value) => value.json())
        .then((value) => {
          setPosts(value.posts)
        })
    }
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
