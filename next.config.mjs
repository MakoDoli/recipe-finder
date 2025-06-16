/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://img.spoonacular.com/recipes/**")],
  },
};
export default nextConfig;
