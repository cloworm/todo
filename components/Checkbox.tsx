const Checkbox = ({ completed }: { completed?: boolean }) => {
  return (
    // <div className="bg-gradient-to-br bg-clip-content from-blue-400 to-purple-600 p-10 h-10 w-10">
    <div className="absolute top-2.5 left-5">
      <div className="relative">
        <input
          type="checkbox"
          className="form-checkbox border rounded-full focus:outline-none h-6 w-6 cursor-pointer"
          defaultChecked={completed}
        />
        <img
          className="absolute top-2 left-1.5 pointer-events-none"
          src="/images/icon-check.svg"
        />
      </div>
    </div>
  )
}

export default Checkbox

// h-6 w-6 top-2.5 left-5
// bg-gradient-to-br from-blue-400 to-purple-600
