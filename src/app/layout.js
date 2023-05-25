
import { Mulish } from 'next/font/google';
const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
});

import './globals.css'

import Footer from './components/Footer';
import Header from './components/Header'

export const metadata = {
  title: 'Web App',
  description: 'Created by Atri Technical',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
