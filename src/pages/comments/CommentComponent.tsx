import React, { FC } from 'react'
import { IComment } from '../../models/IComment'
import styles from './CommentComponent.module.css'

interface IProps {
  comment: IComment
}

const CommentComponent: FC<IProps> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <p>Id: {comment.id}</p>
      <p>PostId: {comment.postId}</p>
      <p>Body: {comment.body}</p>
    </div>
  )
}

export default CommentComponent
