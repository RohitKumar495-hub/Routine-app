interface ButtonProps {
    label : string
    handleClick ?: () => void
}

const Button = ( { label, handleClick } : ButtonProps ) => {
  return (
    <button className="bg-[#4b2e1e] text-white text-xs px-2 py-2 rounded-lg font-semibold cursor-pointer" onClick={handleClick}>{label}</button>
  )
}

export default Button