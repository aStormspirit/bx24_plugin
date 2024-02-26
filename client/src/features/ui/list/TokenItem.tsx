import { UiButton } from '../../../shared/ui/button'
import { UserType } from '@src/shared/types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../../redux/userSlice'

export default function TokenItem({
  api_hash,
  api_id,
  name,
  number,
}: UserType) {
  const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className={`rounded-lg border shadow-sm mb-[20px]`}>
      <div className="flex items-center justify-between p-1">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Профиль
        </h3>
        <UiButton
          onClick={() => {
            setSelected(!selected)
            dispatch(add({ api_hash, api_id, name, number }))
          }}
          className="w-[50%]"
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
            value={api_hash}
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
            value={api_id}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:opacity-70">
            number
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="number"
            placeholder="number"
            disabled={true}
            value={number}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-sm font-medium leading-none peer-disabled:opacity-70">
            Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="name"
            placeholder="name"
            disabled={true}
            value={name}
          />
        </div>
      </div>
    </div>
  )
}
