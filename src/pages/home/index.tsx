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
        <Button onClick={() => ctrlConnector.controller.openProfile()}>Inventory</Button>
      </div>
      <GlobalFooter />
    </>
  )
}
