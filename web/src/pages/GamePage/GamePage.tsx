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
  const [ship, setShip] = useState(new SpaceShip())

  useEffect(() => {
    dispatch(updateInProgress(true))
  }, [])

  useEffect(() => {
    if ((window as any).spaceShip) {
      setShip((window as any).spaceShip)
    }
  }, [state])

  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <div className="mx-auto flex h-screen max-w-full flex-col items-center justify-center md:max-w-screen-md lg:w-8/12">
        <GameCanvas />
        <div className="z-10 mb-2 w-full">
          <StatsPanel />
        </div>
        <GameGrid />
        <div className="z-10 mt-2 w-full">
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
