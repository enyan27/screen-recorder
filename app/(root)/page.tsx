import SharedHeader from "@/components/SharedHeader";

const Page = async () => {
  return (
    <main className="wrapper page">
      <SharedHeader
        subHeader="Public Library"
        title="All Videos"
      />

      <h1 className="text-2xl">Main Page</h1>
    </main>
  );
};

export default Page;