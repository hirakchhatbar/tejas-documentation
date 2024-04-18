import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function scrollTo(id) {
  const element = document.getElementById(id)
  element.scrollIntoView({ behavior: 'smooth' })
}
