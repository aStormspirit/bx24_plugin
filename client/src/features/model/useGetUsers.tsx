import { useQuery } from 'react-query'
import { UsersListType } from '@src/shared/types'

type GetUsers = {
  (): Promise<UsersListType>
}

const useGetUsers = () => {
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

  const { data, isLoading, isError, status, isFetched } = useQuery<any>(
    'users',
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
