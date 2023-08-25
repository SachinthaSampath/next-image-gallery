import { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";

export const metadata: Metadata = {
  title: "Next Serveractions",
  description: "Test project for next js",
  authors: "Sachintha Sampath" as Author
};

export default function Home() {
  async function serverAction() {
    "use server";
    console.log("server action executed");
  } 

  return (
    <form action={serverAction}>
      <button type="submit">Call server action</button>
    </form>
  );
}
