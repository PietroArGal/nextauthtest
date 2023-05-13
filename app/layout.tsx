import AuthContext from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cachuelos App',
  description: 'App de trabajos espontaneos',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
