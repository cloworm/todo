import { atom } from 'recoil'

const todoState = atom({
  key: 'todoState',
  default: [
    { value: 'Jog around the park 3x', completed: true },
    { value: '10 minutes meditation', completed: false },
    { value: 'Read for 1 hour', completed: false },
    { value: 'Pick up groceries', completed: false },
    { value: 'Complete Todo App on Frontend Mentor', completed: false },
  ]
})

export default todoState
