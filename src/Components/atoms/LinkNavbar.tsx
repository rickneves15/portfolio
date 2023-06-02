import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type LinkNavbarProps = LinkProps & {
  children: ReactNode
}

export function LinkNavbar({ children, ...props }: LinkNavbarProps) {
  return (
    <span className="group">
      <div className="group -mt-2 mb-1.5 ml-[50%] h-1.5 w-1.5 rounded-full transition-all duration-300 ease-in-out group-hover:bg-enigma-gradient " />
      <Link
        className="group-hover::font-medium group-hover:link-navbar font-light capitalize transition-all duration-300 ease-in-out"
        href="#"
      >
        {children}
      </Link>
    </span>
  )
}
