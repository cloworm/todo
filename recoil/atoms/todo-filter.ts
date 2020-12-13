import { atom } from 'recoil'

const todoFilterState = atom({
  key: 'todoFilterState',
  default: 'Show All'
})

export default todoFilterState
