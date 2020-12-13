const Input = () => {
  return (
    <div className="relative">
      <span
        className="absolute h-6 w-6 top-2.5 left-5 border border-light_veryLightGreyBlue rounded-full cursor-pointer"
      ></span>
      <input
        className="w-full rounded text-light_lightGreyBlue dark:bg-dark_veryDarkDesaturatedBlue py-3 pr-4 pl-16 focus:outline-none"
        placeholder="Create a new todo.."
      />
    </div>
  )
}

export default Input
