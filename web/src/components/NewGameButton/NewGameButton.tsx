import Button from '../Button/Button'

const NewGameButton = () => {
  return (
    <Button children={'New Game'} onClick={() => alert('New game clicked')} />
  )
}

export default NewGameButton
