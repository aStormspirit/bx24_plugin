import { useSelector } from 'react-redux'
import { HashSliceState, ObjType } from '@src/shared/types'
import TokenItem from './TokenItem'

const TokenList = () => {
  const data: ObjType[] = useSelector(
    (state: { store: HashSliceState }) => state.store.data
  )

  return (
    <div className="flex flex-col items-center">
      <h2>Подключенные профили</h2>
      <div className="w-[480px]">
        <div>
          {data.map((el: ObjType, id) => (
            <TokenItem
              key={id}
              hash={el.hash}
              ID={el.ID}
              selected={el.selected}
            />
          ))}
        </div>
      </div>
      <div>Выбранный профиль</div>
      <div>
        {data
          .filter((el: ObjType) => el.selected)
          .map((el: ObjType, id) => (
            <TokenItem
              key={id}
              hash={el.hash}
              ID={el.ID}
              selected={el.selected}
            />
          ))}
      </div>
    </div>
  )
}

export default TokenList
