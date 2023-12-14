import React from "react";
import { TabsContent } from './ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from "next/link";



const AsCreator = () => {
  return (
    <>
      <TabsContent value="password">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle>Creator</CardTitle>
            <CardDescription>
              Be a Creator and out source your time consuming work to expert freelancers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Email</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="bg-rose-500 w-full">Sign up</Button>
            <h1 className="mt-5">already have account ? <Link href={'/login'}>login</Link></h1>
          </CardFooter>
        </Card>
      </TabsContent>
    </>
  );
};

export default AsCreator;
