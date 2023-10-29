import { Link, routes } from '@redwoodjs/router'
import Button from '../Button/Button'
import HighScoreItem from '../HighScoreItem/HighScoreItem'
import TextBanner from '../TextBanner/TextBanner'

type GameOverCardProps = {
  shipName: string
  score: number
}

const GameOverCard = (props: GameOverCardProps) => {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6/12'>
      <TextBanner text="Game Over" />
      <div className="m750:px-5 m750:py-10 min-h-80 min-w-80 my-10 flex w-full max-w-full flex-col items-center justify-between rounded-md border-2 border-black bg-[#1B2947] px-10 py-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <HighScoreItem
          imageUrl={props.shipName.replace(' ', '-').toLowerCase() + '.png'}
          spaceShipName={props.shipName}
          score={props.score}
        />

        <Link to={routes.start()} className="mt-10">
          <Button children={'Main Menu'} onClick={() => {}} />
        </Link>
      </div>
    </div>
  )
}

export default GameOverCard
