import TextBanner from "src/components/TextBanner/TextBanner"

type MenuScreenLayoutProps = {
  children?: React.ReactNode
}

const MenuScreenLayout = ({ children }: MenuScreenLayoutProps) => {
  return (
    <div className="mx-auto flex h-screen max-w-full flex-col items-center justify-between px-5 py-10 md:max-w-screen-md lg:w-8/12">
      <div className="w-full">
        <TextBanner text={'Asteroid Survivor'} />
      </div>
      <>{children}</>
      <div className="w-full">
        <TextBanner text={'Created by @coneonthefloor'} />
      </div>
    </div>
  )
}

export default MenuScreenLayout
