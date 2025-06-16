import { BASE_URL } from "@/constants/api-url";
import Image from "next/image";
import Link from "next/link";

export default async function RecipesPage({ searchParams }) {
  const { query = "", cuisine = "", maxReadyTime = "" } = await searchParams;

  const apiKey = process.env.SPOONACULAR_API_KEY;

  const res = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&cuisine=${cuisine}&maxReadyTime=${Number(
      maxReadyTime
    )}&apiKey=${apiKey}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  console.log(data);
  return (
    <div className="dark:bg-amber-950">
      <h1>Recipes for: {query}</h1>
      <ul>
        {data.results?.map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
            <li>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
