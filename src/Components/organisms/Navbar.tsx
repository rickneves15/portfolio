'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

import { LinkNavbar } from '../atoms/LinkNavbar'

const links = [
  { title: 'Resume', id: 'resume' },
  { title: 'Skills', id: 'skills' },
  { title: 'Experience', id: 'experience' },
  { title: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const handleChangeTheme = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode)
    isDarkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }

  return (
    <div className="flex items-center py-10">
      <span className="text-2xl font-extralight">Richard Neves</span>
      <div className="flex flex-1 items-center justify-end gap-7">
        <nav className="flex gap-7">
          {links.map((link, index) => (
            <LinkNavbar key={index} href="#">
              {link.title}
            </LinkNavbar>
          ))}
        </nav>
        <Link href="#" onClick={(e) => handleChangeTheme(!isDarkMode)}>
          {isDarkMode ? (
            <SunIcon className="h-6 w-6 text-gray-100" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-900" />
          )}
        </Link>
      </div>
    </div>
  )
}
