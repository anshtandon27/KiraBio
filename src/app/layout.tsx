import { Metadata } from 'next'
import { ClientLayout } from './client.layout'

export const metadata: Metadata = {
  title: 'KiraBio',
  description: 'KiraBio',

  generator: 'Marblism',
  manifest: '/manifest.json',
  keywords: ['marblism', 'next14', 'pwa', 'next-pwa'],
  authors: [],
  icons: {
    icon: '/pwa/KiraBio Favicon.jpeg',
    apple: '/pwa/KiraBio Favicon.jpeg',
  },
}

export const viewport = {
  minimumScale: 1,
  maximumScale: 1,
  initialScale: 1,
  userScalable: 'no',
  width: 'device-width',
  shrinkToFit: 'no',
  viewportFit: 'cover',
}

export default function RootLayout(props) {
  return (
    <>
      <ClientLayout {...props} />
    </>
  )
}
