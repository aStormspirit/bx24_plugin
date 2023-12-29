import { UiTextField } from '../shared/ui/textField'
import { UiButton } from '../shared/ui/button'

const Form = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-xl font-bold">
          Введить ваш Telegram ID и Hash
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <UiTextField
              label="Telegram Hash"
              inputProps={{ placeholder: 'Введите ваш Telegram Hash' }}
            />
          </div>
          <div className="space-y-2">
            <UiTextField
              label="Telegram ID"
              inputProps={{ placeholder: 'Введите ваш Telegram ID' }}
            />
          </div>
          <UiButton variant="primary">Подтвердить</UiButton>
        </div>
      </div>
    </div>
  )
}

export default Form
