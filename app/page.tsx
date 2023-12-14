import ContainerBox from "@/components/ContainerBox";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContainerBox className="flex justify-center items-center flex-col">
        <h1 className="text-6xl mt-10 text-center font-semibold capitalize">
          <span className="text-rose-500">Outsource</span> your time <br />
          taking task to experts
        </h1>
        <p className="py-10 w-[500px] text-slate-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis non saepe doloremque similique molestias? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto itaque delectus nam.</p>
        <div className="flex gap-5">
        <Button className="rounded-xl bg-rose-500 text-xl py-4 h-auto" size={'lg'}>Be as Freelancer</Button>
        <Button className="rounded-xl bg-slate-200 text-black text-xl py-4 h-auto" size={'lg'}>Post job</Button>

        </div>
      </ContainerBox>
    </>
  );
}
