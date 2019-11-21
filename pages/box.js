import React from "react";
import Link from "next/link";

const Box = () => {
  return (
    <div>
      <h1>Cat box</h1>
      <Link href="/">
        <a style={{ marginRight: "1rem" }}>Go to home</a>
      </Link>
    </div>
  );
};

export default Box;
