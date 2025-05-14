import Heading from "@/components/Heading";
import Image from "next/image";

export default function Home() {
  // console.log(name);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-red-600 underline">hello NEXT JS </h1>
      <Heading />
    </div>
  );
}
