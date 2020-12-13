import { selector } from 'recoil'
import todoState from '../atoms/todo'
import todoFilterState from '../atoms/todo-filter'

const filteredTodoState = selector({
  key: 'filteredTodoState',
  get: ({ get }) => {
    const filter = get(todoFilterState)
    const list = get(todoState)

    switch(filter) {
      case 'Show Active':
        return list.filter((item) => !item.completed)
      case 'Show Completed':
        return list.filter((item) => item.completed)
      default:
        return list;
    }
  }
})
