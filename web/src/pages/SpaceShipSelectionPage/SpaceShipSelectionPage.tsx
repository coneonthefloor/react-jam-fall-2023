import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'
import SpaceShipCard from 'src/components/SpaceShipCard/SpaceShipCard'

const SpaceShipSelectionPage = () => {
  return (
    <>
      <MetaTags
        title="SpaceShipSelection"
        description="SpaceShipSelection page"
      />

      <div className="flex items-center justify-between md:px-10">
        <SpaceShipCard
          spaceShipName="Scimitar X"
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
        />

        <SpaceShipCard
          spaceShipName="Imperium Shield"
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
        />

        <SpaceShipCard
          spaceShipName="Kobayashi Maru"
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
        />
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
