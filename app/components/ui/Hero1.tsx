import { Links } from "./Links";

export default function Hero1() {
  return (
    <main>
      <div className="relative rounded-2xl px-10 py-12">
        <h1 className="text-4xl font-semibold text-[#4a4a4a] dark:text-zinc-100 mb-5 tracking-tight">
          Aditya Patil
        </h1>

        <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-[14px] md:text-[15px]">
          I&apos;m a{" "}
          <strong className="font-semibold text-[#4a4a4a] dark:text-zinc-200">
            Full Stack Developer &amp; DevOps Engineer
          </strong>{" "}
          with a strong focus on building scalable server-side systems and
          creating automated, reliable deployment workflows. Through
          internships, projects, and continuous learning, I&apos;ve gained
          expertise in backend development, API design, database management,
          cloud services, and infrastructure automation. I specialize in
          developing high-performance RESTful APIs, containerizing applications,
          and implementing CI/CD pipelines using tools like Docker, Kubernetes,
          and Jenkins. With experience across Node.js, Express.js, SQL/NoSQL
          databases, AWS and GCP. I enjoy architecting systems that are
          efficient, secure, and easy to maintain.
        </p>

        <div className="flex gap-8 mt-10">
          <Links />
        </div>
      </div>
    </main>
  );
}