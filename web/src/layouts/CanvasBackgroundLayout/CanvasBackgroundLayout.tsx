import BackgroundCanvas from 'src/components/BackgroundCanvas/BackgroundCanvas'
import VignetteCanvas from 'src/components/VignetteCanvas/VignetteCanvas'

type CanvasBackgroundLayoutProps = {
  children?: React.ReactNode
}

const CanvasBackgroundLayout = ({ children }: CanvasBackgroundLayoutProps) => {
  return (
    <>
      <BackgroundCanvas />
      {children}
      <VignetteCanvas />
    </>
  )
}

export default CanvasBackgroundLayout
