import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import todoFilterState from '../recoil/atoms/todo-filter';

const ListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoFilterState)

  const updateFilter = useCallback((value: string) => {
    // console.log('value', value);
    setFilter(value)
  }, [])

  return (
    <div className="text-light_darkGreyBlue font-bold">
      <span className="px-2 cursor-pointer" onClick={() => updateFilter('Show All')}>
        All
      </span>
      <span className="px-2 cursor-pointer" onClick={() => updateFilter('Show Active')}>
        Active
      </span>
      <span className="px-2 cursor-pointer" onClick={() => updateFilter('Show Completed')}>
        Completed
      </span>
    </div>
  )
}

export default ListFilter
