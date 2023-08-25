export default function Home({ comments }: { comments: any }) {
  return (
    <main>
      <h1>Comments</h1>
      {comments.map((c) => (
        <div key={c.id} className="flex flex-row gap-2">
          <h2>
            {c.name} - {c.id}
          </h2>
          <p>{c.body}</p>
        </div>
      ))}
    </main>
  );
}

export async function getServerSideProps(context: any) {
  //destructure it
  const { params } = context;

  const { count } = params;

  console.log("running getServerSideProps");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${count}`,
    {
      cache: "no-cache",
    }
  );
  const comments = await res.json();
  return {
    props: {
      comments,
    },
  };
}
