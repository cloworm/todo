const Checkbox = ({ completed }: { completed?: boolean }) => {
  return (
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
