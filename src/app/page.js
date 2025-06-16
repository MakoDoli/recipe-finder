import SearchFIlter from "@/components/SearchFIlter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center  bg-amber-100 dark:bg-slate-900 min-h-screen">
      <h1 className="text-2xl mt-20">Recipe finder</h1>
      <SearchFIlter />
    </div>
  );
}
