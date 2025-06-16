export default function Spinner() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-amber-100 dark:bg-slate-900">
      <div className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 w-[3rem] h-[3rem]  animate-spin mx-auto  mt-44 dark:bg-slate-900 rounded-full border-3 flex justify-center items-center">
        <div className="bg-amber-100 dark:bg-slate-900 w-[2.5rem] h-[2.5rem] rounded-full"></div>
      </div>
    </div>
  );
}
