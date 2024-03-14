import React, { useState, useEffect } from 'react'
import useGetProfile from '../../entities/users/useGetProfile'
import { useDispatch } from 'react-redux'
import { addProfile } from '../../redux/userSlice'

const Profile: React.FC = () => {
  const [name, setName] = useState('')
  const { data, isLoading, isFetched } = useGetProfile()
  const dispatch = useDispatch()

  useEffect(() => {
    if (data && isFetched) {
      setName(data.user_name)
      dispatch(addProfile(data))
    }
  }, [data, dispatch, isFetched])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center space-x-2 mb-4">
      <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
        <img
          className="aspect-square h-full w-full"
          alt="User avatar"
          src="/placeholder.svg?height=36&amp;width=36"
        />
      </span>
      <div>
        <h2 className="font-bold">{name}</h2>
        <p className="text-sm text-gray-600">Online</p>
      </div>
    </div>
  )
}

export default Profile
