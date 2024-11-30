import { CONTACT } from "../../constants";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      {/* <div className="border-b border-neutral-900 pb-20">
        <h2 className="my-10 text-center text-4xl">
          Contact <span className="text-neutral-500">Me</span>
        </h2>
        <div className="text-center tracking-tighter text-neutral-400">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">
            <a href="#">{CONTACT.phoneNo}</a>
          </p>
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div> */}
      <div className="border-b border-neutral-900 pb-10 flex lg:justify-center">
        <div className="mt-10 w-full lg:w-1/2 flex flex-col lg:flex-row gap-4 tracking-tighter lg:items-center lg:justify-start">
          <motion.a
            href={CONTACT.linkWa}
            target="_blank"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="hover:text-green-500 flex flex-row gap-2"
          >
            <FaWhatsapp className="text-2xl" />
            {CONTACT.phoneNo}
          </motion.a>
          <motion.a
            href={CONTACT.linkEmail}
            target="_blank"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="hover:text-red-500 flex flex-row gap-2"
          >
            <IoMailOutline className="text-2xl" />
            {CONTACT.email}
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Contact;
