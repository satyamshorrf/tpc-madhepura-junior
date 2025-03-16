"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { HexagonProfile } from "@/components/hexagon-profile";

// Function to generate random team members
const getRandomPeople = (count: number) => {
  const randomNames = [
    "Satyam Shorrf", "Rajesh Kumar", "Sekh Sanam", "Prabhash Kumar Ranjan",
    "Vikash Kumar", "Amit Kumar", "Anjali Verma", "Shreya Singh",
    "Neha Sharma", "Rohan Gupta", "Pooja Yadav", "Deepak Mishra"
  ];

  return Array.from({ length: count }, (_, i) => ({
    name: randomNames[Math.floor(Math.random() * randomNames.length)],
    image: `https://i.pravatar.cc/150?img=${i + 1}`, // Random avatar images
    role: ["Developer", "Designer", "Manager", "Mentor"][Math.floor(Math.random() * 4)]
  }));
};

// Generate 8 random people
const teamMembers = getRandomPeople(8);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center text-center">
        <Image
          src="https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b"
          alt="TPC Madhepura"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
            TPC Madhepura
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl">
            "The idea was to bring together a group of remarkable people; to see if they could become something more."
          </p>
          <p className="mt-8 max-w-3xl text-base sm:text-lg">
            Unlike the Avengers origin story, 2 people—Satyam and Rajesh—thought of creating this little group of
            intellectuals so that online college would be a bit more fun than the usual drab lectures. And guys, we are
            glad they thought of doing so.
          </p>
          <p className="mt-8 text-lg italic">— Developers</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle>VISIT OUR PORTFOLIO PAGES</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <HexagonProfile key={index} name={member.name} image={member.image} role={member.role} />
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Connection Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle>PERSONALIZED CONNECTION</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
                <HexagonProfile name={member.name} image={member.image} role={member.role} socialLinks={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
