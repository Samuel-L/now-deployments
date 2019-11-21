import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  // uncomment to display errors in build logs
  //   throw Error("An error");

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <p>this is the homepage!</p>
      <Link href="/about">
        <a>Go to about</a>
      </Link>
    </div>
  );
};

export default Home;
