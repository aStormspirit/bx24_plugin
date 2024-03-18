import { UserType } from '@src/shared/types'
import { useState } from 'react'
import TokenItem from './TokenItem'
import { useEffect } from 'react'
import useGetUsers from '../../../entities/users/useGetUsers'
import UiSpinner from '../../../shared/ui/spinner'

const TokenList = () => {
  const { data, isLoading, isError, isFetched } = useGetUsers()
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    console.log(1)
    if (data && isFetched) {
      const users = data.map((el: UserType) => {
        return {
          ...el,
          selected: false,
        }
      })
      setUsers(users)
    }
  }, [data, isFetched])

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-[10px]">Подключенные профили</h2>
      <div className="w-[480px]">
        <div className="h-[40vw] overflow-scroll">
          {isLoading && <UiSpinner />}
          {isError && <p>Error</p>}
          {isFetched &&
            users.map((el: UserType, id: number) => (
              <TokenItem
                key={id}
                api_hash={el.api_hash}
                number={el.number}
                name={el.name}
                api_id={el.api_id}
                selected={el.selected}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default TokenList
