import Button from '../Button/Button'
import ImageCard from '../ImageCard/ImageCard'

type SpaceShipCardProps = {
  imageUrl: string
  spaceShipName: string
}

const SpaceShipCard = ({ imageUrl, spaceShipName }: SpaceShipCardProps) => {
  return (
    <div className="max-w-full w-3/12">
      <div className="mb-4">
        <ImageCard imageUrl={imageUrl} children={spaceShipName} />
      </div>

      <Button children={'Select'} onClick={() => {}} />
    </div>
  )
}

export default SpaceShipCard
