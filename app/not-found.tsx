import React from "react";
import Logo from "./components/Logo";
import Link from "next/link";

function NotFouned() {
  return (
    <div className="container mx-auto bg-white mt-12 rounded-lg text-center py-5">
      <h2 className="text-secondary text-lg font-bold mb-2">Ooooops...</h2>
      <h1 className="text-primary text-3xl font-bold">Page Nout Found</h1>
      <Link href={"/"} className=" mt-3 flex justify-center">
        <Logo />
      </Link>
    </div>
  );
}

export default NotFouned;
