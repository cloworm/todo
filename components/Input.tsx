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
    <div
      className={`
        relative group
        ${readonly ? 'border-b-1 border-light_veryLightGreyBlue dark:border-dark_veryDarkGreyBlue' : ''}
      `}
    >
      <div className="absolute top-3 sm:top-4 left-5">
        <div className="relative">
          <input
            type="checkbox"
            aria-label="Complete Todo"
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
            transition
            ease-linear
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
            alt="Checkbox image for checkbox input"
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`
          text-sm
          sm:text-base
          overflow-ellipsis
          w-full
          focus:outline-none
          py-4
          sm:py-4.5
          pr-8
          pl-14
          sm:pl-16
          dark:bg-dark_veryDarkDesaturatedBlue
          cursor-pointer
          transition
          ease-linear
          ${rounded ? (todo.id ? 'rounded-t' : 'rounded') : ''}
          ${todo.completed ? 'line-through text-light_lightGreyBlue dark:text-dark_darkGreyBlue' : 'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue'}
        `}
          placeholder="Create a new todo.."
          value={todo.value}
          onChange={updateInput}
          onClick={handleInputClick}
          readOnly={readonly}
          maxLength={125}
          aria-label="Todo"
        />
      </form>

      <a id={`delete-${todo.id}`} className="absolute top-0 right-0" onClick={onDelete}>
        <img
          src="/images/icon-cross.svg"
          className={`
          cursor-pointer
          sm:w-14.5
          sm:h-14.5
          sm:p-5
          w-12
          h-12
          p-4.5
          hover:filter-black
          dark:hover:filter-white
          hover:animate-spin-fast
          visible
          xl:invisible
          ${onDelete ? 'group-hover:visible' : 'invisible'}
        `}
          alt="Delete Todo"
        />
      </a>
    </div>
  )
}

export default Input
