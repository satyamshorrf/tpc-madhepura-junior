import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

interface HexagonProfileProps {
  name: string;
  image: string;
  role: string;
  socialLinks?: boolean;
  profileLink?: string; // Redirect URL when clicking on hexagon
}

export function HexagonProfile({ name, image, socialLinks = false, profileLink = "#" }: HexagonProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Link href={profileLink} className="relative aspect-square w-full max-w-[240px] overflow-hidden hexagon group">
        {/* Hexagon Image */}
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
        />

        {/* Name Overlay (Appears on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white font-semibold text-lg">{name}</span>
        </div>
      </Link>

      {/* Social Links */}
      {socialLinks && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500 px-6 py-2 text-center font-semibold text-white">
            {name}
          </div>
          <div className="flex gap-2">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-blue-600 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-pink-600 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-blue-400 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-blue-700 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="Email">
              <Mail className="h-5 w-5 text-red-500 hover:scale-110 transition-transform" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-gray-800 hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
