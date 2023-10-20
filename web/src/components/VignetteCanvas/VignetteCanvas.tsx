import { useEffect, useRef } from 'react'
import { hsla } from 'src/game/color'
import { isEven } from 'src/game/math'

const drawCRTLines = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.save()

  for (let y = 0; y < h; y += 1) {
    const even = isEven(y)
    const light = even ? 0 : 50
    ctx.fillStyle = hsla(0, 50, light, even ? 0.5 : 0)
    ctx.fillRect(0, y, w, 1)
  }

  ctx.restore()
}

const drawCRTGradient = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  alpha = 0
) => {
  ctx.save()

  const gradient = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, h)
  gradient.addColorStop(0.1, hsla(0, 0, 100, alpha))
  gradient.addColorStop(0.7, hsla(0, 0, 0, alpha + 0.1))
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, w, h)

  ctx.restore()
}

const generateCRTVignette = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) => {
  drawCRTLines(ctx, w, h)
  drawCRTGradient(ctx, w, h)

  return ctx.getImageData(0, 0, w, h)
}

const VignetteCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const width = (canvas.width = window.innerWidth)
    const height = (canvas.height = window.innerHeight)
    const context = canvas.getContext('2d')
    const vignette = generateCRTVignette(context, width, height)
    context.putImageData(vignette, 0, 0)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed left-0 top-0 h-screen w-screen"
    ></canvas>
  )
}

export default VignetteCanvas
