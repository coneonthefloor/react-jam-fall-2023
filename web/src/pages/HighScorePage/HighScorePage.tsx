import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Button from 'src/components/Button/Button'
import HighScoreItem from 'src/components/HighScoreItem/HighScoreItem'

const HighScorePage = () => {
  return (
    <>
      <MetaTags title="HighScore" description="HighScore page" />

      <div className="m750:px-5 m750:py-10 min-h-80 min-w-80 flex w-full max-w-full flex-col items-center justify-between rounded-md border-2 border-black bg-white px-10 py-10 my-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <HighScoreItem
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
          spaceShipName="Scimitar X"
          score={100}
        />
        <HighScoreItem
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
          spaceShipName="Kobayashi Maru"
          score={98}
        />
        <HighScoreItem
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
          spaceShipName="Scimitar X"
          score={90}
        />
        <HighScoreItem
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
          spaceShipName="Imperium Shield"
          score={72}
        />
        <HighScoreItem
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
          spaceShipName="Imperium Shield"
          score={70}
        />

        <Link to={routes.start()} className='mt-10'>
          <Button children={'Main Menu'} onClick={() => {}} />
        </Link>
      </div>
    </>
  )
}

export default HighScorePage
