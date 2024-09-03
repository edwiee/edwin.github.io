import Link from "next/link"
import { Button } from "./button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
      
      {/* L O G O */}
      <Link href="/">
      <h1 className="text-4xl font-semibold">
        Edwin<span className="text-accent">.</span>
        </h1>
      </Link>

      {/* DESKTOP MENU & HIRE ME BUTTON*/}
      <div className="hidden xl:flex items-center gap-8">
      <Nav />

      <Link href="/contact">
      <Button>Say Hello!</Button>
      </Link>

      </div>

      {/* MOBILE NAV */}
      <div className="xl:hidden">
        <MobileNav />
      </div>


    </div>
  </header>
}

export default Header
