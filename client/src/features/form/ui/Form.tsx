import { UiTextField } from '../../../shared/ui/textField'
import { UiButton } from '../../../shared/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { UserType } from '@src/shared/types'
import useCreateUser from '../model/useCreateUser'
import { useQueryClient } from 'react-query'
import { queryClient } from '../../../shared/api/queryClient'

const Form = () => {
  const { register, handleSubmit, reset } = useForm<UserType>()
  const queryClient = useQueryClient()

  const refetchData = () => {
    queryClient.refetchQueries(['users'])
  }

  const { mutation, createUser, isLoading } = useCreateUser()

  const onSubmit: SubmitHandler<UserType> = (data: UserType) => {
    createUser(data)
    reset()
    refetchData()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto"
    >
      <div className="flex flex-col space-y-1.5 p-3">
        <h3 className="tracking-tight text-xl font-bold">
          Введить ваш Telegram ID и Hash
        </h3>
      </div>
      <div className="p-3">
        <div className="space-y-2">
          <div className="space-y-1">
            <UiTextField
              label="name"
              inputProps={{
                placeholder: 'Введите ваш name',
                ...register('name'),
              }}
            />
          </div>
          <div className="space-y-1">
            <UiTextField
              label="number"
              inputProps={{
                placeholder: 'Введите ваш номер телефона',
                ...register('number'),
              }}
            />
          </div>
          <div className="space-y-1">
            <UiTextField
              label="Telegram Hash"
              inputProps={{
                placeholder: 'Введите ваш Telegram Hash',
                ...register('api_hash'),
              }}
            />
          </div>
          <div className="space-y-2">
            <UiTextField
              label="Telegram ID"
              inputProps={{
                placeholder: 'Введите ваш Telegram ID',
                ...register('api_id'),
              }}
            />
          </div>
          <UiButton variant="primary">Подтвердить</UiButton>
        </div>
      </div>
    </form>
  )
}

export default Form
