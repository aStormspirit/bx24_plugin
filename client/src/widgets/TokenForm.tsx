import { useState } from 'react'
import Form from '../features/form/Form'
import { UiTextContainer } from '../entities/ui/textContainer'

const TokenForm = () => {
  const [messanger, setMessanger] = useState(0)

  return (
    <div className="flex flex-col gap-[36px]">
      <div>
        <UiTextContainer />
      </div>
      <Form />
      <div className="rounded-lg bg-fuchsia-500 mt-[12px] mb-[20px] p-[10px]">
        <h2>
          В случае возникновения ошибок вы можете обратиться к разработчику
          плагина
        </h2>
        <p>Telegram: @apollostrong</p>
      </div>
    </div>
  )
}

export default TokenForm

{
  /* <div className="bg-emerald-100 rounded-lg flex flex-col justify-center mt-[20px] mb-[20px]">
          <p className="flex justify-center text-[24px]">
            WhatsApp или telegram
          </p>

          <div className="flex justify-evenly h-[80px] items-center">
            <FaWhatsapp
              onClick={() => setMessanger(0)}
              className={`${messanger == 0 ? 'fill-green-500' : ''} scale-[3]`}
            />
            <FaTelegram
              onClick={() => setMessanger(1)}
              className={`${messanger == 1 ? 'fill-blue-500' : ''} scale-[3]`}
            />
          </div>
        </div> */
}
