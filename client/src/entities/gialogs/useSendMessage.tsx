import React from 'react'
import { useQuery } from 'react-query'
import { authInstance } from '../../shared/api/api-instance'

const accountKey = ['message']

const sendMessages = async () => {
  return authInstance.post(`/telegram/`).then((res) => res.data.data)
}

const useSendMessage = () => {
  const { data, isLoading, isError, isFetched } = useQuery({
    queryKey: accountKey,
    queryFn: sendMessages,
    retry: 3,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return { data, isLoading, isError, isFetched }
}

export default useSendMessage
