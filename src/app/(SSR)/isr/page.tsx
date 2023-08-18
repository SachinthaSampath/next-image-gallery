import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//define more specific metadata
export const metadata = {
  title: "Incremental Static Generation - NextJS Image Gallery",
};

//make page dynamic
// set revalidate for the entire page
// export const revalidate =0;

const Page = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    { 
      //set revalidate per request
      next:{revalidate:15}
    }
  );
  const image: UnsplashImage = await response.json();

  //calculate width and height
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  // console.log(image);

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page uses <b>incremental static generation</b> A new image is fetched
        every 15 seconds (after refreshing the page) and then serverd from the cache for that duration. 
      </Alert>
      <Image
        src={image.urls.regular}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />

      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
};

export default Page;
