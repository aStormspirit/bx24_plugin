import { useQuery } from 'react-query'
import { UsersListType } from '@src/shared/types'

type GetUsers = {
  (): Promise<UsersListType>
}

const accountKey = ['users']

const getUsers: GetUsers = () => {
  return fetch('http://localhost:8000/users/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data.data)
}

const useGetUsers = () => {
  const { data, isLoading, isError, status, isFetched } = useQuery<any>(
    accountKey,
    () => getUsers(),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  return { data, isLoading, isError, status, isFetched }
}

export default useGetUsers
