import Image from "next/image"
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

interface HexagonProfileProps {
  name: string
  image: string
  socialLinks?: boolean
}

export function HexagonProfile({ name, image, socialLinks = false }: HexagonProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative aspect-square w-full max-w-[240px] overflow-hidden hexagon">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      {socialLinks && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-2 text-center font-semibold text-white">
            {name}
          </div>
          <div className="flex gap-2">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-blue-600" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-pink-600" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-blue-400" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-blue-700" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="h-5 w-5 text-red-500" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-800" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

