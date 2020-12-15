import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'

import Input from './Input'
import ListFilter from './ListFilter'
import ItemsLeft from './ItemsLeft'
import filteredTodoState from '../recoil/selectors/todo-filter'
import useTodos from './hooks/useTodos'

const List = (): ReactElement => {
  const todos = useRecoilValue(filteredTodoState)
  const {
    clearCompletedTodos,
    deleteTodo,
    updateTodoCompleted,
    updateTodoValue,
  } = useTodos()

  return (
    <div>
      <div className="divide-y divide-light_veryLightGreyBlue rounded mt-5 bg-white dark:bg-dark_veryDarkDesaturatedBlue">
        {
          todos.map((todo, idx) => {
            return (
              <div key={todo.id}>
                <Input
                  key={`input-${todo.id}`}
                  todo={todo}
                  onInputChange={(value: string) => updateTodoValue(idx, value)}
                  onCheckboxChange={(completed: boolean) => updateTodoCompleted(idx, completed)}
                  onDelete={() => deleteTodo(idx)}
                  readonly
                />
              </div>
            )
          })
        }

        <div className="text-sm px-6 py-4 flex w-full">
          <div className="flex flex-1">
            <ItemsLeft />
          </div>

          <div className="invisible sm:visible">
            <ListFilter />
          </div>

          <div className="flex justify-end flex-1 text-light_lightGreyBlue cursor-pointer">
            <div onClick={clearCompletedTodos}>Clear Completed</div>
          </div>
        </div>

      </div>

      <div className="rounded sm:invisible mt-4 bg-white dark:bg-dark_veryDarkDesaturatedBlue px-6 py-5">
        <ListFilter />
      </div>
    </div>
  )
}

export default List
