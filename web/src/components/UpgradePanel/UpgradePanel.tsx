import { SpaceShipUpgrade } from 'src/game/space-ship'
import Button from '../Button/Button'

type UpgradePanelProps = {
  upgrades: SpaceShipUpgrade[]
}

const UpgradePanel = ({ upgrades }: UpgradePanelProps) => {
  return (
    <div className="space-between flex w-full rounded-md border-2 border-black bg-[#1B2947] p-4 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {upgrades.map((upgrade, i) => {
        const text = `$${upgrade.cost} ${upgrade.name}`
        return <Button key={i} children={text} onClick={upgrade.callback} />
      })}
    </div>
  )
}

export default UpgradePanel
