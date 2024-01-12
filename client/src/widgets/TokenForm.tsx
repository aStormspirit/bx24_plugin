import Form from '../features/form/Form'
import { UiTextContainer } from '../entities/ui/textContainer'
import { UiLink } from '../shared/ui/link'

const TokenForm = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div>
        <UiTextContainer
          html={
            <div className="p-2">
              <h2 className="text-2xl font-bold mb-4">
                Как подключить Telegram
              </h2>
              <p className="text-gray-700 mb-4">
                1. Перейдите по{' '}
                <UiLink variant="secondary" href="https://my.telegram.org/auth">
                  ссылке
                </UiLink>
              </p>
              <p className="text-gray-700 mb-4">
                2. Получите ваш Token ID и Hash
              </p>
              <p className="text-gray-700 mb-4">3. Добавьте их в ваш профиль</p>
            </div>
          }
        />
      </div>
      <Form />
      <UiTextContainer
        html={
          <div className="p-2">
            <h2 className="text-center">
              {' '}
              В случае возникновения ошибок вы можете обратиться к разработчику
              плагина
            </h2>
            <p className="text-center">Telegram: @apollostrong</p>
          </div>
        }
      />
    </div>
  )
}

export default TokenForm
