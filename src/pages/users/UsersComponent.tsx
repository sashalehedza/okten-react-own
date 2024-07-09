import { useEffect, useState } from 'react'
import UserComponent from './UserComponent'
import { IUser } from '../../models/IUser'
import { getAllUsers } from '../../services/api.service'

const UsersComponent = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    getAllUsers().then((value: IUser[]) => {
      setUsers([...value])
    })
  }, [])

  return (
    <div>
      <hr />
      <div>
        {users.map((user) => (
          <UserComponent key={user.id} user={user} />
        ))}
      </div>
      <hr />
    </div>
  )
}

export default UsersComponent
