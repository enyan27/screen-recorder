import SharedHeader from "@/components/SharedHeader";

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
    </main>
  );
};

export default ProfilePage;