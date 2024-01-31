import { PropsWithRef, useId } from 'react'
export type UiTextFieldProps = {
  className?: string
  inputProps?: PropsWithRef<React.InputHTMLAttributes<HTMLInputElement>>
}

export default function UiInput({ className, inputProps }: UiTextFieldProps) {
  return (
    <div className="p-4">
      <input className={className} id={useId()} {...inputProps} type="text" />
    </div>
  )
}
