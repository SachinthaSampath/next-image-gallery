export default async function Home({
  params: { count },
}: {
  params: { count: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${count}`,
    {
      cache: "no-cache",
    }
  );
  const comments = await res.json();

  return (
    <main>
      <h1>Pokemon</h1>
      {comments.map((c:{id:string,name:string,body:string}) => (
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
