import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentComponent from './CommentComponent'
import PaginationComponent from '../../components/PaginationComponent'
import { IComment } from '../../models/IComment'
import { getAllComments } from '../../services/api.service'

const CommentsComponent = () => {
  let [searchParams] = useSearchParams()
  let page = searchParams.get('page')
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    let skip = page ? +page * 30 - 30 : 0

    getAllComments(skip)
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error))
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
