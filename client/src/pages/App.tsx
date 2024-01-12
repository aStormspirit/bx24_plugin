import TokenForm from '../widgets/TokenForm'
import TokenList from '../features/list/TokenList'
import { UiLink } from '../shared/ui/link'

function App() {
  return (
    <div className="h-full">
      <div className="flex justify-center">
        <header className="mt-[12px] w-1/2 bg-white rounded-lg text-[24px] flex justify-center">
          <h1>Добро пожаловать, {1}</h1>
        </header>
      </div>
      <div className="flex mt-[12px] justify-around">
        <TokenForm />
        <TokenList />
      </div>
      <div className="flex items-center justify-center pb-2">
        <UiLink
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          href="/chat"
          variant="primary"
        >
          Перейти в чат
        </UiLink>
      </div>
    </div>
  )
}

export default App
