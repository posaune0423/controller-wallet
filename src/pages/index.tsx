import { Connector, useAccount, useConnect } from '@starknet-react/core'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '../components/Button'

export const TopPage = () => {
  const navigate = useNavigate()
  const { address } = useAccount()
  const { connectAsync, connectors } = useConnect()

  useEffect(() => {
    if (address) {
      navigate('/home')
    }
  }, [address, navigate])

  const handleConnect = useCallback(
    async (connector: Connector) => {
      try {
        await connectAsync({ connector })
        toast.success('Successfully logged in')
      } catch (error) {
        console.error(error)
        toast.error('Wallet is not installed')
      }
    },
    [connectAsync],
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 className="text-2xl font-bold text-[#ffc52a]">Controller Wallet</h1>
      <Button onClick={() => handleConnect(connectors[0])}>Connect</Button>
    </div>
  )
}
