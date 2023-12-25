import { UiButton } from '../shared/ui/button'

const Form = () => {
  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="tracking-tight text-xl font-bold">
          Введить ваш Telegram ID и Hash
        </h3>
      </div>
      <div className="p-6">
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Telegram Hash
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="telegram-hash"
              placeholder="Enter your Telegram hash"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Telegram ID
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="telegram-id"
              placeholder="Enter your Telegram ID"
            />
          </div>
          <UiButton variant="primary">Подтвердить</UiButton>
        </form>
      </div>
    </div>
  )
}

export default Form
