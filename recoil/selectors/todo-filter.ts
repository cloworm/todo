import { selector } from 'recoil'
import todoState from '../atoms/todo'
import todoFilterState from '../atoms/todo-filter'

import FilterEnum from '../../types/filter.type'
import Todo from '../../types/todo.type'

const filteredTodoState = selector<Todo[]>({
  key: 'filteredTodoState',
  get: ({ get }) => {
    const filter = get(todoFilterState)
    const list = get(todoState)

    switch(filter) {
    case FilterEnum.ShowActive:
      return list.filter((item) => !item.completed)
    case FilterEnum.ShowCompleted:
      return list.filter((item) => item.completed)
    default:
      return list
    }
  }
})

export default filteredTodoState
