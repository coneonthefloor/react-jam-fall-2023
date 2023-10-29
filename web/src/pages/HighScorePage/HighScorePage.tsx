import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import Button from 'src/components/Button/Button'
import HighScoreItem from 'src/components/HighScoreItem/HighScoreItem'
import { ImperiumShield, KobayashiMaru, ScimitarX } from 'src/game/space-ship'

type Score = {
  spaceShip: string
  score: number
}

const HighScorePage = () => {
  let highScores: Score[] = []
  let rawScores = window.localStorage.getItem('scores')
  if (!rawScores) {
    rawScores = JSON.stringify([
      { score: 45, spaceShip: ImperiumShield.name },
      { score: 38, spaceShip: KobayashiMaru.name },
      { score: 24, spaceShip: ScimitarX.name },
    ])
    window.localStorage.setItem('scores', rawScores)
  }

  const scores: Score[] = JSON.parse(rawScores)
  highScores = scores
    .sort((a, b) => {
      if (a.score > b.score) {
        return -1
      }
      if (a.score < b.score) {
        return 1
      }
      return 0
    })
    .slice(0, 3)

  return (
    <>
      <MetaTags title="HighScore" description="HighScore page" />

      <div className="m750:px-5 m750:py-10 min-h-80 min-w-80 my-10 flex w-full max-w-full flex-col items-center justify-between rounded-md border-2 border-black bg-[#1B2947] px-10 py-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {highScores.map(({ score, spaceShip }, i) => (
          <HighScoreItem
            key={i}
            imageUrl={spaceShip.replace(' ', '-').toLowerCase() + '.png'}
            spaceShipName={spaceShip}
            score={score}
          />
        ))}

        <Link to={routes.start()} className="mt-10">
          <Button children={'Main Menu'} onClick={() => {}} />
        </Link>
      </div>
    </>
  )
}

export default HighScorePage
