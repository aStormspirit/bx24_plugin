import clsx from 'clsx'
import React from 'react'

type UiLinkVariant = 'primary' | 'secondary'

export type UiLinkProps = {
  variant: UiLinkVariant
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function UiLink({ className, variant, ...props }: UiLinkProps) {
  return (
    <a
      {...props}
      className={clsx(
        className,
        '',
        {
          primary:
            'bg-black text-white shadow hover:bg-gray-900 disabled:opacity-50 shadow-black-500/30',
          secondary:
            'text-black disabled:opacity-50 hover:text-cyan-700 underline',
        }[variant]
      )}
    >
      {props.children}
    </a>
  )
}
