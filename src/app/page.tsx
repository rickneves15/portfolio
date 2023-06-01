'use client'
import { ThemeProvider } from '@material-tailwind/react'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="h-screen w-screen">Hello World</div>
    </ThemeProvider>
  )
}
