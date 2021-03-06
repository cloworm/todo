import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'

import todoStatsState from '../recoil/selectors/todo-stats'

const ItemsLeft = (): ReactElement => {
  const { totalUncompletedNum } = useRecoilValue(todoStatsState)

  return (
    <div className="text-light_darkGreyBlue dark:text-dark_darkGreyBlue">
      {totalUncompletedNum} item{totalUncompletedNum === 1 ? '' : 's'} left
    </div>
  )
}

export default ItemsLeft
