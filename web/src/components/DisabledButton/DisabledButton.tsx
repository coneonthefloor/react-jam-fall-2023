type DisabledButtonProps = {
  children: React.ReactNode
}

const DisabledButton = ({ children }: DisabledButtonProps) => {
  return (
    <button
      disabled
      role="button"
      aria-label="Action unavailable"
      className="flex w-full translate-x-[3px] translate-y-[3px] items-center justify-center rounded-md border-2 border-black bg-[#bc95d4] px-10 py-3 font-bold"
    >
      {children}
    </button>
  )
}

export default DisabledButton
