 import { useEffect } from "react";

export default async function Page() {

  //delay the page response using a promise
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw Error("Bazinga! ");

  return <div>Hello, NextJS app router!</div>;
}


 