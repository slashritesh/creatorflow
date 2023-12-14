import React from "react";
import ContainerBox from "./ContainerBox";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import {RiSearchLine} from 'react-icons/ri'
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <ContainerBox className="py-8 flex  justify-between">
        <Logo />
        <div className="flex">
          <Link
            href={"/projects"}
            className={`${buttonVariants({ variant: "ghost" })} text-base`}
          >
            Find Projects
          </Link>
          <Link
            href={"/all-freelancers"}
            className={`${buttonVariants({ variant: "ghost" })} text-base`}
          >
            Freelancers
          </Link>
          <Link
            href={"/get-started"}
            className={`${buttonVariants({ variant: "ghost" })}`}
          >
            Post Project
          </Link>
          
        </div>
        <div className="flex gap-5">
          
          
          <Link
            href={"/login"}
            className={`${buttonVariants({ variant: "outline" })}`}
          >
            Log In
          </Link>
          <Link
            href={"/get-started"}
            className={`${buttonVariants({ variant: "default" })} bg-rose-500`}
          >
            Get Started
          </Link>
        </div>
      </ContainerBox>
    </div>
  );
};

export default Navbar;
