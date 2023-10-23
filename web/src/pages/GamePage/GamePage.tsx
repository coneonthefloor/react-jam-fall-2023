import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import GameCanvas from 'src/components/GameCanvas/GameCanvas'
import GameGrid from 'src/components/GameGrid/GameGrid'
import { updateInProgress } from 'src/game.actions'
import { useGameDispatch } from 'src/game.context'

const GamePage = () => {
  const dispatch = useGameDispatch()

  useEffect(() => {
    dispatch(updateInProgress(true))
  }, [])

  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <div className="mx-auto flex h-screen max-w-full items-center justify-center md:max-w-screen-md lg:w-8/12">
        <GameCanvas />
        <GameGrid />
      </div>
    </>
  )
}

export default GamePage
