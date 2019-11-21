import React from "react";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <p>about page</p>
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
};

export default About;
