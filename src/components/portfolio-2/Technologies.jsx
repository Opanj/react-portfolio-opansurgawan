import {
  RiNextjsLine,
  RiCss3Fill,
  RiJavascriptLine,
  RiTailwindCssFill,
  RiReactjsFill,
} from "react-icons/ri";
import { TbBrandBootstrap } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";

const Technologies = () => {
  return (
    <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Technologies
        </h2>
      </div>
      {/* <h2>Technologies</h2> */}
      <div className="flex flex-wrap gap-4">
        <div className="mt-4">
          <AiOutlineHtml5 className="text-3xl text-orange-500" />
        </div>
        <div className="mt-4">
          <RiCss3Fill className="text-3xl text-blue-500" />
        </div>
        <div className="mt-4">
          <RiTailwindCssFill className="text-3xl text-cyan-500" />
        </div>
        <div className="mt-4">
          <TbBrandBootstrap className="text-3xl text-purple-500" />
        </div>
        <div className="mt-4">
          <RiJavascriptLine className="text-3xl text-yellow-400" />
        </div>
        <div className="mt-4">
          <FaGitAlt className="text-3xl text-red-500" />
        </div>
        <div className="mt-4">
          <RiReactjsFill className="text-3xl text-cyan-400" />
        </div>
        <div className="mt-4">
          <RiNextjsLine className="text-3xl text-neutral-400" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
