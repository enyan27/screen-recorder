import SharedHeader from "@/components/SharedHeader";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const ProfilePage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <main className="wrapper page">
      <SharedHeader
        subHeader="enyan27@gmail.com"
        title="えにゃん"
        userImg="/assets/images/dummy.jpg"
      />

      UserId: {id}

      <section className="video-grid">
        {dummyCards.map(card => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  );
};

export default ProfilePage;