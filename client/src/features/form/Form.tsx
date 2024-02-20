import { UiTextField } from '../../shared/ui/textField'
import { UiButton } from '../../shared/ui/button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { add } from './redux/hashSlice'
import { ObjType } from '@src/shared/types'

const Form = () => {
  const { register, handleSubmit } = useForm<ObjType>()

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<ObjType> = (data: ObjType) =>
    dispatch(
      add({
        number: data.number,
        name: data.name,
        hash: data.hash,
        ID: Number(data.ID),
        selected: false,
      })
    )

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
                ...register('hash'),
              }}
            />
          </div>
          <div className="space-y-2">
            <UiTextField
              label="Telegram ID"
              inputProps={{
                placeholder: 'Введите ваш Telegram ID',
                pattern: "^[0-9]+$",
                ...register('ID'),
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
