import clsx from 'clsx'

export default function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, 'flex items-center gap-2 text-xl')}>
      <Logo className="w-12 h-12" />
      Telegram Chat
    </div>
  )
}

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m1.33 19l-.6-1.036l4.33-2.5L7.103 19zm13.856 0H9.412l-3.619-6.268l4.33-2.5zm8.083 0h-5.774l-6.64-11.5l4.33-2.5z"
      />
    </svg>
  )
}
