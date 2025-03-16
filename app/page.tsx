"use client";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionTitle } from "@/components/section-title";
import { HexagonProfile } from "@/components/hexagon-profile";

const teamMembers = [
  {
    name: "Girl Start",
    image: "https://i.pravatar.cc/150?img=2",
    role: "Frontend",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Sekh Sanam",
    image: "https://i.pravatar.cc/150?img=3",
    role: "Backend",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Prabhash Kumar ",
    image: "https://i.pravatar.cc/150?img=4",
    role: "UI/UX Designer",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Vikash Kumar",
    image: "https://i.pravatar.cc/150?img=5",
    role: "Security Anlytics",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Amit Kumar",
    image: "https://i.pravatar.cc/150?img=6",
    role: "Devops",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Anjali Verma",
    image: "https://i.pravatar.cc/150?img=7",
    role: "Cyber Security",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Shreya Singh",
    image: "https://i.pravatar.cc/150?img=8",
    role: "Social Media Markting Ads",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Girl End",
    image: "https://i.pravatar.cc/150?img=1",
    role: "Developer",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Vivek Sharma",
    image:
      "https://i.postimg.cc/2jLhjMGD/Whats-App-Image-2025-03-16-at-12-00-11-259e43af.jpg",
    role: "UI/UX Designer",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Rajesh Kumar",
    image: "https://i.pravatar.cc/150?img=2",
    role: "Frontend",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Sekh Sanam",
    image: "https://i.pravatar.cc/150?img=3",
    role: "Backend",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Prabhash ",
    image: "https://i.pravatar.cc/150?img=4",
    role: "Devops",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Vikash Kumar",
    image: "https://i.pravatar.cc/150?img=5",
    role: "Cyber Security",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Amit Kumar",
    image: "https://i.pravatar.cc/150?img=6",
    role: "Security Analytics",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Anjali Verma",
    image: "https://i.pravatar.cc/150?img=7",
    role: "Social Media Markting Ads",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Shreya Singh",
    image: "https://i.pravatar.cc/150?img=8",
    role: "Developer",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Anjali Verma",
    image: "https://i.pravatar.cc/150?img=7",
    role: "Developer",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
  {
    name: "Shreya Singh",
    image: "https://i.pravatar.cc/150?img=8",
    role: "Developer",
    profileLink:
      "https://github.com/user-attachments/assets/c6757196-c8cf-4c5f-92da-a7bad6cc828b",
  },
];

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
            "The idea was to bring together a group of remarkable people; to see
            if they could become something more."
          </p>
          <p className="mt-8 max-w-3xl text-base sm:text-lg">
            TPC Madhepura Tech Team is a passionate group of developers,
            designers, and tech enthusiasts dedicated to innovation. We
            specialize in web and mobile development, UI/UX design, and emerging
            technologies to create impactful digital solutions. Our mission is
            to collaborate, learn, and build cutting-edge applications that
            solve real-world problems.
          </p>
          <p className="mt-8 text-lg italic">— Developers</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle>VISIT OUR PORTFOLIO PAGES</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <HexagonProfile
              name={teamMembers[0].name}
              image={teamMembers[0].image}
              role={teamMembers[0].role}
              profileLink={teamMembers[0].profileLink}
            />

            <HexagonProfile
              name={teamMembers[1].name}
              image={teamMembers[1].image}
              role={teamMembers[1].role}
              profileLink={teamMembers[1].profileLink}
            />
            <HexagonProfile
              name={teamMembers[2].name}
              image={teamMembers[2].image}
              role={teamMembers[2].role}
              profileLink={teamMembers[2].profileLink}
            />
            <HexagonProfile
              name={teamMembers[3].name}
              image={teamMembers[3].image}
              role={teamMembers[3].role}
              profileLink={teamMembers[3].profileLink}
            />
            <HexagonProfile
              name={teamMembers[4].name}
              image={teamMembers[4].image}
              role={teamMembers[4].role}
              profileLink={teamMembers[4].profileLink}
            />
            <HexagonProfile
              name={teamMembers[5].name}
              image={teamMembers[5].image}
              role={teamMembers[5].role}
              profileLink={teamMembers[5].profileLink}
            />
            <HexagonProfile
              name={teamMembers[6].name}
              image={teamMembers[6].image}
              role={teamMembers[6].role}
              profileLink={teamMembers[6].profileLink}
            />
            <HexagonProfile
              name={teamMembers[7].name}
              image={teamMembers[7].image}
              role={teamMembers[7].role}
              profileLink={teamMembers[7].profileLink}
            />
            <HexagonProfile
              name={teamMembers[8].name}
              image={teamMembers[8].image}
              role={teamMembers[8].role}
              profileLink={teamMembers[8].profileLink}
            />
            <HexagonProfile
              name={teamMembers[9].name}
              image={teamMembers[9].image}
              role={teamMembers[9].role}
              profileLink={teamMembers[9].profileLink}
            />
            <HexagonProfile
              name={teamMembers[10].name}
              image={teamMembers[10].image}
              role={teamMembers[10].role}
              profileLink={teamMembers[10].profileLink}
            />
            <HexagonProfile
              name={teamMembers[11].name}
              image={teamMembers[11].image}
              role={teamMembers[11].role}
              profileLink={teamMembers[11].profileLink}
            />
            <HexagonProfile
              name={teamMembers[12].name}
              image={teamMembers[12].image}
              role={teamMembers[12].role}
              profileLink={teamMembers[12].profileLink}
            />
            <HexagonProfile
              name={teamMembers[13].name}
              image={teamMembers[13].image}
              role={teamMembers[13].role}
              profileLink={teamMembers[13].profileLink}
            />
            <HexagonProfile
              name={teamMembers[14].name}
              image={teamMembers[14].image}
              role={teamMembers[14].role}
              profileLink={teamMembers[14].profileLink}
            />
            <HexagonProfile
              name={teamMembers[15].name}
              image={teamMembers[15].image}
              role={teamMembers[15].role}
              profileLink={teamMembers[15].profileLink}
            />
          </div>
        </div>
      </section>

      {/* Personalized Connection Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <SectionTitle>PERSONALIZED CONNECTION</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[0].name}
                image={teamMembers[0].image}
                role={teamMembers[0].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[1].name}
                image={teamMembers[1].image}
                role={teamMembers[1].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[2].name}
                image={teamMembers[2].image}
                role={teamMembers[2].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[3].name}
                image={teamMembers[3].image}
                role={teamMembers[3].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[4].name}
                image={teamMembers[4].image}
                role={teamMembers[4].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[5].name}
                image={teamMembers[5].image}
                role={teamMembers[5].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[6].name}
                image={teamMembers[6].image}
                role={teamMembers[6].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[7].name}
                image={teamMembers[7].image}
                role={teamMembers[7].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[8].name}
                image={teamMembers[8].image}
                role={teamMembers[8].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[9].name}
                image={teamMembers[9].image}
                role={teamMembers[9].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[10].name}
                image={teamMembers[10].image}
                role={teamMembers[10].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[11].name}
                image={teamMembers[11].image}
                role={teamMembers[11].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[12].name}
                image={teamMembers[12].image}
                role={teamMembers[12].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[13].name}
                image={teamMembers[13].image}
                role={teamMembers[13].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[14].name}
                image={teamMembers[14].image}
                role={teamMembers[14].role}
                socialLinks={true}
              />
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg">
              <HexagonProfile
                name={teamMembers[15].name}
                image={teamMembers[15].image}
                role={teamMembers[15].role}
                socialLinks={true}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
