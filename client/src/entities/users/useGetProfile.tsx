import { useQuery } from 'react-query'
import { Profile } from '@src/shared/types/index'
import { authInstance } from '../../shared/api/api-instance'

const accountKey = ['profile']

async function getProfile() {
  const response = await authInstance.post(`telegram/me`)

  // // Проверка статуса ответа
  // if (!response.ok) {
  //   // Можно добавить дополнительную проверку здесь для других кодов статуса,
  //   // если вы хотите обрабатывать их по-разному
  //   throw new Error(`Ошибка: ${response.status}`)
  // }

  return response.data.data
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
