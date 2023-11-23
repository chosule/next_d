import './globals.css'
import styles from "@/app/layout.module.css"
import { Metadata } from 'next'
import Link from 'next/link'




export const metadata:Metadata = {
  title:'next',
  description:'next_study'
}

const RootLayout = ({children}:{children:React.ReactNode}) => {

  return(
    <>
      <html lang="en">
      <head/>
      <body>
        <div className={styles.bodyWrap}>
          <header className={styles.header}>
            <h1>Demo Note App</h1>
            <nav className={styles.nav}>
              <Link href="/products">Products</Link>
              <Link href="/about">About</Link>
              <Link href='/contact'>Contact</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  
    </>
   )
}


export default RootLayout