import ContainerBox from "@/components/ContainerBox";
import DashboardNav from "@/components/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const page = () => {
  return (
    <ContainerBox>
      <DashboardNav />
      <h1 className="text-2xl font-semibold mb-5">Profile Settings</h1>
      <div className="flex w-full gap-10">
        <div className="w-[300px]">
          <Button variant={'outline'} className="w-full text-lg py-5">Account</Button>
        </div>
        <div className="flex-1">
          <div className="flex gap-5 w-full">
            <div className="py-2 flex flex-col gap-5 flex-1">
              <Label>User Name</Label>
              <Input />
            </div>
            <div className="py-2 flex flex-col gap-5 flex-1">
              <Label>Email Address</Label>
              <Input />
            </div>
          </div>
          <div className="py-2 flex flex-col gap-5 flex-1">
              <Label>Add your skills</Label>
              <Input />
            </div>
          <div className="py-2 flex flex-col gap-5">
            <Label>Bio</Label>
            <Textarea />
          </div>
          <div className="py-2 flex flex-col gap-5">
            <Label>Upload Portfolio</Label>
            <Input className="" type='file' />
          </div>
          <Button className="mt-8">Save Changes</Button>
        </div>
      </div>
    </ContainerBox>
  );
};

export default page;
