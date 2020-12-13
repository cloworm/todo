import React, { useState } from 'react'
import Checkbox from './Checkbox'

interface Props {
  completed?: boolean
  rounded?: boolean
  value?: string
  onInputChange?: (value: string) => any
  onCheckboxChange?: (checked: boolean) => any
}

const Input = ({ rounded, value = '', completed, onInputChange, onCheckboxChange }: Props) => {
  const [text, setText] = useState(value)
  const [checked, setChecked] = useState(completed)

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if (typeof onInputChange === 'function') {
      onInputChange(e.target.value)
    }
  }

  const update2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (typeof onCheckboxChange === 'function') {
      onCheckboxChange(e.target.checked)
    }
  }

  return (
    <div className="relative">
      {/* <Checkbox completed={completed} onChange={() => toggleCompleted()} /> */}

      <div className="absolute top-2.5 left-5">
        <div className="relative">
          <input
            type="checkbox"
            className="form-checkbox border rounded-full focus:outline-none h-6 w-6 cursor-pointer"
            defaultChecked={checked}
            onChange={update2}
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
        onChange={update}
      />
    </div>
  )
}

export default Input
