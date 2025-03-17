import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>TPC Madhepura Tech Team</SectionTitle>

          <div className="relative mx-auto mb-12 aspect-video w-full max-w-4xl overflow-hidden rounded-lg">
            <Image
              src="https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b"
              alt="TPC Madhepura Tech Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="mx-auto max-w-4xl space-y-6 text-center text-lg">
            <p>
              "The idea was to bring together a group of remarkable people; to see if they could become something more."
            </p>

            <p>
            TPC Madhepura Tech Team is a passionate group of developers,
            designers, and tech enthusiasts dedicated to innovation. We
            specialize in web and mobile development, UI/UX design, and emerging
            technologies to create impactful digital solutions. Our mission is
            to collaborate, learn, and build cutting-edge applications that
            solve real-world problems.
            </p>

            <p className="mt-8 text-right text-xl italic">— Developers</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

