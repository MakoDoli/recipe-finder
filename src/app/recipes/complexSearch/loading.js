import Spinner from "@/components/Spinner";
import React from "react";

export default function loading() {
  return (
    <div className="bg-amber-100 min-h-screen dark:bg-slate-900">
      <Spinner />
    </div>
  );
}
