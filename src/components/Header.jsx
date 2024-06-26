import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function BasicDemo() {
  return (
    <header className="py-[10px] shadow-lg shadow-black-500/50 mb-[20px]">
      <nav className="flex justify-between items-center container ]">
        <Link className="text-[20px] font-[800]" to={"/"}>
          Logo
        </Link>

        <Link to={"/login"}>
          <Button info={"Log In"} extrabold />
        </Link>
      </nav>
    </header>
  );
}
