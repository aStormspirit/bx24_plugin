import { useQuery } from 'react-query'
import { DialogType } from '../../shared/types'
import { authInstance } from '../../shared/api/api-instance'

const accountKey = ['dialogs']

const useGetDialogs = () => {
  async function getDialogs(): Promise<{ data: DialogType[] }> {
    const response = await authInstance.post(`/telegram/dialogs`)

    // // Проверка статуса ответа
    // if (!response.ok) {
    //   // Можно добавить дополнительную проверку здесь для других кодов статуса,
    //   // если вы хотите обрабатывать их по-разному
    //   throw new Error(`Ошибка: ${response.status}`)
    // }

    return response.data
  }

  const { data, isLoading, isError, status, isFetched } = useQuery<{
    data: DialogType[]
  }>({
    queryKey: accountKey,
    queryFn: getDialogs,
    retry: 3,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  return { data, isLoading, isError, status, isFetched }
}

export default useGetDialogs
