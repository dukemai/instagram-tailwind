import './globals.css'
import Menu from './Menu'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='grid grid-cols-5 p-0 dark:bg-slate-800 dark:text-white'>
        <Menu />
        <div className='col-span-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
