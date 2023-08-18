//not page.tsx. here it is route.tsx. It is not a page, an api route.
//in pages router we had handler function. Here we have different function for different requests.

import { UnsplashSearchResponse } from "@/models/unsplash-image";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  //make request for the serach endpoint of unsplash. Executed in server side.
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
  const {results}:UnsplashSearchResponse = await response.json();

  return NextResponse.json(results);
  //for large projects, seperate backends are good but for small once, this api route handler backends are ok
}
