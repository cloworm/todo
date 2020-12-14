import { atom } from 'recoil'
import shortid from 'shortid'

import Todo from '../../types/todo.type'

const todos: Todo[] = [
  { id: shortid.generate(), value: 'Jog around the park 3x', completed: true },
  { id: shortid.generate(), value: '10 minutes meditation', completed: false },
  { id: shortid.generate(), value: 'Read for 1 hour', completed: false },
  { id: shortid.generate(), value: 'Pick up groceries', completed: false },
  { id: shortid.generate(), value: 'Complete Todo App on Frontend Mentor', completed: false },
]

const todoState = atom<Todo[]>({
  key: 'todoState',
  default: todos
})

export default todoState
