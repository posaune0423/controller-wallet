import { useAccount, useConnect } from '@starknet-react/core'
import { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { Button } from '../components/Button'
import { useHaptic } from 'use-haptic'

export const TopPage = () => {
  const navigate = useNavigate()
  const { address } = useAccount()
  const { connectAsync, connectors } = useConnect()
  const { vibe } = useHaptic()

  useEffect(() => {
    if (address) {
      navigate('/home')
    }
  }, [address, navigate])

  const handleConnect = useCallback(async () => {
    vibe()
    try {
      await connectAsync({ connector: connectors[0] })
      toast.success('Successfully logged in')
    } catch (error) {
      console.error(error)
      toast.error('Wallet is not installed')
    }
  }, [connectAsync, vibe, connectors])

  return (
    <div className="fixed flex flex-col items-center justify-center gap-4 h-screen mx-auto w-full">
      <h1 className="text-2xl font-bold text-[#ffc52a]">Controller Wallet</h1>
      <Button onClick={handleConnect}>Connect</Button>
    </div>
  )
}
