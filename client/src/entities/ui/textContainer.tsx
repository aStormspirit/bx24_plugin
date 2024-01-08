export function UiTextContainer() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md w-full mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Как подключить Telegram</h2>
        <p className="text-gray-700 mb-4">
          1. Перейдите по{' '}
          <a className="" href="https://my.telegram.org/auth">
            ссылке
          </a>
        </p>
        <p className="text-gray-700 mb-4">2. Получите ваш Token ID и Hash</p>
        <p className="text-gray-700 mb-4">3. Добавьте их в ваш профиль</p>
      </div>
    </div>
  )
}
