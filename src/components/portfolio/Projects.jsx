import { useState } from "react";
import { PROJECTS } from "../../constants";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ModalImage = ({ image, isOpen, onClose }) => {
  ModalImage.propTypes = {
    image: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div className="relative">
        {/* Full-Screen Image */}
        <img
          src={image}
          alt="Full-screen"
          className="rounded max-w-full max-h-screen"
          onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking on the image
        />
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-purple-100 text-3xl font-bold"
        >
          <IoIosCloseCircle />
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
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
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 cursor-pointer pt-4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                onClick={() => openModal(project.image)}
                className="mb-6 rounded"
              />
            </motion.div>

            {/* description */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 mb-4 lg:mb-0 group hover:transition-all hover:duration-300 hover:delay-75 p-4 hover:bg-neutral-800 hover:rounded-md hover:shadow-inner"
            >
              <a href={project.link} target="_blank">
                <div className="flex flex-row">
                  <h6 className="mb-2 font-semibold transition-colors duration-300 group-hover:text-purple-700">
                    {project.title}
                  </h6>
                  <FiArrowUpRight className="ml-1 mt-1 transition-colors duration-300 group-hover:ml-2 group-hover:mt-0 group-hover:text-purple-700" />
                </div>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 group-hover:text-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </a>
            </motion.div>
          </div>
        ))}
      </div>
      {/* modal image */}
      <ModalImage
        image={currentImage}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Projects;
