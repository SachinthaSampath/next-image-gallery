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

export async function getStaticProps({
  params: { count },
}: {
  params: { count: string };
}) {
  console.log("running getStaticProps");

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

/***
 *
 *If you are creating a dynamic page eg: product/[slug].tsx then even if you don't want to create
 *any page on build time you need to create a getStaticPaths method to set the fallback property and
 *let NextJS know what to do when the page you are trying to get doesn't exist.

 * getStaticPaths does mainly two things:
 *
 * 1. Indicate which paths should be created on build time (returning a paths array)
 *
 * 2. Indicate what to do when a certain page eg: "product/myProduct123" doesn't exist in the NextJS Cache (returning a fallback type)
 *
 */
