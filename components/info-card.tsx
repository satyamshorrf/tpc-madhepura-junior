import Link from "next/link";

interface InfoCardProps {
  title: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  media?: string; // URL for image or video
  reverse?: boolean; // For alternating layout
}

export function InfoCard({ title, content, buttonText = "Click Here", buttonLink = "#", media, reverse = false }: InfoCardProps) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      <div className="flex-1 bg-[#e0f7f6] p-8 md:p-12 flex flex-col justify-end">
      <h3 className="text-center font-serif text-4xl font-bold text-[#001f3f] mb-4">{title}</h3>
        <div className="prose prose-lg max-w-none mt-4">
          <p className="text-gray-800 text-center">{content}</p>
        </div>
        {buttonText && (
          <div className="mt-8 flex justify-center">
            <Link
              href={buttonLink}
              className="rounded-full bg-[#001f3f] px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-900"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
      {media && (
        <div className="flex flex-1 flex-col items-center justify-center border-l border-gray-300 bg-[#e0f7f6] p-8 md:p-12">
          <h3 className="text-center font-serif text-4xl font-bold text-[#001f3f] mb-4">{title}</h3>
          {media.endsWith(".mp4") ? (
            <video className="w-full max-w-xs md:max-w-2xl" controls>
              <source src={media} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={media} alt={title} className="w-full max-w-md rounded-lg shadow-lg" />
          )}
        </div>
      )}
    </div>
  );
}
