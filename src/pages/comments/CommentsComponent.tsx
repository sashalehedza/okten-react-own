import { useEffect, useState } from 'react'
import CommentComponent from './CommentComponent'
import { IComment } from '../../models/IComment'
import { getAllComments } from '../../services/api.service'

const CommentsComponent = () => {
  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    getAllComments().then((value: IComment[]) => {
      setComments([...value])
    })
  }, [])

  return (
    <div>
      <hr />
      <div>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
      <hr />
    </div>
  )
}

export default CommentsComponent
