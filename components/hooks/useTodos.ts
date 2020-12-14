
import { useRecoilValue, useRecoilState } from 'recoil'
import { useCallback } from 'react'

import filteredTodoState from '../../recoil/selectors/todo-filter'
import todoState from '../../recoil/atoms/todo'
import { replaceItemAtIndex, removeItemAtIndex } from '../utils/array'

const useTodos = () => {
  const todos = useRecoilValue(filteredTodoState)
  const [todoList, setTodos] = useRecoilState(todoState)

  const addTodo = () => {

  }

  const updateTodoValue = (idx: number, value: string): void => {
    const item = todos[idx]
    const newList = replaceItemAtIndex(todos, idx, {
      ...item,
      value
    })

    setTodos(newList)
  }

  const updateTodoCompleted = (idx: number, completed: boolean): void => {
    const item = todos[idx]
    const newList = replaceItemAtIndex(todos, idx, {
      ...item,
      completed
    })

    setTodos(newList)
  }

  const deleteTodo = (idx: number): void => {
    const newList = removeItemAtIndex(todos, idx)

    setTodos(newList)
  }

  const clearCompletedTodos = (): void => {
    const newList = todoList.filter((todo) => !todo.completed)

    setTodos(newList)
  }

  return {
    addTodo,
    clearCompletedTodos,
    deleteTodo,
    updateTodoCompleted,
    updateTodoValue,
  }
}

export default useTodos
