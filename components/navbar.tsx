"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="https://github.com/user-attachments/assets/3047a20b-df1d-4217-b846-c7c21ef2427b"
              alt="TPC Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-lg font-semibold uppercase tracking-wider">
          <NavLinks />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 p-4">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  )
}

// Navigation Links Component
function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 text-lg">
      {[
        { href: "/", label: "Home" },
        { href: "/contact", label: "Contact Us" },
        { href: "/goals", label: "Our Goals" },
        { href: "/about", label: "About Us" }
      ].map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-blue-300" onClick={onClick}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}
