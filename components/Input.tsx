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
}: Props): ReactElement => {
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

  if (!isMounted || !todo) return <div></div>

  return (
    <div className="relative group">
      <div className="absolute top-2.5 left-5">
        <div className="relative">
          <input
            type="checkbox"
            className={`
              form-checkbox
              dark:border-dark_veryDarkGreyBlue
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
            cursor-pointer
            ${rounded ? 'rounded' : ''}
            ${todo.completed ? 'line-through text-light_lightGreyBlue dark:text-dark_darkGreyBlue' : 'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue'}
            ${readonly ? 'pointer-events-none' : ''}
          `}
          placeholder="Create a new todo.."
          value={todo.value}
          onChange={updateInput}
          onClick={handleInputClick}
          readOnly={readonly}
          maxLength={125}
        />
      </form>

      <a onClick={onDelete}>
        <img
          src="/images/icon-cross.svg"
          className={`
            rounded
            bg-white
            dark:bg-dark_veryDarkDesaturatedBlue
            absolute
            top-0
            right-0
            cursor-pointer
            w-12
            h-12
            p-4.5
            hover:filter-black
            dark:hover:filter-white
            hover:animate-spin-fast
            visible
            sm:invisible
            ${onDelete ? 'group-hover:visible' : 'invisible'}
          `}
        />
      </a>
    </div>
  )
}

export default Input
