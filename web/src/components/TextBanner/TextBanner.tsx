type Props = {
  text: string
}

const TextBanner = ({ text }: Props) => {
  return (
    <div className="w-full rounded-md border-2 border-black bg-[#1B2947] text-white p-4 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl text-center">{text}</h2>
    </div>
  )
}

export default TextBanner
