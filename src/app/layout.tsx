import "./globals.css";
import styles from "@/app/layout.module.css";
import { Metadata } from "next";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

//폰트적용
const openSans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "next",
  description: "next_study",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en" className={openSans.className}>
        <head />
        <body>
          <div className={styles.bodyWrap}>
            <header className={styles.header}>
              <h1 className={gothic.className}>Demo Note App</h1>
              <nav className={styles.nav}>
                <Link href="/products">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </header>
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
