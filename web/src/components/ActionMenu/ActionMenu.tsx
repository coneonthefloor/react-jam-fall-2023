import HighScoreButton from '../HighScoreButton/HighScoreButton'
import NewGameButton from '../NewGameButton/NewGameButton'

const ActionMenu = () => {
  return (
    <div className="max-w-full m750:px-5 m750:py-10 flex h-80 w-80 flex-col items-center justify-between rounded-md border-2 border-black bg-[#1B2947] px-10 py-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <NewGameButton />
      <HighScoreButton />
    </div>
  )
}

export default ActionMenu
