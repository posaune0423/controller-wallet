import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const truncateAddress = (address: string) => {
  const truncateRegex = /^(0x[a-zA-Z0-9]{6})[a-zA-Z0-9]+([a-zA-Z0-9]{6})$/
  const match = address.match(truncateRegex)
  if (!match || match.length < 3) return address
  return `${match[1]}…${match[2]}`
}
