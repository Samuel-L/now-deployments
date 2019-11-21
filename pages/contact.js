import React from "react";
import Link from "next/link";
import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>

      <h1>Contact</h1>
      <p>contact page</p>

      <Link href="/">
        <a style={{ marginRight: "1rem" }}>Go to home</a>
      </Link>
    </div>
  );
};

export default Contact;
