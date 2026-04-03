import Link from "next/link";

export function Links() {
  return (
    <div className="flex gap-3">
      <Link
        href="https://github.com/AdityaPatil0708"
        target="_blank"
        className="flex items-center gap-1.5 text-sm text-[#4a4a4a] dark:text-zinc-300 hover:text-[#443da3] dark:hover:text-indigo-400 hover:border hover:border-[#443da3] dark:hover:border-indigo-400 transition duration-200 px-3 py-2 rounded-md"
      >
        ↗ Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/aditya-patil-ap2907"
        target="_blank"
        className="flex items-center gap-1.5 text-sm text-[#4a4a4a] dark:text-zinc-300 hover:text-[#443da3] dark:hover:text-indigo-400 hover:border hover:border-[#443da3] dark:hover:border-indigo-400 transition duration-300 px-3 py-2 rounded-md"
      >
        ↗ LinkedIn
      </Link>
    </div>
  );
}
