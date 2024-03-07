import TokenForm from '../widgets/TokenForm'
import TokenList from '../features/list/ui/TokenList'
import UiHeader from '../shared/ui/header'
import ChatLink from '../widgets/ChatLink'

function App() {
  return (
    <div className="h-full">
      <div className="flex justify-center">
        <UiHeader className="w-full" />
      </div>
      <div className="flex mt-[12px] justify-around">
        <TokenForm />
        <TokenList />
      </div>
      <ChatLink />
    </div>
  )
}

export default App
