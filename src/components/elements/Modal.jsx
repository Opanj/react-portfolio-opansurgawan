import PropTypes from "prop-types";
import { IoIosCloseCircle } from "react-icons/io";

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

export default ModalImage;
