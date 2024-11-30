import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { PROJECTS } from "../../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalImage from "../elements/Modal";

const Projects = () => {
  const FeatureProjects = PROJECTS.slice(0, 4);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <section
      id="project"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Project"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Project
        </h2>
      </div>

      <div>
        {FeatureProjects.map((project, index) => (
          <div key={index}>
            <ul className="group/list">
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="sm:col-span-2 sm:translate-y-1 text-transparent">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width="200"
                      height="48"
                      onClick={() => openModal(project.image)}
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 "
                    />
                  </div>
                  <div className="z-10 sm:col-span-6">
                    <h3>
                      <a
                        href={project.link}
                        target="_blank"
                        className="group/link inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-purple-400 focus-visible:text-purple-400 text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title}
                          <span className="inline-block">
                            <FiArrowUpRight
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            />
                          </span>
                        </span>
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {project.description}
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Project">
                      {project.technologies.map((technology, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                          <div className="rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 hover:text-purple-700">
                            {technology}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}

        {/* View Full Project */}
        <div className="mt-12 hidden">
          <Link
            to="/archive"
            className="inline-flex items-center font-medium leading-tight text-slate-200 lg:font-semibold group"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-purple-300 motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-purple-400 motion-reduce:transition-none">
                  Archive
                </span>
                <FiArrowRight className="inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none ml-1" />
              </span>
            </span>
          </Link>
        </div>
      </div>

      <ModalImage
        image={currentImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
