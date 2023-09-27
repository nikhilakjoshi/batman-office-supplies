import Head from "next/head";
import { Rubik } from "next/font/google";
import clsx from "clsx";

const font = Rubik({
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Batman Office Supplies</title>
        <meta name="description" content="Batman Office Supplies: " />
        <meta property="og:title" content="Batman Office Supplies" />
        <meta property="og:description" content="Batman Office Supplies" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={clsx(
          "flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-300 text-gray-700",
          font.className,
        )}
      >
        <div className="">
          <div className="container mx-auto max-w-screen-2xl">
            <h1 className="my-24 text-center text-6xl font-bold">
              Batman Office Supplies
            </h1>
            <nav></nav>
          </div>
        </div>
      </main>
    </>
  );
}
