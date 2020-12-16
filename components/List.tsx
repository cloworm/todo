import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement
} from 'react-sortable-hoc'

import Input from './Input'
import ListFilter from './ListFilter'
import ItemsLeft from './ItemsLeft'
import filteredTodoState from '../recoil/selectors/todo-filter'
import useTodos from './hooks/useTodos'
import Todo from '../types/todo.type'
import useIsMounted from './hooks/useIsMounted'

const SortableItem: any = sortableElement(({
  value: {
    todo,
    idx,
    updateTodoCompleted,
    updateTodoValue,
    deleteTodo
  }
}:
{ value:
  {
    todo: Todo,
    idx: number,
    deleteTodo: (idx: number) => void,
    updateTodoCompleted: (idx: number, completed: boolean) => void,
    updateTodoValue: (idx: number, value: string) => void
  }
}
) => {
  return (
    <Input
      key={`input-${todo.id}`}
      todo={todo}
      onInputChange={(value: string) => updateTodoValue(idx, value)}
      onCheckboxChange={(completed: boolean) => updateTodoCompleted(idx, completed)}
      onDelete={() => deleteTodo(idx)}
      rounded={idx === 0}
      readonly
    />
  )
})

const SortableContainer: any = sortableContainer(({ children }: { children: any}) => {
  return <div>{children}</div>
})

const List = (): ReactElement|null => {
  const todos = useRecoilValue(filteredTodoState)
  const {
    clearCompletedTodos,
    deleteTodo,
    updateTodoCompleted,
    updateTodoValue,
  } = useTodos()
  const isMounted = useIsMounted()

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number}) => {
    // this.setState(({items}) => ({
    // items: arrayMove(items, oldIndex, newIndex),
    // }));
    console.log('done sorting', oldIndex, newIndex)
  }

  if (!isMounted) return null

  return (
    <div>
      <div className="divide-y divide-light_veryLightGreyBlue rounded mt-5 bg-white dark:bg-dark_veryDarkDesaturatedBlue">

        <SortableContainer onSortEnd={onSortEnd}>
          {todos.map((todo, idx) => {
            const value = {
              todo,
              idx,
              updateTodoValue,
              updateTodoCompleted,
              deleteTodo
            }
            return <SortableItem key={`item-${todo?.id}`} index={idx} value={value} />
          })}
        </SortableContainer>

        <div className="text-sm px-6 py-4 flex w-full">
          <div className="flex flex-1">
            <ItemsLeft />
          </div>

          <div className="hidden sm:flex">
            <ListFilter />
          </div>

          <div className="flex justify-end flex-1 text-light_lightGreyBlue cursor-pointer">
            <div onClick={clearCompletedTodos}>Clear Completed</div>
          </div>
        </div>

      </div>

      <div className="rounded sm:hidden mt-4 bg-white dark:bg-dark_veryDarkDesaturatedBlue px-6 py-5">
        <ListFilter />
      </div>
    </div>
  )
}

export default List

/* {
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
        } */
