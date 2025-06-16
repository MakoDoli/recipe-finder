"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CUISINES } from "@/constants/cousine-data";
export default function SearchFIlter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleQuery = (query) => {
    console.log(query);
    const params = new URLSearchParams(searchParams);

    params.set("query", query);
    if (query === "") {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  const handleCuisine = (cuisine) => {
    const params = new URLSearchParams(searchParams);

    params.set("cuisine", cuisine);
    if (cuisine === "") {
      params.delete("cuisine");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  const handleTime = (time) => {
    const params = new URLSearchParams(searchParams);

    params.set("maxReadyTime", time);
    if (time === "") {
      params.delete("maxReadyTime");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex  flex-col justify-center items-center gap-5 dark:bg-slate-900 mt-20">
      <label>Select type</label>
      <input
        className="h-10 border w-48 border-amber-700 rounded-md"
        type="text"
        onChange={(e) => handleQuery(e.target.value)}
      />

      <label>Select cooking time</label>
      <input
        className="h-10 w-48 border border-amber-700 rounded-md"
        type="number"
        onChange={(e) => handleTime(e.target.value)}
      />
      <select
        className=" w-48 pl-6 h-10 border border-amber-700 rounded-md"
        onChange={(e) => handleCuisine(e.target.value)}
      >
        <option className="dark:text-amber-700" value="">
          Select cuisine
        </option>
        {CUISINES.map((k) => (
          <option key={k} value={k} className="dark:text-amber-700">
            {k}
          </option>
        ))}
      </select>
      {searchParams.size === 0 ? (
        <span className="text-gray-500">Next</span>
      ) : (
        <Link href={`/recipes/complexSearch?${searchParams.toString()}`}>
          Next
        </Link>
      )}
    </div>
  );
}
