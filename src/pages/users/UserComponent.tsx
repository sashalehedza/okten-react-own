import React, { FC } from 'react'
import { IUser } from '../../models/IUser'

interface IProps {
  user: IUser
}

const CommentComponent: FC<IProps> = ({ user }) => {
  return (
    <div>
      <p>Id: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default CommentComponent
