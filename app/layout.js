// import './globals.css'
import Navbar from '@/(components)/navbar/navbar';
import { Inter } from 'next/font/google';
import style from '@/style/home/homeScreen.module.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  let date =  new Date();
  let year = date.getFullYear();

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar/> */}
        {children}
        {/* <div className={style.footerBlack}>
          <p className={style.footerText}>{`©${year} Appears Interior Studio Inc. `}</p>
        </div> */}
      </body>
    </html>
  )
}
