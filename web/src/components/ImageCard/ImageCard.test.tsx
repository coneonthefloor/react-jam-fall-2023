import { render } from '@redwoodjs/testing/web'

import ImageCard from './ImageCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ImageCard
          imageUrl="https://a-z-animals.com/media/2022/11/shutterstock_606517310-1024x650.jpg"
          children={'ViperX'}
        />
      )
    }).not.toThrow()
  })
})
