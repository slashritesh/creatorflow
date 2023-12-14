import AsCreator from "@/components/AsCreator";
import AsFreelancer from "@/components/AsFreelancer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader className="p-10 pb-5">
          <CardTitle>Get Started</CardTitle>
          <CardDescription>Create your New Account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid gap-4 w-full mb-5 bg-transparent  grid-cols-2">
              <TabsTrigger
                className="data-[state=active]:bg-slate-200 data-[state=active]:shadow-none data-[state=active]:border-none border py-3"
                value="account"
              >
                As a Freelancer
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-slate-200 border data-[state=active]:shadow-none  data-[state=active]:border-none py-3"
                value="password"
              >
                As a Creator
              </TabsTrigger>
            </TabsList>
            <AsFreelancer />
            <AsCreator />
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
