import React, { Component } from 'react'
import UserComponent from '../user-component/UserComponent'
import { IUser } from '../../models/IUser'
import { IPost } from '../../models/IPost'
import { getAllUsers, getPostsOfUserById } from '../../services/api.service'
import PostsComponent from '../posts-component/PostsComponent'

interface UsersComponentState {
  users: IUser[]
  posts: IPost[]
}

class UsersComponent extends Component<{}, UsersComponentState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      users: [],
      posts: [],
    }
  }

  componentDidMount() {
    getAllUsers().then((value: IUser[]) => {
      this.setState({ users: [...value] })
    })
  }

  getPosts = (id: number) => {
    getPostsOfUserById(id).then((posts) => this.setState({ posts: [...posts] }))
  }

  render() {
    const { users, posts } = this.state
    return (
      <div>
        <hr />
        <div>
          {users.map((user) => (
            <UserComponent key={user.id} user={user} getPosts={this.getPosts} />
          ))}
        </div>
        <hr />
        <div>
          <PostsComponent posts={posts} />
        </div>
      </div>
    )
  }
}

export default UsersComponent
