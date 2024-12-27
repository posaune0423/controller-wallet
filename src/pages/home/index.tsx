import { useAccount } from '@starknet-react/core'
import { GlobalFooter } from '../../components/GlobalFooter'
import { ControllerConnector } from '@cartridge/connector'
import { Button } from '../../components/Button'

export const HomePage = () => {
  const { connector } = useAccount()
  const ctrlConnector = connector as unknown as ControllerConnector

  return (
    <>
      <div className="fixed flex flex-col items-center justify-center gap-4 h-screen mx-auto w-full">
        <h1 className="text-2xl font-bold text-[#ffc52a]">Home</h1>
        <Button onClick={() => ctrlConnector.controller.openProfile()}>Inventory</Button>
        <Button onClick={() => ctrlConnector.controller.openProfile('achievements')}>Achievements</Button>
        <Button onClick={() => ctrlConnector.controller.openProfile('trophies')}>Trophies</Button>
        <Button onClick={() => ctrlConnector.controller.openProfile('activity')}>Activity</Button>
      </div>
      <GlobalFooter />
    </>
  )
}
