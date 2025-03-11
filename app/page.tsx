import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { HexagonProfile } from "@/components/hexagon-profile";

const profileImage = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={profileImage}
            alt="TPC Madhepura"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 font-serif text-7xl font-bold">TPC Madhepura</h1>
          <p className="max-w-2xl text-xl">
            "The idea was to bring together a group of remarkable people; to see if they could become something more."
          </p>
          <p className="mt-8 max-w-3xl text-lg">
            Unlike the Avengers origin story, 2 people: Satyam and Rajesh thought of creating this little group of
            intellectuals so that online college would be a bit more fun than the usual drab lectures. And guys, we are
            glad they thought of doing so.
          </p>
          <p className="mt-12 text-right text-xl italic">— Developers</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>VISIT OUR PORTFOLIO PAGES</SectionTitle>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <HexagonProfile name="Satyam Shorrf" image={profileImage} />
            <HexagonProfile name="Rajesh Kumar" image={profileImage} />
            <HexagonProfile name="Sekh Sanam" image={profileImage} />
            <HexagonProfile name="Prabhash Kumar Ranjan" image={profileImage} />
            <HexagonProfile name="Vikash Kumar" image={profileImage} />
            <HexagonProfile name="Amit Kumar" image={profileImage} />
            <HexagonProfile name="Anjali Verma" image={profileImage} />
            <HexagonProfile name="Shreya Singh" image={profileImage}  />
          </div>
        </div>
      </section>

      {/* Personalized Connection Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>PERSONALIZED CONNECTION</SectionTitle>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile name="Satyam Shorrf" image={profileImage} socialLinks={true} />
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile name="Rajesh Kumar" image={profileImage} socialLinks={true} />
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile name="Sekh Sanam" image={profileImage} socialLinks={true} />
            </div>

            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile name="Prabhash Kumar Ranjan" image={profileImage} socialLinks={true} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
