import React from "react";
import SearchPage from "./SearchPage";

//this shoudl be exported from a server component. From client component exported one won't work
export const metadata = {
  title: "Search - NextJS Image Gallery",
};

//no need to make async. Not fetching data in the server side. Client fetch data.
const Page = () => {
    //this server component become a wrapper for the client component
  return <SearchPage/>;
};

export default Page;
