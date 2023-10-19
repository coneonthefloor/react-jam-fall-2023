import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ActionMenu from 'src/components/ActionMenu/ActionMenu'
import TextBanner from 'src/components/TextBanner/TextBanner'

const StartPage = () => {
  return (
    <>
      <MetaTags title="Start" description="Start page" />

      <ActionMenu />
    </>
  )
}

export default StartPage
