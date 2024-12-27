import { cn } from '../utils'

export const Button = ({
  onClick,
  className,
  children,
}: {
  onClick: () => void
  className?: string
  children: React.ReactNode
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-[#ffc52a] text-white font-bold px-4 py-2 rounded-md hover:bg-[#ffc52a]/80 transition-all duration-300 cursor-pointer',
        className,
      )}
    >
      {children}
    </button>
  )
}
