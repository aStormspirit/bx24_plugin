import { useSelector } from 'react-redux'
import { HashSliceState, ObjType } from '@src/shared/types'
import TokenItem from './TokenItem'

const TokenList = () => {
  const data: ObjType[] = useSelector(
    (state: { store: HashSliceState }) => state.store.data
  )

  console.log(data)

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-[10px]">Подключенные профили</h2>
      <div className="w-[480px]">
        <div className="h-[40vw] overflow-scroll">
          {data.map((el: ObjType, id: number) => (
            <TokenItem
              key={id}
              hash={el.hash}
              ID={el.ID}
              selected={el.selected}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TokenList

{
  /* <div>Выбранный профиль</div>
      <div className="w-100%">
        {data
          .filter((el: ObjType) => el.selected)
          .map((el: ObjType, id: number) => (
            <TokenItem
              key={id}
              hash={el.hash}
              ID={el.ID}
              selected={el.selected}
            />
          ))}
      </div> */
}
