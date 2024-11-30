import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";
import { PROJECTS } from "../../constants";
import { Link } from "react-router-dom";

// const dataProject = [
//   {
//     year: "2023",
//     project: "Website Portfolio",
//     madeAt: "Upstatement",
//     technologies: ["React", "Tailwindcss", "Framer Motion", "vite.js"],
//     link: "#",
//     linkName: "opansurgawan.com",
//     first: "Website",
//     last: "Portfolio",
//   },
//   {
//     year: "2023",
//     project: "Corporate Website",
//     madeAt: "Upstatement",
//     technologies: ["React", "Tailwindcss", "javascript", "Node.js", "MySQL"],
//     link: "#",
//     linkName: "magnumopus.com",
//     first: "Corporate",
//     last: "Website",
//   },
// ];
const AllProject = () => {
  const remainingProject = PROJECTS.slice(4);

  return (
    <div className="lg:py-24">
      <Link
        to="/"
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-purple-400"
      >
        <FiArrowLeft className="mr-2 h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transition-none" />
        Opan Surgawan
      </Link>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 px-6 py-5 border-b border-slate-300/10 bg-slate-900/5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Project
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden lg:table-cell">
              Made at
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden lg:table-cell">
              Built With
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200 hidden lg:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {/* data Project */}
          {remainingProject.map((project, index) => (
            <tr
              key={index}
              className="border-b border-slate-300/10 last:border-none"
            >
              {/* year */}
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px">{project.year}</div>
              </td>
              {/* project name */}
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                <div>
                  <div className="block sm:hidden">
                    <a
                      href={project.link}
                      // target="_blank"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 sm:hidden group/link text-base"
                    >
                      <span>
                        {project.first}{" "}
                        <span className="inline-block">
                          {project.last}
                          <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="hidden sm:block">{project.project}</div>
                </div>
              </td>
              {/* made at */}
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap text-slate-400">
                  {project.madeAt}
                </div>
              </td>

              {/* built with */}
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {project.technologies.map((technology, index) => (
                    <li key={index} className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold leading-5 text-purple-500 ">
                        {technology}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>

              {/* link */}
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <ul className="translate-y-1">
                  <li className="mb-1 flex items-center">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-purple-300 focus-visible:text-slate-300 group/link text-sm"
                      href={project.link}
                      // target="_blank"
                      rel="noreferrer noopener"
                      aria-label="emersoncollective.com (opens in a new tab)"
                    >
                      <span>
                        <span className="inline-block">
                          {project.linkName}
                          <FiArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProject;
