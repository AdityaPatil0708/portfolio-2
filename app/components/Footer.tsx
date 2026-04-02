export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-10">
      <p className="text-xs md:text-sm text-[#4a4a4a] dark:text-zinc-500">
        © {year} Aditya Patil
      </p>
    </div>
  );
}