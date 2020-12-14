import { selector } from 'recoil'

import todoState from '../atoms/todo'

const todoStatsState = selector({
  key: 'todoStatsState',
  get: ({ get }) => {
    const todos = get(todoState)
    const totalNum = todos.length
    const totalUncompletedNum = totalNum - todos.filter((item) => item.completed).length

    return {
      totalNum,
      totalUncompletedNum
    }
  }
})

export default todoStatsState
