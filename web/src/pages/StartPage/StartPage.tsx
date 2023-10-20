import { MetaTags } from '@redwoodjs/web'
import ActionMenu from 'src/components/ActionMenu/ActionMenu'

const StartPage = () => {
  return (
    <>
      <MetaTags title="Start" description="Start page" />

      <ActionMenu />
    </>
  )
}

export default StartPage
