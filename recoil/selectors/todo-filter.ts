import { selector } from 'recoil'
import todoState from '../atoms/todo'
import todoFilterState from '../atoms/todo-filter'

const filteredTodoState = selector({
  key: 'filteredTodoState',
  get: ({ get }) => {
    const filter = get(todoFilterState)
    const list = get(todoState)

    console.log('filter', filter)
    console.log('list', list)

    switch(filter) {
      case 'Show Active':
        console.log('in show active')
        return list.filter((item) => !item.completed)
      case 'Show Completed':
        console.log('in show completed')
        return list.filter((item) => item.completed)
      default:
        console.log('in all')
        return list;
    }
  }
})

export default filteredTodoState
