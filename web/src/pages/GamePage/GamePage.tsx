import { MetaTags } from '@redwoodjs/web'
import ActionMenu from 'src/components/ActionMenu/ActionMenu'
import TextBanner from 'src/components/TextBanner/TextBanner'

const GamePage = () => {
  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <div className="flex h-screen max-w-full flex-col items-center justify-between px-5 py-20 lg:w-8/12 mx-auto md:max-w-screen-md">
        <div className="w-full">
          <TextBanner text={'Space Game Title'} />
        </div>
        <ActionMenu />
        <div className="w-full">
          <TextBanner text={'Created by @coneonthefloor'} />
        </div>
      </div>
    </>
  )
}

export default GamePage
