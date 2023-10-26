const Badge = ({ badgeText }: { badgeText: string }) => {
  return (
    <div className="w-min rounded-full border-2 border-black bg-[#1B2947] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {badgeText}
    </div>
  )
}

export default Badge
