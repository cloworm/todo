import React, { useCallback } from 'react'

interface Props {
  completed?: boolean
  rounded?: boolean
  value?: string
  onInputChange: (value: string) => void
  onCheckboxChange: (checked: boolean) => void
  onDelete: () => void
  readonly?: boolean
  showDelete?: boolean
}

const Input = ({ rounded, value = '', completed, onInputChange, onCheckboxChange, showDelete, onDelete, readonly }: Props) => {
  const updateInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value)
  }, [onInputChange])

  const updateChecked = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(e.target.checked)
  }, [onCheckboxChange])

  const handleInputClick = useCallback(() => {
    if (!readonly) return

    onCheckboxChange(!completed)
  }, [onCheckboxChange, readonly, completed])

  return (
    <div className="relative">
      <div className="absolute top-2.5 left-5">
        <div className="relative">
          <input
            type="checkbox"
            className="form-checkbox border rounded-full focus:outline-none h-6 w-6 cursor-pointer"
            checked={completed}
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
        value={value}
        onChange={updateInput}
        onClick={handleInputClick}
        readOnly={readonly}
      />

      <img
        src="/images/icon-cross.svg"
        className={`absolute top-3.5 right-5 cursor-pointer w-5 h-5 p-1 ${showDelete ? '' : 'invisible'}`}
        onClick={onDelete}
      />
    </div>
  )
}

export default Input
