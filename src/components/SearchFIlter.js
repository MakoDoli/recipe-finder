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
    <div className="flex min-h-screen flex-col justify-center items-center gap-5 dark:bg-slate-800">
      <h1 className="text-red-500 dark:text-green-400"> Recipe finder</h1>

      <input type="text" onChange={(e) => handleQuery(e.target.value)} />

      <select
        className="w-40 text-green-500"
        onChange={(e) => handleCuisine(e.target.value)}
      >
        <option value="">Select cuisine</option>
        {CUISINES.map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>
      <input type="number" onChange={(e) => handleTime(e.target.value)} />

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
