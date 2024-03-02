import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {MountainIcon, } from "lucide-react"
import { useRouter } from 'next/router';


export function Navbar(){
    return(
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="./feature">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="./pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="./about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="./contact">
          Contact
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="./login">
          Login
        </Link>
      </nav>
    </header>
    )
}

