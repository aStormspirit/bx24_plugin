import clsx from 'clsx'
import { PropsWithRef, useId } from 'react'

export type UiTextFieldProps = {
  className?: string
  label?: string
  error?: string
  inputProps?: PropsWithRef<React.InputHTMLAttributes<HTMLInputElement>>
}

export function UiTextField({
  className,
  label,
  error,
  inputProps,
}: UiTextFieldProps) {
  const id = useId()
  return (
    <div className={clsx(className, 'space-y-2')}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium leading-none">
          {label}
        </label>
      )}
      {error && (
        <div id={id} className="text-rose-400 text-sm">
          {error}
        </div>
      )}
      <input
        {...inputProps}
        id={id}
        className={clsx(
          inputProps?.className,
          'rounded border border-slate-300 focus:border-teal-600 px-2 h-10 w-full outline-none'
        )}
        type="text"
      />
    </div>
  )
}
