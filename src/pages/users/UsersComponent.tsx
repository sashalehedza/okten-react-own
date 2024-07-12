import { useEffect, useState } from 'react'
import UserComponent from './UserComponent'
import { IUser } from '../../models/IUser'
import { useSearchParams } from 'react-router-dom'
import PaginationComponent from '../../components/PaginationComponent'

const UsersComponent = () => {
  let [searchParams] = useSearchParams()
  let page = searchParams.get('page')
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    let skip
    if (page) {
      skip = +page * 30 - 30

      fetch('https://dummyjson.com/users?skip=' + skip)
        .then((value) => value.json())
        .then((value) => {
          setUsers(value.users)
        })
    } else {
      fetch('https://dummyjson.com/users')
        .then((value) => value.json())
        .then((value) => {
          setUsers(value.users)
        })
    }
  }, [page])

  return (
    <div>
      <hr />
      <div>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </div>
      <hr />
      <PaginationComponent />
    </div>
  )
}

export default UsersComponent
