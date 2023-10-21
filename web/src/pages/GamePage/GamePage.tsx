import { MetaTags } from '@redwoodjs/web'
import GameCanvas from 'src/components/GameCanvas/GameCanvas'
import GameGrid from 'src/components/GameGrid/GameGrid'

const GamePage = () => {
  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <div className="mx-auto flex items-center h-screen justify-center max-w-full md:max-w-screen-md lg:w-8/12">
        <GameCanvas />
        <GameGrid />
      </div>
    </>
  )
}

export default GamePage
