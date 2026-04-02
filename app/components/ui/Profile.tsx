import { Links } from "./Links";

export function Profile() {
  return (
    <div className="relative rounded-2xl px-10 py-10 sm:py-13">
      {/* Top: avatar + skills */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
        {/* Left: avatar + name */}
        <div className="flex flex-col items-center gap-2 shrink-0 sm:pt-5">
          <img
            src="./profile.png"
            alt=""
            className="rounded-full h-28 sm:h-35"
          />
          <p className="font-semibold text-[#4a4a4a] dark:text-zinc-300 text-sm text-center">
            Aditya Patil
          </p>
        </div>

        {/* Right: skills */}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-2xl font-bold text-[#4a4a4a] dark:text-zinc-100 underline underline-offset-4 mb-3 text-center md:text-left">
            Skills
          </h2>
          {[
            { label: "Languages", value: "Python, JavaScript, Typescript" },
            { label: "Technologies", value: "Express.js, Node.js, Next.js, Websockets" },
            { label: "Databases", value: "MongoDB, PostgreSQL" },
            { label: "DevOps & Tools", value: "Docker, Kubernetes, GitHub, Jenkins, GitHub Actions, AWS, GCP" },
            { label: "General", value: "Linux, Networking, Operating Systems" },
          ].map(({ label, value }) => (
            <p key={label} className="text-[13px] sm:text-[14px] text-gray-600 dark:text-zinc-400 leading-relaxed">
              <strong className="text-[#4a4a4a] dark:text-zinc-200">• {label} : </strong>
              {value}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-8 mt-8 sm:mt-10">
        <Links />
      </div>
    </div>
  );
}