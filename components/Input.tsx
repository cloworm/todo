import React, { useState } from 'react'

interface Props {
  completed?: boolean
  rounded?: boolean
  value?: string
  onInputChange?: (value: string) => void
  onCheckboxChange?: (checked: boolean) => void
  onDelete: () => void
  readonly?: boolean
}

const Input = ({ rounded, value = '', completed, onInputChange, onCheckboxChange, onDelete, readonly }: Props) => {
  const [text, setText] = useState(value)
  const [checked, setChecked] = useState(completed)

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if (typeof onInputChange === 'function') {
      onInputChange(e.target.value)
    }
  }

  const updateChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (typeof onCheckboxChange === 'function') {
      onCheckboxChange(e.target.checked)
    }
  }

  const deleteTodo = () => {
    onDelete()
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
          />
          <img
            className="absolute top-2 left-1.5 pointer-events-none"
            src="/images/icon-check.svg"
          />
        </div>
      </div>

      <input
        type="text"
        className={`w-full text-light_lightGreyBlue dark:bg-dark_veryDarkDesaturatedBlue py-3 pr-4 pl-16 focus:outline-none disabled:text-light_darkGreyBlue ${rounded ? 'rounded' : ''}`}
        placeholder="Create a new todo.."
        value={text}
        onChange={updateInput}
        readOnly={readonly}
      />

      <img
        src="/images/icon-cross.svg"
        className="absolute top-3.5 right-5 cursor-pointer w-5 h-5 p-1"
        onClick={deleteTodo}
      />
    </div>
  )
}

export default Input
