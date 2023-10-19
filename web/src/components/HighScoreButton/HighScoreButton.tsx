import { Link, routes } from '@redwoodjs/router'
import Button from '../Button/Button'

const HighScoreButton = () => {
  return (
    <Link to={routes.highScore()}>
      <Button children={'High Score'} onClick={() => {}} />
    </Link>
  )
}

export default HighScoreButton
