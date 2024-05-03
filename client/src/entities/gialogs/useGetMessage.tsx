import { useQuery } from 'react-query'
import { authInstance } from '../../shared/api/api-instance'

const getMessages = async (id: string | undefined, offset: number) => {
  return authInstance
    .post(`/telegram/dialog/${id}/`, {
      offset,
    })
    .then((res) => res.data.data)
}

const useGetMessage = (id: string | undefined, offset: number) => {
  const { data, isLoading, isError, isFetched, refetch } = useQuery(
    ['account', id],
    () => getMessages(id, offset),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  return { data, isLoading, isError, isFetched, refetch }
}

export default useGetMessage
