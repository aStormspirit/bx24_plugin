import { useQuery } from 'react-query'
import { Profile } from '@src/shared/types/index'
import { API_URL } from '../../shared/api/routes'
import { instance } from '../../shared/api/api-instance'

const accountKey = ['profile']

async function getProfile(): Promise<Profile> {
  const response = await fetch(`http://${API_URL}/telegram/me`, {
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

  // Проверка статуса ответа
  if (!response.ok) {
    // Можно добавить дополнительную проверку здесь для других кодов статуса,
    // если вы хотите обрабатывать их по-разному
    throw new Error(`Ошибка: ${response.status}`)
  }

  return await response.json().then((data) => data.data)
}

const useGetProfile = () => {
  const { data, isLoading, isError, isFetched } = useQuery<Profile, Error>({
    queryKey: accountKey,
    queryFn: getProfile,
    retry: 3,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return { data, isLoading, isError, isFetched }
}

export default useGetProfile
