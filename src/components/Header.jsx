import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function BasicDemo() {
  return (
    <header className="py-[10px]">
      <nav className="flex justify-between items-center container ]">
        <Link className="text-[20px] font-[800]" to={"/"}>
          Logo
        </Link>
        
        <Link to={"/log"}>
          <Button info={"Log In"} extrabold />
        </Link>
      </nav>
    </header>
  );
}
