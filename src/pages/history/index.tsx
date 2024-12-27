import { useAccount } from '@starknet-react/core'
import { Button } from '../../components/Button'
import { GlobalFooter } from '../../components/GlobalFooter'
import { ControllerConnector } from '@cartridge/connector'

export const HistoryPage = () => {
  const { connector } = useAccount()
  const ctrlConnector = connector as unknown as ControllerConnector

  return (
    <>
      <div className="fixed flex flex-col items-center justify-center gap-4 h-screen mx-auto w-full">
        <Button onClick={() => ctrlConnector.controller.openProfile('activity')}>Activity</Button>
      </div>
      <GlobalFooter />
    </>
  )
}
