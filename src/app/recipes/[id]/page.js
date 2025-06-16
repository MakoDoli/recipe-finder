// app/recipes/[id]/page.js

import { BASE_URL } from "@/constants/api-url";
import Image from "next/image";

export default async function RecipeDetails({ params }) {
  const { id } = await params;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${apiKey}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch recipe details");
  }

  const recipe = await res.json();

  return (
    <div className="flex flex-col bg-amber-100 justify-center items-center pt-10 dark:bg-slate-900 min-h-screen ">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <Image
        src={recipe.image}
        width={200}
        height={200}
        alt={recipe.title}
        className="my-4 w-80 rounded-xl"
      />
      <div className="flex flex-col justify-center items-center p-4 gap-3">
        <p>
          <strong>Ingredients:</strong>{" "}
        </p>
        <div className="flex gap-3 flex-wrap max-w-[750px]  ">
          {recipe.extendedIngredients.map((i, index) => (
            <p key={i.name + index}>{i.name}</p>
          ))}
        </div>

        <p>
          <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
      </div>
    </div>
  );
}
