import { useQuery } from 'react-query'
import { DialogType } from '../../shared/types'
import { API_URL } from '../../shared/api/routes'

const accountKey = ['dialogs']

const useGetDialogs = () => {
  let name = localStorage.getItem('name')
  let number = localStorage.getItem('number')
  let api_id = localStorage.getItem('api_id')
  let api_hash = localStorage.getItem('api_hash')

  async function getDialogs(): Promise<{ data: DialogType[] }> {
    const response = await fetch(API_URL + '/telegram/dialogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        number: number,
        api_id: api_id,
        api_hash: api_hash,
      }),
    })

    // Проверка статуса ответа
    if (!response.ok) {
      // Можно добавить дополнительную проверку здесь для других кодов статуса,
      // если вы хотите обрабатывать их по-разному
      throw new Error(`Ошибка: ${response.status}`)
    }

    return response.json()
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
