import React, { Component } from 'react'
import { IUser } from '../../models/IUser'
import styles from './UserComponent.module.css'

interface IProps {
  user: IUser
  getPosts: (id: number) => void
}

class UserComponent extends Component<IProps> {
  render() {
    const { user, getPosts } = this.props
    return (
      <div className={styles.card}>
        <p>Id: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Age: {user.age}</p>
        <button
          onClick={() => {
            getPosts(user.id)
          }}
        >
          show posts of this user
        </button>
      </div>
    )
  }
}

export default UserComponent
