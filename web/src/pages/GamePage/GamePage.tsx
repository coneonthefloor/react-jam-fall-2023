import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import GameCanvas from 'src/components/GameCanvas/GameCanvas'
import GameGrid from 'src/components/GameGrid/GameGrid'
import GameOverCard from 'src/components/GameOverCard/GameOverCard'
import StatsPanel from 'src/components/StatsPanel/StatsPanel'
import UpgradePanel from 'src/components/UpgradePanel/UpgradePanel'
import { updateInProgress } from 'src/game.actions'
import { useGame, useGameDispatch } from 'src/game.context'
import SpaceShip from 'src/game/space-ship'

const GamePage = () => {
  const state = useGame()
  const dispatch = useGameDispatch()

  useEffect(() => {
    dispatch(updateInProgress(true))
  }, [])

  const ship = new SpaceShip()

  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <div className="mx-auto flex flex-col h-screen max-w-full items-center justify-center md:max-w-screen-md lg:w-8/12">
        <GameCanvas />
        <div className='mb-2 w-full z-10'>
          <StatsPanel />
        </div>
        <GameGrid />
        <div className='mt-2 w-full z-10'>
          <UpgradePanel upgrades={ship.upgrades} />
        </div>
        {state.gameInProgress ? null : (
          <GameOverCard
            score={state.score}
            shipName={state.selectedSpaceShipName}
          />
        )}
      </div>
    </>
  )
}

export default GamePage
