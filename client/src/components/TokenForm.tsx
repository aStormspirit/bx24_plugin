import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { useState } from 'react'

const TokenForm = () => {
  const [messanger, setMessanger] = useState(0)

  return (
    <div>
      <div>
        <div className='bg-purple-100 rounded-lg p-[10px]'>
          <h1 className='flex justify-center text-[24px]'>Как подключить Whatsapp или Telegram</h1>
          <p>1. Выберите WhatsApp или Telegram</p>
          <p>2. Получите ваш Token ID и Hash</p>
          <p>3. Добавьте их в ваш профиль</p>
        </div>
        <div className='bg-emerald-100 rounded-lg flex flex-col justify-center mt-[20px] mb-[20px]'>

          <p className='flex justify-center text-[24px]'>WhatsApp или telegram</p>

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
        </div>
      </div>
      <div className="bg-lime-100 rounded-lg pt-[20px] pb-[20px]">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <p>Token ID</p>
            <input type="text" className="w-3/4 h-8" />
          </div>
          <div className="flex flex-col items-center">
            <p>Token Hash</p>
            <input type="text" className="w-3/4 h-8" />
          </div>
          <div className="flex justify-center mt-[8px]">
            <button className="rounded-lg bg-green-500 text-white p-[6px] w-1/2">
              Добавить
            </button>
          </div>
        </div>
      </div>
      <div className='rounded-lg bg-fuchsia-500 mt-[12px] mb-[20px] p-[10px]'>
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
