type ButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      role="button"
      aria-label="Click to perform an action"
      onClick={onClick}
      className="flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-black bg-[#1B2947] text-white px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    >
      {children}
    </button>
  )
}

export default Button
