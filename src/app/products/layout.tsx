import styles from "@/app/layout.module.css"
import Link from "next/link"

const ProductLayout = ({children}:{children:React.ReactNode}) => {
     
     return(
        <>
            <nav className={styles.nav}>
                <Link href="/products/women">여성옷</Link>
                <Link href="/products/men">남성옷</Link>
            </nav>
            <section>{children}</section>
        </>
     )
}


export default ProductLayout