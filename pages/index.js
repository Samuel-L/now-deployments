import React from "react";
import Link from "next/link";
import Head from "next/head";

const Home = () => {
  // uncomment to display errors in build logs
  // throw Error("An error");

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Home</h1>
      <p>this is the homepage!!</p>

      <Link href="/about">
        <a style={{ marginRight: "1rem" }}>Go to about</a>
      </Link>
      <Link href="/contact" as="/another/contact">
        <a style={{ marginRight: "1rem" }}>Go to contact</a>
      </Link>
      <Link href="/cool/contact">
        <a style={{ marginRight: "1rem" }}>Go to the cool contact</a>
      </Link>
      <Link href="/box" as="/cat/box">
        <a>Go to the cat box page</a>
      </Link>
    </div>
  );
};

export default Home;
