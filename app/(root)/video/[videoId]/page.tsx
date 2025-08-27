
const Page = async ({ params }: ParamsWithSearch) => {
    const { videoId } = await params;

    return (
        <main className="wrapper page">
            Video detail page {videoId}
        </main>
    )
}

export default Page;