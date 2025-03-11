import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-6">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-blue-400 hover:text-blue-300" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-pink-400 hover:text-pink-300" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-blue-400 hover:text-blue-300" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-blue-400 hover:text-blue-300" />
          </Link>
          <Link href="#" aria-label="Email">
            <Mail className="h-6 w-6 text-red-400 hover:text-red-300" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-6 w-6 text-white hover:text-gray-300" />
          </Link>
        </div>
        <p className="text-center text-sm text-gray-400">© 2024 TPC MADHEPURA. All rights reserved.</p>
      </div>
    </footer>
  )
}

