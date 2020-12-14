import { atom } from 'recoil'
import FilterEnum from '../../types/filter.type'

const todoFilterState = atom<FilterEnum>({
  key: 'todoFilterState',
  default: FilterEnum.ShowAll
})

export default todoFilterState
