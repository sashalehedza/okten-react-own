import React, { FC } from 'react'
import { IUser } from '../../models/IUser'
import styles from './UserComponent.module.css'

interface IProps {
  user: IUser
}

const UserComponent: FC<IProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <p>Id: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserComponent
