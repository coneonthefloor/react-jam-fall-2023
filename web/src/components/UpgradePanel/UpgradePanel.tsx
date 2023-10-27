import { SpaceShipUpgrade } from 'src/game/space-ship'
import Button from '../Button/Button'
import Badge from '../Badge/Badge'
import React from 'react'

type UpgradePanelProps = {
  upgrades: SpaceShipUpgrade[]
}

const UpgradePanel = ({ upgrades }: UpgradePanelProps) => {
  return (
    <div className="flex justify-around items-center w-full rounded-md border-2 border-black bg-[#1B2947] p-4 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
      {upgrades.map((upgrade, i) => {
        const text = `🪙${upgrade.cost} - ${upgrade.name}`
        return (
          <React.Fragment key={i}>
            <div className='relative w-full flex justify-center'>
              <div className='absolute left-0 -top-2 z-[2]'>
                <Badge badgeText={(i + 1).toString()} />
              </div>
              <div className='w-[85%]'>
                <Button  children={text} onClick={upgrade.callback} />
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default UpgradePanel
