import { useRecoilValue } from 'recoil'

import todoStatsState from '../recoil/selectors/todo-stats'

const ItemsLeft = () => {
  const { totalUncompletedNum } = useRecoilValue(todoStatsState)

  return (
    <div className="text-light_lightGreyBlue">
      {totalUncompletedNum} item{totalUncompletedNum === 1 ? '' : 's'} left
    </div>
  )
}

export default ItemsLeft