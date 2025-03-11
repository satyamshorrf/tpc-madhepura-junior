import Link from "next/link"

interface InfoCardProps {
  title: string
  content: string
  buttonText?: string
  buttonLink?: string
}

export function InfoCard({ title, content, buttonText = "Click Here", buttonLink = "#" }: InfoCardProps) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 bg-[#e0f7f6] p-8 md:p-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-800">{content}</p>
        </div>
        {buttonText && (
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href={buttonLink}
              className="rounded-full bg-[#001f3f] px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-900"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-1 items-center justify-center border-l border-gray-300 bg-[#e0f7f6] p-8 md:p-12">
        <h3 className="text-center font-serif text-4xl font-bold text-[#001f3f]">{title}</h3>
      </div>
    </div>
  )
}

