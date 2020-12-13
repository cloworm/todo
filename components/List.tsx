import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'

import Input from './Input'
import ListFilter from './ListFilter'
import filteredTodoState from '../recoil/selectors/todo-filter'

const List = () => {
  const todos = useRecoilValue(filteredTodoState)

  const handleTodoChange = (idx: number, event: React.ChangeEvent<HTMLInputElement>) => {
    // const todosCopy = todos.slice()
    // todosCopy[idx] = {
    //   value: event?.target?.value,
    //   completed: todos[idx]?.completed
    // }
    // setTodos(todosCopy)
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTodoChange(idx, e)}
              />
            </div>
          )
        })
      }

      <div className="text-sm px-6 py-4 flex w-full justify-between">
        <div className="text-light_lightGreyBlue">
          1 item left
        </div>

        <ListFilter />

        <div className="text-light_lightGreyBlue">
          Clear Completed
        </div>
      </div>
    </div>
  )
}

export default List
