import { useMutation } from 'react-query'
import { UserType } from '@src/shared/types'

const accountKey = ['createUser']

function createUser(item: UserType) {
  return fetch('http://localhost:8000/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }).then((res) => res.json())
}

const useCreateUser = () => {
  const mutation = useMutation({
    mutationFn: createUser,
    mutationKey: accountKey,
  })

  return {
    mutation,
    isLoading: mutation.isLoading,
    createUser: mutation.mutate,
    error: mutation.error,
    data: mutation.data,
  }
}

export default useCreateUser
