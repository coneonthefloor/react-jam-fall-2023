import { Link, routes } from '@redwoodjs/router'
import Button from '../Button/Button'

const NewGameButton = () => {
  return (
    <Link to={routes.spaceShipSelection()}>
      <Button children={'New Game'} onClick={() => {}} />
    </Link>
  )
}

export default NewGameButton
