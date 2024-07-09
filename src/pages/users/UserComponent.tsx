import React, { FC } from 'react'
import { IUser } from '../../models/IUser'

interface IProps {
  user: IUser
}

const UserComponent: FC<IProps> = ({ user }) => {
  return (
    <div>
      <p>Id: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default UserComponent
