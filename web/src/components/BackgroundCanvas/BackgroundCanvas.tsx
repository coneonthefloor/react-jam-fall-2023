import { useEffect, useRef } from 'react'
import { stars } from 'src/external/stars'

const styles = {
  backgroundColor: '#1B2947', //'#280B29', //#280B29
  background:
    'radial-gradient(ellipse at center, #1B2947 0%, rgba(40,11,41,1) 100%)',
}

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    stars(canvas)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={styles}
      className="pointer-events-none fixed left-0 top-0 -z-10 h-screen w-screen"
    ></canvas>
  )
}

export default BackgroundCanvas
