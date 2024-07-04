import React, { Component } from 'react'
import { IPost } from '../../models/IPost'

interface IProps {
  posts: IPost[]
}

class PostsComponent extends Component<IProps> {
  render() {
    const { posts } = this.props
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    )
  }
}

export default PostsComponent
