import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { InfoCard } from "@/components/info-card"

export default function GoalsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle>OUR GOALS</SectionTitle>

          <div className="space-y-12">
            <InfoCard
              title="Big Data"
              content="Big data refers to the vast volumes of structured and unstructured data generated every second from various sources, including social media, sensors, transactions, and devices. This data is characterized by the 'Three Vs': volume, velocity, and variety. Volume pertains to the immense amounts of data being produced, velocity describes the speed at which this data is generated and processed, and variety refers to the different types of data, such as text, images, and videos. Organizations leverage big data analytics to extract valuable insights, identify trends, and make informed decisions. Technologies like Hadoop, Spark, and cloud computing facilitate the storage and processing of big data, enabling businesses to harness its potential."
              buttonText="Click Here"
            />

            <InfoCard
              title="Machine Learning"
              content="Machine learning is a subset of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data. By analyzing patterns within large datasets, machine learning systems can improve their performance over time without being explicitly programmed. There are three main types of machine learning: supervised learning, where models are trained on labeled data; unsupervised learning, which identifies patterns in unlabeled data; and reinforcement learning, where agents learn through trial and error by receiving feedback from their environment. Applications of machine learning are vast and include image and speech recognition, natural language processing, recommendation systems, and autonomous vehicles."
              buttonText="Click Here"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

