import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'
import SpaceShipCard from 'src/components/SpaceShipCard/SpaceShipCard'
import { updateGold, updateHealth, updateScore } from 'src/game.actions'
import { useGame, useGameDispatch } from 'src/game.context'

const SpaceShipSelectionPage = () => {
  const { availableSpaceShips } = useGame()
  const dispatch = useGameDispatch()

  return (
    <>
      <MetaTags
        title="SpaceShipSelection"
        description="SpaceShipSelection page"
      />

      <div className="flex items-center justify-between">
        {availableSpaceShips.map((name, i) => (
          <SpaceShipCard
            key={i}
            spaceShipName={name}
            imageUrl={name.replace(' ', '-').toLowerCase() + '.png'}
          />
        ))}
      </div>

      <div>
        <Link to={routes.game()}>
          <Button
            children={'Continue'}
            onClick={() => {
              dispatch(updateGold(0))
              dispatch(updateHealth(3))
              dispatch(updateScore(0))
            }}
          />
        </Link>
      </div>
    </>
  )
}

export default SpaceShipSelectionPage
