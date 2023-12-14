import React from "react";
import {RiMoneyDollarCircleLine,RiBriefcaseLine,RiMapPinLine} from 'react-icons/ri'
import {Card} from "./ui/card";
import { Button } from "./ui/button";

const ProjectsCard = () => {
  return (
    <>
      <Card className="p-5 w-fit">
        <div className="flex items-center justify-center gap-5  ">
          <div className="h-16 rounded-full w-24 bg-rose-500"></div>
          <div>
            <h1 className="font-semibold text-base leading-tight">Video editor for Vlogging channel</h1>
            <p className="text-sm mt-1">Posted by Raume Jos</p>
          </div>
        </div>
        <p className="my-5 text-slate-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident veniam reiciendis odio voluptatibus!</p>

        <div className="flex flex-wrap gap-y-2 gap-x-5">
          <span className="flex items-center gap-2"><RiMoneyDollarCircleLine className='text-xl' />300$</span>
          <span className="flex items-center gap-2"><RiBriefcaseLine className='text-xl' />Project based</span>
          <span className="flex items-center gap-2"><RiMapPinLine className='text-xl' />Remote</span>
        </div>
        <div className="flex justify-between mt-4">
          <Button>Apply Now</Button>
        </div>
      </Card>
    </>
  );
};

export default ProjectsCard;
