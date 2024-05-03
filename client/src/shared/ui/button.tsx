import clsx from 'clsx'

type UiButtonVariant = 'primary' | 'secondary' | 'outlined'

export type UiButtonProps = {
  variant: UiButtonVariant
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full',
        {
          primary:
            'bg-black text-white shadow hover:bg-gray-900 disabled:opacity-50 shadow-black-500/30',
          secondary:
            'text-white bg-slate-500 shadow hover:bg-gray-900 disabled:opacity-50',
          outlined:
            'border border-slate-300 hover:bg-slate-500 disabled:opacity-50',
        }[variant]
      )}
    ></button>
  )
}
