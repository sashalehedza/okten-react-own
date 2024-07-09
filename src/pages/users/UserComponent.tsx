import React, { FC } from 'react'
import { IUser } from '../../models/IUser'
import styles from './UserComponent.module.css'
import { Link } from 'react-router-dom'

interface IProps {
  user: IUser
}

const UserComponent: FC<IProps> = ({ user }) => {
  return (
    <div className={styles.user}>
      <p>Id: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to={`/users/${user.id}`}>Details</Link>
    </div>
  )
}

export default UserComponent
