import { useDispatch } from 'react-redux'
import { changeState } from '../form/redux/hashSlice'
import { UiButton } from '../../shared/ui/button'

export default function TokenItem({
  hash,
  ID,
  selected,
}: {
  hash: string
  ID: string
  selected: boolean
}) {
  const dispatch = useDispatch()

  return (
    <div
      className={`rounded-lg border shadow-sm ${
        selected ? 'border-blue-500' : ''
      }`}
    >
      <div className="flex items-center justify-between p-1">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Профиль
        </h3>
        <UiButton
          onClick={() => dispatch(changeState(ID))}
          className="w-[80px]"
          variant="secondary"
        >
          Выбрать
        </UiButton>
      </div>
      <div className="p-3 grid gap-2">
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:opacity-70">
            Hash
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="hash"
            placeholder="Unique Hash Identifier"
            disabled={true}
            value={hash}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:opacity-70">
            ID
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="id"
            placeholder="Identification Number"
            disabled={true}
            value={ID}
          />
        </div>
      </div>
    </div>
  )
}
