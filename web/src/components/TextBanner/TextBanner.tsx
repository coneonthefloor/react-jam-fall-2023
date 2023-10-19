type Props = {
  text: string
}

const TextBanner = ({ text }: Props) => {
  return (
    <div className="w-full rounded-md border-2 border-black bg-[#bc95d4] p-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl text-center">{text}</h2>
    </div>
  )
}

export default TextBanner
