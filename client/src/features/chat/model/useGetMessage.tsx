import React from 'react'
import { useQuery } from 'react-query'

const accountKey = ['message']

const getMessages = async (id: any) => {
  return fetch(`http://localhost:8000/telegram/dialog/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: localStorage.getItem('name'),
      number: localStorage.getItem('number'),
      api_id: localStorage.getItem('api_id'),
      api_hash: localStorage.getItem('api_hash'),
    }),
  })
    .then((res) => res.json())
    .then((data) => data.data)
    .catch((err) => console.log(err))
}

const useGetMessage = (id: any) => {
  const { data, isLoading, isError, isFetched } = useQuery(
    ['account', id],
    () => getMessages(id),
    {
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  )

  return { data, isLoading, isError, isFetched }
}

export default useGetMessage
