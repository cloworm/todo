import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { ReactElement } from 'react'

import todoFilterState from '../recoil/atoms/todo-filter'
import FilterEnum from '../types/filter.type'

const ListFilter = (): ReactElement => {
  const [filter, setFilter] = useRecoilState(todoFilterState)

  const updateFilter = useCallback((value: FilterEnum) => {
    setFilter(value)
  }, [setFilter])

  return (
    <div className="text-lg sm:text-base text-light_darkGreyBlue font-bold text-center">
      <span className={`px-2 cursor-pointer ${filter === FilterEnum.ShowAll ? 'text-brightBlue' : ''}`} onClick={() => updateFilter(FilterEnum.ShowAll)}>
        All
      </span>
      <span className={`px-2 cursor-pointer ${filter === FilterEnum.ShowActive ? 'text-brightBlue' : ''}`} onClick={() => updateFilter(FilterEnum.ShowActive)}>
        Active
      </span>
      <span className={`px-2 cursor-pointer ${filter === FilterEnum.ShowCompleted ? 'text-brightBlue' : ''}`} onClick={() => updateFilter(FilterEnum.ShowCompleted)}>
        Completed
      </span>
    </div>
  )
}

export default ListFilter
