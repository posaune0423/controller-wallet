import { useAccount, useExplorer } from '@starknet-react/core'
import { Avatar } from '../../components/Avatar'
import { GlobalFooter } from '../../components/GlobalFooter'
import { useControllerUsername } from '../../hooks/useControllerUsername'
import { truncateAddress } from '../../utils'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../components/Button'

export const MyPage = () => {
  const { address } = useAccount()
  const { username } = useControllerUsername()
  const [isCopied, setIsCopied] = useState(false)
  const explorer = useExplorer()

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address ?? '')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className="fixed flex flex-col items-center justify-center gap-4 h-screen mx-auto w-full">
        <Avatar address={address} loading={!address} size={80} />
        <h1 className="text-2xl font-bold text-[#ffc52a]">{username}</h1>

        <button onClick={handleCopyAddress} className="text-gray-300 flex items-center gap-2">
          <p className="text-gray-500">{truncateAddress(address ?? '')}</p>
          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
        <Button>
          <a href={explorer?.contract(address ?? '')} target="_blank">
            Go to Explore
          </a>
        </Button>
      </div>
      <GlobalFooter />
    </>
  )
}
