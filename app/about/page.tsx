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
              Unlike the Avengers origin story, 2 people: Satyam and Rajesh thought of creating this little group of
              intellectuals so that online college would be a bit more fun than the usual drab lectures. And guys, we
              are glad they thought of doing so. Gradually, others started to join in: Prabhash, Sekh Sanam, Kajal,
              Pratik, Sonu, Kajal, Sumit, and Aditya, and thus began the journey of the Decodians, and to be honest, it
              is quite a privilege to be a part of this little family that we have here, where we look after one
              another.
            </p>

            <p className="mt-8 text-right text-xl italic">— Developers</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

