import React from "react";
import { Button } from "./ui/button";

const FreelancerProfileCard = () => {
  return (
    <div className="p-5 border rounded-lg">
      <div className="flex gap-5">
      <div className="h-12 rounded-full w-12 bg-rose-500"></div>
        <div>
          <h1 className="text-lg font-semibold">Rahul Chudhary</h1>
          <p>video editor</p>
        </div>
      </div>
    <p className="text-sm text-slate-300 my-2">Lorem ipsum dolor sit amet consectetu repellat iste nam at qui iusto quisquam architecto?</p>
    <div>
    <h1></h1>    
    <Button className="bg-rose-500 mt-3 "> Hire me</Button>
    </div>
    </div>
  );
};

export default FreelancerProfileCard;
