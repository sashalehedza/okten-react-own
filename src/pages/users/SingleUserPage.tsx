import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleUser } from '../../services/api.service'
import { IUser } from '../../models/IUser'

function SingleUserPage() {
  const [singleUser, setSingleUser] = useState<IUser>()
  const { id } = useParams()

  useEffect(() => {
    getSingleUser(Number(id)).then((value: IUser) => {
      setSingleUser(value)
    })
  })
  return (
    <div>
      <p>Id: {singleUser?.id}</p>
      <p> Username: {singleUser?.username}</p>
      <p> Email: {singleUser?.email}</p>
    </div>
  )
}

export default SingleUserPage
