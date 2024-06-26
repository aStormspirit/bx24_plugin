import { useQuery } from 'react-query'
import { instance } from '../../shared/api/api-instance'

const accountKey = ['users']

const getUsers: any = () => {
  return instance.get('users/').then((res) => res.data.data)
}

const useGetUsers = () => {
  const { data, isLoading, isError, status, isFetched, refetch } =
    useQuery<any>(accountKey, () => getUsers(), {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    })

  return { data, isLoading, isError, status, isFetched }
}

export default useGetUsers
