import React from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

import Input from './Input'
import ListFilter from './ListFilter'
import ItemsLeft from './ItemsLeft'
import filteredTodoState from '../recoil/selectors/todo-filter'
import todoState from '../recoil/atoms/todo'

const List = () => {
  const todos = useRecoilValue(filteredTodoState)
  const [todoList, setTodos] = useRecoilState(todoState)

  const handleTodoChange = (idx: number, value: string) => {
    const item = todos[idx]
    const newList = replaceItemAtIndex(todos, idx, {
      ...item,
      value
    })

    setTodos(newList)
  }

  const handleCompletedChange = (idx: number, completed: boolean) => {
    const item = todos[idx]
    const newList = replaceItemAtIndex(todos, idx, {
      ...item,
      completed
    })

    setTodos(newList)
  }

  const handleDelete = (idx: number) => {
    const newList = removeItemAtIndex(todos, idx)

    setTodos(newList)
  }

  const handleClearCompleted = () => {
    const newList = todoList.filter((todo) => !todo.completed)

    setTodos(newList)
  }

  function replaceItemAtIndex(arr: any, index: number, newValue: any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  function removeItemAtIndex(arr: any, index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  return (
    <div className="divide-y divide-light_veryLightGreyBlue rounded mt-8 bg-white dark:bg-dark_veryDarkDesaturatedBlue">
      {
        todos.map((todo, idx) => {
          return (
            <div key={todo.id}>
              <Input
                key={`input-${todo.id}`}
                todo={todo}
                onInputChange={(value: string) => handleTodoChange(idx, value)}
                onCheckboxChange={(completed: boolean) => handleCompletedChange(idx, completed)}
                onDelete={() => handleDelete(idx)}
                readonly={true}
                showDelete
              />
            </div>
          )
        })
      }

      <div className="text-sm px-6 py-4 flex w-full">
        <div className="flex flex-1">
          <ItemsLeft />
        </div>

        <ListFilter />

        <div className="flex justify-end flex-1 text-light_lightGreyBlue cursor-pointer">
          <div onClick={handleClearCompleted}>Clear Completed</div>
        </div>
      </div>
    </div>
  )
}

export default List
