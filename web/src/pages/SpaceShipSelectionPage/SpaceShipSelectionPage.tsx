import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'
import SpaceShipCard from 'src/components/SpaceShipCard/SpaceShipCard'
import { useGame } from 'src/game.context'

const SpaceShipSelectionPage = () => {
  const { availableSpaceShips } = useGame()

  return (
    <>
      <MetaTags
        title="SpaceShipSelection"
        description="SpaceShipSelection page"
      />

      <div className="flex items-center justify-between">
        {availableSpaceShips.map((spaceShip, i) => (
          <SpaceShipCard
            key={i}
            spaceShipName={spaceShip.name}
            imageUrl={spaceShip.name.replace(' ', '-').toLowerCase() + '.png'}
          />
        ))}
      </div>

      <div>
        <Link to={routes.game()}>
          <Button children={'Continue'} onClick={() => {}} />
        </Link>
      </div>
    </>
  )
}

export default SpaceShipSelectionPage
