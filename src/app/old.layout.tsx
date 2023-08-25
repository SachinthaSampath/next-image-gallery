import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "@/components/bootstrap";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS 13 Image Gallery",
  description: "NextJS learning project for basic concepts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div>This div is shared with all pages in the app</div> */}
        <SSRProvider>
          <NavBar/>
          <main>
            <Container className="py-4">{children}</Container>
            {/* since this page is passed as children to the layout page, it can be a server components.
             * when we pass component as a prop, react does not want to know in advance, the content of the page
             * just reserver an empty spot in the container component for the children
             */}
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
