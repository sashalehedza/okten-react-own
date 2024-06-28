import { useEffect, useState } from 'react'
import UserComponent from '../user-component/UserComponent'
import { IUser } from '../../models/IUser'
import { IPost } from '../../models/IPost'
import { getAllUsers, getPostsOfUserById } from '../../services/api.service'

import PostsComponent from '../posts-component/PostsComponent'

const UsersComponent = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [posts, setPosts] = useState<IPost[]>([])

  useEffect(() => {
    getAllUsers().then((value: any) => {
      setUsers([...value])
    })
  }, [])

  const getPosts = (id: number) => {
    getPostsOfUserById(id).then((posts) => setPosts([...posts]))
  }

  return (
    <div>
      <hr />
      <div>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} getPosts={getPosts} />
        ))}
      </div>
      <hr />

      <div>
        <PostsComponent posts={posts} />
      </div>
    </div>
  )
}

export default UsersComponent
