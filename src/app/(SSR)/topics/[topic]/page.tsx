import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import React from "react";
import styles from "./TopicPage.module.css";
import { Alert } from "@/components/bootstrap";

interface PageProps {
  params: {
    topic: string;
  };
  //searchParams:{[key:string]:string|string[]|undefined}
}


//define more specific metadata
// export const metadata = {
//   title: "Static Fetching - NextJS Image Gallery",
// };

//generate metadata (title) dynamically
//this function receive the same props as the page. Can make it async and fetch external data
export function generateMetadata({ params: { topic } }: PageProps) {
  return {
    title: topic + " - NextJS Image Gallery",
  };
}

//if want new images everytime reload
// export const revalidate =0;
//when page refresh, you get new images

//render when the project is built == getStaticPaths
export async function generateStaticParams() {
  return ["health", "fitnes", "coding"].map((topic) => ({ topic }));
}

//disable dynamic parameters
// export const dynamicParams = false;

//destructure
const Page = async ({ params: { topic } }: PageProps) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  const images: UnsplashImage[] = await response.json();
  //   console.log(images);

  return (
    <div>
      <Alert>
        This page uses <b>generateStaticParams.</b> to render and cache static
        pages at build time, even though the URL has a dnamic parameter. Pages
        that are not included in generateStaticParams will be fetched & rendered
        on first access and then cached for subsequent requests (this can be
        disabled).
      </Alert>
      <h1>{topic}</h1>
      <div>
        {images.map((img) => {
          return (
            <Image
              key={img.id}
              src={img.urls.regular}
              width={250}
              height={250}
              alt={img.description}
              className={styles.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;

//https://api.unsplash.com/photos/random?client_id=NQBlIGrhx62M6AytogbK_vZMNjH-hHct7zoFMacTD6k
