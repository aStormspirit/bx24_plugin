import clsx from 'clsx'
import React from 'react'

type UiLinkVariant = 'primary' | 'secondary' | 'outlined'

export type UiLinkProps = {
  variant: UiLinkVariant
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export function UiLink({ className, ...props }: UiLinkProps) {
  return (
    <a
      {...props}
      className={clsx(
        className,
        'py-1 text-teal-500 cursor-pointer hover:text-teal-600'
      )}
    ></a>
  )
}

// 'py-1 text-teal-500 cursor-pointer hover:text-teal-600',
