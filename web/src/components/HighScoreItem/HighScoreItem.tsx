import Avatar from '../Avatar/Avatar'

type HighScoreItemProps = {
  score: number
  imageUrl: string
  spaceShipName: string
}

const HighScoreItem = ({
  score,
  imageUrl,
  spaceShipName,
}: HighScoreItemProps) => {
  return (
    <div className='flex items-center justify-between h-16 text-2xl w-full mb-4 text-white'>
      <div className='z-20'>
        <Avatar imageUrl={imageUrl} />
      </div>
      <div>
        <span>{spaceShipName}</span>
      </div>
      <div>
        <span>{score}</span>
      </div>
    </div>
  )
}

export default HighScoreItem
