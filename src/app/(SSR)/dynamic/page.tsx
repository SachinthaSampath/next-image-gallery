import { Alert } from "@/components/bootstrap";
import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

//define more specific metadata
export const metadata = {
  title: "Dynamic Fetching - NextJS Image Gallery",
};

//make page dynamic
// export const revalidate =0;

const Page = async () => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
    {
        //set no-cache / no-store (same) to dynamically create, define cache strategy for each request
        cache:"no-cache"
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
        This page <b>fetches and caches data at build time.</b> Even though the
        Unsplash API always returns a new image, we see the same image after
        refreshing the page until we compile the project again.{" "}
      </Alert>
      <Image
        src={image.urls.raw}
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
