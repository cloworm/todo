
import { useRecoilValue, useRecoilState } from 'recoil'
import { useCallback } from 'react'

import filteredTodoState from '../../recoil/selectors/todo-filter'
import todoState from '../../recoil/atoms/todo'
import { replaceItemAtIndex, removeItemAtIndex } from '../utils/array'

const useTodos = () => {
  const todos = useRecoilValue(filteredTodoState)
  const [todoList, setTodos] = useRecoilState(todoState)

  const addTodo = (todo: Todo) => {

  }

  const updateTodoValue = useCallback((idx: number, value: string): void => {
    const item = todos[idx]
    const newList = replaceItemAtIndex(todos, idx, {
      ...item,
      value
    })

    setTodos(newList)
  }, [setTodos, todos])

  const updateTodoCompleted = useCallback((idx: number, completed: boolean): void => {
    const item = todos[idx]
    const newList = replaceItemAtIndex(todos, idx, {
      ...item,
      completed
    })

    setTodos(newList)
  }, [setTodos, todos])

  const deleteTodo = useCallback((idx: number): void => {
    const newList = removeItemAtIndex(todos, idx)

    setTodos(newList)
  }, [setTodos, todos])

  const clearCompletedTodos = useCallback((): void => {
    const newList = todoList.filter((todo) => !todo.completed)

    setTodos(newList)
  }, [setTodos, todoList])

  return {
    addTodo,
    clearCompletedTodos,
    deleteTodo,
    updateTodoCompleted,
    updateTodoValue,
  }
}

export default useTodos
