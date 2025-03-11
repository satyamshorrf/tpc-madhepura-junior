import type React from "react"
interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="mb-12 text-center font-serif text-5xl font-bold tracking-wider text-[#001f3f]">{children}</h2>
}

