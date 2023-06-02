import { HTMLAttributes } from 'react'

type ChipProps = HTMLAttributes<HTMLLIElement> & {
  text: string
}

export function Chip({ text, ...props }: ChipProps) {
  return (
    <li
      className="grid select-none items-center whitespace-nowrap rounded-lg  bg-gray-900 px-3 py-1.5 font-sans text-xs font-bold uppercase text-white dark:bg-white dark:text-gray-900"
      {...props}
    >
      {text}
    </li>
  )
}
