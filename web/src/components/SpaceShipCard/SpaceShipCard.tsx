import { useGame, useGameDispatch } from 'src/game.context'
import Button from '../Button/Button'
import ImageCard from '../ImageCard/ImageCard'
import { selectSpaceShip } from 'src/game.actions'
import DisabledButton from '../DisabledButton/DisabledButton'

type SpaceShipCardProps = {
  imageUrl: string
  spaceShipName: string
}

const SpaceShipCard = ({ imageUrl, spaceShipName }: SpaceShipCardProps) => {
  const state = useGame()
  const dispatch = useGameDispatch()

  const isSelected = state.selectedSpaceShipName === spaceShipName

  return (
    <div className="w-3/12 max-w-full">
      <div className="mb-4">
        <ImageCard imageUrl={imageUrl} children={spaceShipName} />
      </div>

      {isSelected ? (
        <DisabledButton children={'Selected'} />
      ) : (
        <Button
          children={'Select'}
          onClick={() => dispatch(selectSpaceShip(spaceShipName))}
        />
      )}
    </div>
  )
}

export default SpaceShipCard
