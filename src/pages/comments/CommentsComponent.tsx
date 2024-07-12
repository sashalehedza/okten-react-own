import { useEffect, useState } from 'react'
import CommentComponent from './CommentComponent'
import { IComment } from '../../models/IComment'
import { useSearchParams } from 'react-router-dom'
import PaginationComponent from '../../components/PaginationComponent'

const CommentsComponent = () => {
  let [searchParams] = useSearchParams()
  let page = searchParams.get('page')
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    let skip
    if (page) {
      skip = +page * 30 - 30

      fetch('https://dummyjson.com/comments?skip=' + skip)
        .then((value) => value.json())
        .then((value) => {
          setComments(value.comments)
        })
    } else {
      fetch('https://dummyjson.com/comments')
        .then((value) => value.json())
        .then((value) => {
          setComments(value.comments)
        })
    }
  }, [page])

  return (
    <div>
      <hr />
      <div>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
      <hr />
      <PaginationComponent />
    </div>
  )
}

export default CommentsComponent
