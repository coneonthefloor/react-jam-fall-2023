type ImageCardProps = {
  imageUrl: string
  children: React.ReactNode
}

const ImageCard = ({ imageUrl, children }: ImageCardProps) => {
  return (
    <figure className="w-full overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="text-center border-t-2 border-black p-4">
        {children}
      </figcaption>
    </figure>
  )
}

export default ImageCard
