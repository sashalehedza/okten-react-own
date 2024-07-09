import React, { FC } from 'react'
import { IPost } from '../../models/IPost'
import styles from './PostComponent.module.css'

interface IProps {
  post: IPost
}

const PostComponent: FC<IProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <p>Id: {post.id}</p>
      <p>UserId: {post.userId}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  )
}

export default PostComponent
