export default async function Home({
  params: { count },
}: {
  params: { count: string };
}) {
  console.log("running server side - fetch ");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_limit=${count}`,
    {
      cache: "no-cache",
    }
  );

  const comments = await res.json();

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

// {
//   "postId": 19,
//   "id": 93,
//   "name": "mollitia dolor deleniti sed iure laudantium",
//   "email": "Roma_Doyle@alia.com",
//   "body": "ut quis et id repellat labore\nnobis itaque quae saepe est ullam aut\ndolor id ut quis\nsunt iure voluptates expedita voluptas doloribus modi saepe autem"
//   },
