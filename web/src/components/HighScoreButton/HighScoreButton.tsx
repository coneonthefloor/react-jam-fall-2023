import Button from '../Button/Button'

const HighScoreButton = () => {
  return (
    <Button
      children={'High Score'}
      onClick={() => alert('Hi score button clicked')}
    />
  )
}

export default HighScoreButton
