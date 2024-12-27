'use client'

import { cn } from '../utils'
import { Home, User2, Trophy, History } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useHaptic } from 'use-haptic'
import { isPWA } from '../utils/pwa'

const FooterItems: {
  icon: React.ElementType
  href: string
}[] = [
  {
    icon: Home,
    href: '/home',
  },
  {
    icon: Trophy,
    href: '/achievement',
  },
  {
    icon: History,
    href: '/history',
  },
  {
    icon: User2,
    href: '/my',
  },
]

export const GlobalFooter: React.FC = () => {
  const { vibe } = useHaptic()
  const location = useLocation()

  return (
    <nav
      className={cn(
        'bg-[#0c0c0c] fixed bottom-0 left-0 right-0 flex min-h-[60px] items-center justify-around border-t border-gray-700 px-6 shadow-sm shadow-gray-700',
        isPWA() && 'pb-8 pt-4',
      )}
    >
      {FooterItems.map((item) => (
        <Link
          to={item.href}
          key={item.href}
          className={cn('flex flex-col items-center text-gray-400', location.pathname === item.href && 'text-gray-200')}
          onClick={() => {
            vibe()
          }}
        >
          <item.icon />
        </Link>
      ))}
    </nav>
  )
}
