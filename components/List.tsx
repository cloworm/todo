import React, { useState } from 'react'
import { useRecoilValue, replaceItem, useRecoilState } from 'recoil'

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
            <div key={idx}>
              <Input
                key={`input$-{idx}`}
                value={todo.value}
                completed={todo.completed}
                onInputChange={(value: string) => handleTodoChange(idx, value)}
                onCheckboxChange={(completed: boolean) => handleCompletedChange(idx, completed)}
              />
            </div>
          )
        })
      }

      <div className="text-sm px-6 py-4 flex w-full justify-between">
        <ItemsLeft />

        <ListFilter />

        <div className="text-light_lightGreyBlue">
          Clear Completed
        </div>
      </div>
    </div>
  )
}

export default List
