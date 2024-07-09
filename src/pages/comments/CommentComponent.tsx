import React, { FC } from 'react'
import { IComment } from '../../models/IComment'

interface IProps {
  comment: IComment
}

const CommentComponent: FC<IProps> = ({ comment }) => {
  return (
    <div>
      <p>Id: {comment.id}</p>
      <p>PostId: {comment.postId}</p>
      <p>Name: {comment.name}</p>
      <p>Email: {comment.email}</p>
      <p>Body: {comment.body}</p>
    </div>
  )
}

export default CommentComponent
