import Link from "next/link";

export function Links() {
  return (
    <div className="flex gap-3">
      <Link
        href="https://github.com/AdityaPatil0708"
        target="_blank"
        className="flex items-center gap-1.5 rounded-md border border-transparent px-3 py-2 text-sm text-[#4a4a4a] transition duration-200 hover:border-[#443da3] hover:text-[#443da3] dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
      >
        ↗ Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/aditya-patil-ap2907"
        target="_blank"
        className="flex items-center gap-1.5 rounded-md border border-transparent px-3 py-2 text-sm text-[#4a4a4a] transition duration-300 hover:border-[#443da3] hover:text-[#443da3] dark:text-zinc-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
      >
        ↗ LinkedIn
      </Link>
    </div>
  );
}
