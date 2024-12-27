import { Loader2 } from 'lucide-react'
import EmojiAvatar from './EmojiAvatar'
import { cn } from '../../utils'

interface AvatarProps {
  address?: string
  loading?: boolean
  imageUrl?: string | null
  size: number
}

export const Avatar = ({ address, loading, imageUrl, size }: AvatarProps) => {
  return (
    <div className="relative overflow-hidden rounded-full" style={{ width: `${size}px`, height: `${size}px` }}>
      <div
        className={cn('absolute flex items-center justify-center overflow-hidden rounded-full')}
        style={{
          fontSize: `${Math.round(size * 0.6)}px`,
          transform: loading ? 'scale(0.72)' : undefined,
          transition: '.25s ease',
          transitionDelay: loading ? undefined : '.1s',
          willChange: 'transform',
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {!address || loading ? (
          <div className="absolute flex items-center justify-center overflow-hidden rounded-full">
            <Loader2 className={`animate-spin size-${size / 2}px`} />
          </div>
        ) : (
          <EmojiAvatar address={address} ensImage={imageUrl} size={size} />
        )}
      </div>
    </div>
  )
}
