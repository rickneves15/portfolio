'use client'

import { ThemeProvider } from '@material-tailwind/react'

import { Hero } from '@/Components/organisms/Hero'
import { Navbar } from '@/Components/organisms/Navbar'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="max-w-screen max-h-screen px-20">
        <Navbar />
        <Hero />
      </div>
    </ThemeProvider>
  )
}
