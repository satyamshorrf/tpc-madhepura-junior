import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>CONTACT US</SectionTitle>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-[#e0f7f6] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#001f3f]">Get In Touch</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-md bg-[#001f3f] px-4 py-2 font-medium text-white transition-colors hover:bg-blue-900"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="rounded-lg bg-[#e0f7f6] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#001f3f]">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#001f3f]" />
                  <p>Madhepura, Bihar, India</p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-[#001f3f]" />
                  <p>contact@tpcmadhepura.com</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#001f3f]" />
                  <p>+91 1234567890</p>
                </div>
              </div>

              <h3 className="mb-4 mt-8 text-xl font-bold text-[#001f3f]">Follow Us</h3>

              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-pink-600 p-2 text-white hover:bg-pink-700">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-blue-400 p-2 text-white hover:bg-blue-500">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-blue-700 p-2 text-white hover:bg-blue-800">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full bg-gray-800 p-2 text-white hover:bg-gray-900">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

