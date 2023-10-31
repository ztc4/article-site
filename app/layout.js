import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARTICLE CRAFT',
  description: 'Article site by Zachary Coats',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen `} >{children}</body>
        <div className='bg-[#000000] text-neutral-100 gap-1 font-semibold  h-36 flex flex-wrap flex-col justify-center items-center'>
          <div>ARTICLECRAFT</div>
          <Link className='text-[#888888] font-semibold tracking-tighter' href='https://github.com/ztc4/article-site'>GITHUB</Link>
          <Link className='text-[#888888] font-semibold tracking-tighter' href='https://ztc4-github-io.vercel.app/'>PORTFOLIO</Link>
          <p className='text-[#888888] font-semibold tracking-tighter'>ZACHARY4COATS@GMAIL.COM</p>

        </div>
    </html>
  )
}
