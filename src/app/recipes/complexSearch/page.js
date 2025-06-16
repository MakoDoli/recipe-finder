import { BASE_URL } from "@/constants/api-url";
import Image from "next/image";
import Link from "next/link";

export default async function RecipesPage({ searchParams }) {
  const { query = "", cuisine = "", maxReadyTime = "" } = await searchParams;

  const apiKey = process.env.SPOONACULAR_API_KEY;
  console.log(cuisine);
  const res = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${Number(
      maxReadyTime
    )}&apiKey=${apiKey}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();

  return (
    <div className="dark:bg-slate-900 bg-amber-100 min-h-screen p-10 text-center ">
      <h1 className="font-bold mb-8">Recipes for: {query}</h1>
      <div className="flex justify-center flex-wrap gap-5 text-center">
        {data.results?.map((recipe) => (
          <Link
            href={`/recipes/${recipe.id}`}
            key={recipe.id}
            className="w-[250px] flex flex-col items-center gap-3 mb-8"
          >
            <p className="w-[240px] h-12">{recipe.title}</p>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={200}
              height={200}
              className="rounded-xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
