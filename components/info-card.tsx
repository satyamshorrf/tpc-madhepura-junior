"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Play } from "lucide-react";

interface InfoCardProps {
  title: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  media?: string; // URL for image or video
  reverse?: boolean; // For alternating layout
}

export function InfoCard({
  title,
  content,
  buttonText = "Click Here",
  buttonLink = "#",
  media,
  reverse = false,
}: InfoCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [isAutoplayFailed, setIsAutoplayFailed] = useState(false);

  // Ensure this runs only on client
  useEffect(() => {
    setIsClient(true); // Prevent hydration mismatch

    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current
          ?.play()
          .catch(() => setIsAutoplayFailed(true));
      }, 100); // Delay to prevent hydration issues
    }
  }, [media]);

  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
      {/* Text Section */}
      <div className="flex-1 bg-[#e0f7f6] p-8 md:p-12 flex flex-col justify-end">
        <h3 className="text-center font-serif text-4xl font-bold text-[#001f3f] mb-4">{title}</h3>
        <p className="text-gray-800 text-center mt-4">{content}</p>
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

      {/* Media Section */}
      {media && (
        <div className="flex flex-1 flex-col items-center justify-center border-l border-gray-300 bg-[#e0f7f6] p-8 md:p-12 relative">
          {media.endsWith(".mp4") ? (
            isClient && ( // Prevents SSR issues
              <div className="relative w-full max-w-xs md:max-w-2xl">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-lg shadow-lg"
                  autoPlay
                  loop
                  playsInline
                  controls
                  onError={() => setIsAutoplayFailed(true)}
                >
                  <source src={media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {isAutoplayFailed && (
                  <button
                    onClick={() => videoRef.current?.play()}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold rounded-lg p-4"
                  >
                    <Play className="mr-2 h-6 w-6" /> Click to Play Video
                  </button>
                )}
              </div>
            )
          ) : (
            <div className="w-full max-w-md relative">
              <Image
                src={media}
                alt={title}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
