import { useGame } from 'src/game.context'

const StatsPanel = () => {
  const state = useGame()
  const hearts: string[] = []
  for (let i = 0; i < state.health; i++) {
    hearts.push('❤️')
  }
  while (hearts.length < 3) {
    hearts.push('🤍')
  }
  return (
    <div className="flex w-full items-center justify-between rounded-md border-2 border-black bg-[#1B2947] p-4 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div>
        <span>{hearts}</span>
      </div>
      <div>
        <span>🪙 {state.gold}</span>
      </div>
      <div>
        <span>Score: {state.score}</span>
      </div>
    </div>
  )
}

export default StatsPanel
