import { useState } from 'react'
import Input from './Input'

const List = () => {
  const [todos, setTodos] = useState([
    { value: 'Jog around the park 3x', completed: true },
    { value: '10 minutes meditation', completed: false },
    { value: 'Read for 1 hour', completed: false },
    { value: 'Pick up groceries', completed: false },
    { value: 'Complete Todo App on Frontend Mentor', completed: false },
  ])

  const handleTodoChange = (idx: number, event: any) => {
    const todosCopy = todos.slice()
    todosCopy[idx] = {
      value: event?.target?.value,
      completed: todos[idx]?.completed
    }
    setTodos(todosCopy)
  }

  return (
    <div className="rounded mt-8 bg-white dark:bg-dark_veryDarkDesaturatedBlue">
      {
        todos.map((todo, idx) => {
          return (
            <Input
              key={idx}
              value={todo.value}
              completed={todo.completed}
              onChange={(e: any) => handleTodoChange(idx, e)}
            />
          )
        })
      }

      <div className="text-sm px-6 py-4 flex w-full justify-between">
        <div className="text-light_lightGreyBlue">
          1 item left
        </div>
        <div className="text-light_darkGreyBlue font-bold">
          <span className="px-2">
            All
          </span>
          <span className="px-2">
            Active
          </span>
          <span className="px-2">
            Completed
          </span>
        </div>
        <div className="text-light_lightGreyBlue">
          Clear Completed
        </div>
      </div>
    </div>
  )
}

export default List
