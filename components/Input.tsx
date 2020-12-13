import React, { useState } from 'react'
import Checkbox from './Checkbox'

interface Props {
  completed?: boolean
  rounded?: boolean
  value?: string
  onChange?: any
}

const Input = ({ rounded, value = '', completed, onChange }: Props) => {
  const [text, setText] = useState(value)

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    if (typeof onChange === 'function') {
      onChange(e.target.value)
    }
  }

  return (
    <div className="relative">
      <Checkbox completed={completed} />

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
