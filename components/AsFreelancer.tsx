"use client";


import React, { ChangeEvent, useState } from "react";
import { TabsContent } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app, authfunc } from "@/firebase/config";



type userTypes = {
  email: string;
  password: string;
};

const AsFreelancer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const auth = getAuth(app)
  

  const handleSignUp = async () => {
    console.log(email,password);
    try{
      const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
      const user = userCredentials.user
      console.log(user,'sucess');
      router.push('/admin/freelance')
    }catch(err){
      console.log(err);
    }
    
  }

  return (
    <div>
      <TabsContent value="account">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>Freelancer</CardTitle>
            <CardDescription>
              Make a money from your skills and get freelance Gigs from to
              creators on social media
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                id="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input
                name="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                id="username"
              />
            </div>
          </CardContent>
    
            <Button
              onClick={handleSignUp}
              className={`bg-rose-500  hover:bg-red-600 w-full`}
            >
              Sign Up
            </Button>
            <h1 className="mt-5 text-center">
              already have account ? <Link href={"/login"}>login</Link>
            </h1>
         
        </Card>
      </TabsContent>
    </div>
  );
};

export default AsFreelancer;
