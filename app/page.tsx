import ContainerBox from "@/components/ContainerBox";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <ContainerBox>
        <h1 className="text-6xl mt-10 text-center font-semibold capitalize">
          <span className="text-rose-500">Outsource</span> your time <br />
          taking task to experts
        </h1>
      </ContainerBox>
    </>
  );
}
