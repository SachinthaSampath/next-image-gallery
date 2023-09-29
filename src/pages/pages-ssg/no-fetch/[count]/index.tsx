export default function Home({ count }: { count: string }) {
  return (
    <main>
      {new Array(+count || 1).fill(0).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </main>
  );
}

export async function getStaticProps({
  params: { count },
}: {
  params: { count: string };
}) {
  return {
    props: {
      count,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { count: "10" } },
      { params: { count: "20" } },
      { params: { count: "30" } },
    ],
    fallback: "blocking",
  };
}
