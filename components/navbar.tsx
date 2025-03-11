import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=48&width=48"
              alt="TPC Logo"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </Link>
        <div className="flex items-center gap-8 text-lg font-semibold uppercase tracking-wider">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact Us
          </Link>
          <Link href="/goals" className="hover:text-blue-300">
            Our Goals
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  )
}

