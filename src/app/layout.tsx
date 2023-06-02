import './globals.css'
// eslint-disable-next-line camelcase
import { Inter, Grape_Nuts, Montserrat } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '500'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-montserrat',
})

const grapeNuts = Grape_Nuts({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-grape-nuts',
})

export const metadata = {
  title: 'Richard Neves',
  description:
    'Este é o meu portfólio pessoal, onde compartilho projetos e trabalhos que desenvolvi ao longo da minha carreira. Aqui você encontrará uma variedade de projetos, desde desenvolvimento web até análise de dados.',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="dark">
      <body
        className={`${inter.variable} ${montserrat.variable} ${grapeNuts.variable} bg-white font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
