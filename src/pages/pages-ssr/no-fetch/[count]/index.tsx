export default function Home({ count }: { count: string }) {
  return (
    <main>
      {new Array(+count || 1).fill(0).map((_, i) => (
        <div key={i}>{i}</div>
      ))}
    </main>
  );
}

export async function getServerSideProps(context: any) {
  //destructure it
  const { params } = context;

  const { count } = params;

  console.log("running getServerSideProps");

  return {
    props: {
      count,
    },
  };
}
