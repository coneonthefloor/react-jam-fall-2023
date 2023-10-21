import { useEffect, useRef } from 'react'

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
  }, [])

  return <canvas ref={canvasRef} className="fixed h-full w-full"></canvas>
}

export default GameCanvas
