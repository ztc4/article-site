import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Article Cradt',
  description: 'Article site by Zachary Coats',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`} >{children}</body>
        <div className='bg-neutral-700 text-neutral-100 gap-8 font-semibold mt-8 h-36 flex flex-wrap flex-row justify-center items-center'>
          <p>Portfolio:<span className='text-purple-500'>zachary4coats@gmail.com </span></p>
          <p>GITHUB:<Link className='text-purple-500' href='https://github.com/ztc4/article-site'>https://github.com/ztc4/article-site</Link></p>

        </div>
    </html>
  )
}
