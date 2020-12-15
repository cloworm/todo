import React, { ReactElement, useCallback } from 'react'
import { useTheme } from 'next-themes'

import Todo from '../types/todo.type'
import useIsMounted from './hooks/useIsMounted'

interface Props {
  todo: Todo
  onInputChange: (value: string) => void
  onCheckboxChange: (checked: boolean) => void
  onSubmit?: () => void
  onDelete?: () => void
  rounded?: boolean
  readonly?: boolean
}

const Input = ({
  todo,
  onInputChange,
  onCheckboxChange,
  onSubmit,
  onDelete,
  rounded,
  readonly,
}: Props): ReactElement|null => {
  const { theme } = useTheme()
  const isMounted = useIsMounted()
  const updateInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value)
  }, [onInputChange])

  const updateChecked = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(e.target.checked)
  }, [onCheckboxChange])

  const handleInputClick = useCallback(() => {
    if (!readonly) return

    onCheckboxChange(!todo.completed)
  }, [onCheckboxChange, readonly, todo])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    if (onSubmit) {
      onSubmit()
    }
  }, [onSubmit])

  if (!isMounted || !todo) return null

  return (
    <div className="relative">
      <div className="absolute top-2.5 left-5">
        <div className="relative">
          <input
            type="checkbox"
            className={`
              form-checkbox
              dark:bg-dark_veryDarkDesaturatedBlue
              border
              rounded-full
              focus:outline-none
              h-6
              w-6
              cursor-pointer
              ${theme === 'dark' ? 'form-checkbox-dark' : ''}
            `}
            checked={todo.completed}
            onChange={updateChecked}
          />
          <img
            className={`
              absolute
              top-2
              left-1.5
              pointer-events-none
              ${todo.completed ? '' : 'invisible' }
            `}
            src="/images/icon-check.svg"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`
            w-full
            focus:outline-none
            py-3
            pr-4
            pl-16
            dark:bg-dark_veryDarkDesaturatedBlue
            disabled:text-light_darkGreyBlue
            cursor-pointer
            ${rounded ? 'rounded' : ''}
            ${todo.completed ? 'line-through text-light_lightGreyBlue' : 'text-light_darkGreyBlue'}
          `}
          placeholder="Create a new todo.."
          value={todo.value}
          onChange={updateInput}
          onClick={handleInputClick}
          readOnly={readonly}
        />
      </form>

      <img
        src="/images/icon-cross.svg"
        className={`
          absolute
          top-0
          right-0
          cursor-pointer
          w-12
          h-12
          p-4.5
          hover:filter-black
          hover:animate-spin-fast
          ${onDelete ? '' : 'invisible'}
        `}
        onClick={onDelete}
      />
    </div>
  )
}

export default Input
