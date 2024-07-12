import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import UserComponent from './UserComponent'
import PaginationComponent from '../../components/PaginationComponent'
import { IUser } from '../../models/IUser'
import { getAllUsers } from '../../services/api.service'

const UsersComponent = () => {
  let [searchParams] = useSearchParams()
  let page = searchParams.get('page')
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    let skip = page ? +page * 30 - 30 : 0

    getAllUsers(skip)
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error))
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
