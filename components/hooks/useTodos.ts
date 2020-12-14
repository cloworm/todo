
import { useRecoilValue, useRecoilState } from 'recoil'
import { useCallback } from 'react'
import shortid from 'shortid'

import filteredTodoState from '../../recoil/selectors/todo-filter'
import todoState from '../../recoil/atoms/todo'
import { replaceItemAtIndex, removeItemAtIndex } from '../utils/array'
import Todo from '../../types/todo.type'

interface UseTodos {
  addTodo: (todo: Todo) => void
  clearCompletedTodos: () => void
  deleteTodo: (idx: number) => void
  updateTodoCompleted: (idx: number, completed: boolean) => void
  updateTodoValue: (idx: number, value: string) => void
}

const useTodos = (): UseTodos => {
  const todos = useRecoilValue(filteredTodoState)
  const [todoList, setTodos] = useRecoilState(todoState)

  const addTodo = useCallback((todo: Todo) => {
    setTodos((oldTodos) => [
      {
        ...todo,
        id: shortid.generate()
      },
      ...oldTodos,
    ])
  }, [setTodos])

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
