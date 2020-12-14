import React, { useState, useRef } from 'react'

interface Props {
  completed?: boolean
  rounded?: boolean
  value?: string
  onInputChange?: (value: string) => void
  onCheckboxChange?: (checked: boolean) => void
  onDelete: () => void
  readonly?: boolean
  showDelete?: boolean
}

const Input = ({ rounded, value = '', completed, onInputChange, onCheckboxChange, showDelete, onDelete, readonly }: Props) => {
  const [text, setText] = useState(value)
  const [checked, setChecked] = useState(completed)
  let checkboxRef: any = React.useRef<HTMLInputElement>(null)

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if (typeof onInputChange === 'function') {
      onInputChange(e.target.value)
    }
  }

  const updateChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    manuallyUpdateChecked(e.target.checked)
  }

  const deleteTodo = () => {
    if (typeof onDelete === 'function') {
      onDelete()
    }
  }

  const manuallyUpdateChecked = (checked: boolean) => {
    setChecked(checked)
    if (typeof onCheckboxChange === 'function') {
      onCheckboxChange(checked)
    }
  }

  const handleInputClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!readonly) return

    if (checkboxRef) {
      manuallyUpdateChecked(!checkboxRef.current.checked)
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-2.5 left-5">
        <div className="relative">
          <input
            type="checkbox"
            className="form-checkbox border rounded-full focus:outline-none h-6 w-6 cursor-pointer"
            defaultChecked={checked}
            onChange={updateChecked}
            ref={checkboxRef}
          />
          <img
            className="absolute top-2 left-1.5 pointer-events-none"
            src="/images/icon-check.svg"
          />
        </div>
      </div>

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
          ${completed ? 'line-through text-light_lightGreyBlue' : 'text-light_darkGreyBlue'}
        `}
        placeholder="Create a new todo.."
        value={text}
        onChange={updateInput}
        onClick={handleInputClick}
        readOnly={readonly}
      />

      <img
        src="/images/icon-cross.svg"
        className={`absolute top-3.5 right-5 cursor-pointer w-5 h-5 p-1 ${showDelete ? '' : 'invisible'}`}
        onClick={deleteTodo}
      />
    </div>
  )
}

export default Input
