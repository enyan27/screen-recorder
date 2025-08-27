import SharedHeader from "@/components/SharedHeader";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = async () => {
  return (
    <main className="wrapper page">
      <SharedHeader
        subHeader="Public Library"
        title="All Videos"
      />

      <h1 className="text-2xl">Main Page</h1>

      <section className="video-grid">
        {dummyCards.map(card => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  );
};

export default Page;