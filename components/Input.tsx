import Checkbox from './Checkbox'

const Input = ({ rounded }: { rounded?: boolean }) => {
  return (
    <div className="relative">
      <Checkbox />
      <input
        className={`w-full text-light_lightGreyBlue dark:bg-dark_veryDarkDesaturatedBlue py-3 pr-4 pl-16 focus:outline-none ${rounded ? 'rounded' : ''}`}
        placeholder="Create a new todo.."
      />
    </div>
  )
}

export default Input
