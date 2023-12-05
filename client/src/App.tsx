import './App.css'
import TokenForm from './components/TokenForm'
import TokenList from './components/TokenList'
import useCustomHook from "./utils/getUser"

function App() {
  const auth = useCustomHook()
  console.log(auth)
  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (isError) {
  //   return <div>Error fetching user data</div>
  // }

  return (
    <div className="bg-stone-300 h-full">
      <div className="flex justify-center">
        <header className="mt-[12px] w-1/2 bg-white rounded-lg text-[24px] flex justify-center">
          <h1>Добро пожаловать, {1}</h1>
        </header>
      </div>
      <div className="flex mt-[12px] justify-around">
        <TokenForm />
        <TokenList />
      </div>
    </div>
  )
}

export default App
