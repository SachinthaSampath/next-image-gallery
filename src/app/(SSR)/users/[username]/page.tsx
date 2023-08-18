import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache } from "react";
import {Alert} from "@/components/bootstrap";

interface PageProps {
  params: { username: string };
}

//create a seperate function to get user
async function getUser(username: string): Promise<UnsplashUser> {

  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  //handle not found
  if (response.status === 404) notFound();

  return await response.json();
 
}


//use chache if you are note useing hte native cache
// const getUserCached = cache(getUser);


//in old pages router, we added the metadata in the head tag directly in the page componnet. 
//Now the app router use generateMetadata function
export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {

  //get user using the helper function
  const user = await getUser(username);

  return {
    title: [user.first_name,user.last_name].filter(Boolean).join(" ")||user.username+" - NextJS Image Gallery"
  };
}



const Page = async ({ params: { username } }: PageProps) => {
  //get user using the helper function
  const user = await getUser(username);

  
  return (
    <div>
        <Alert>This profile page uses <b>generateMetadata</b> to set the <b>page title</b>
        dynamically from the API response.</Alert>
      <h1>{user.username}</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <a href={`https://unsplash.com/${user.username}`}>Unsplash Profile</a>
    </div>
  );
};

export default Page;
