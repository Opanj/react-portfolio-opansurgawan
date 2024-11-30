import PropTypes from "prop-types";
import { FaLinkedinIn, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa"; // tweterX

export const LinkMenu = ({ linkName, linkTo, isActive }) => {
  LinkMenu.propTypes = {
    linkName: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  };

  return (
    <li>
      <a
        href={linkTo}
        className={`group flex items-center py-3 ${
          isActive ? "active text-purple-300" : "text-slate-500"
        }`}
      >
        <span
          className={`nav-indicator mr-4 h-px ${
            isActive ? "bg-purple-300 w-16" : "bg-slate-600 w-8"
          } transition-all group-hover:w-16 group-hover:bg-purple-300 group-focus-visible:w-16 group-focus-visible:bg-purple-200 motion-reduce:transition-none`}
        ></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-purple-300 group-focus-visible:text-purple-200">
          {linkName}
        </span>
      </a>
    </li>
  );
};

const Header = ({ activeLink }) => {
  Header.propTypes = {
    activeLink: PropTypes.string.isRequired,
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Opan Surgawan</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
          Front End Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build accessible, pixel-perfect digital experiences for the web.{" "}
        </p>
        <nav className="nav hidden lg:block">
          <ul className="mt-16 w-max">
            <LinkMenu
              linkName="About"
              linkTo="#about"
              isActive={activeLink === "about"}
            />
            <LinkMenu
              linkName="Experience"
              linkTo="#experience"
              isActive={activeLink === "experience"}
            />
            <LinkMenu
              linkName="Project"
              linkTo="#project"
              isActive={activeLink === "project"}
            />
          </ul>
        </nav>
      </div>

      {/* sosial media */}
      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 shrink-0">
          <a
            href="https://github.com/Opanj"
            target="_blank"
            className="block hover:text-purple-300 text-2xl"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a
            href="https://www.linkedin.com/in/m-taopan-surgawan"
            target="_blank"
            className="block hover:text-purple-300 text-2xl"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a
            href="https://www.instagram.com/opanjrs"
            target="_blank"
            className="block hover:text-purple-300 text-2xl"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="mr-5 shrink-0">
          <a
            href="https://discord.com/channels/@opanastro"
            target="_blank"
            className="block hover:text-purple-300 text-2xl"
            title="Discord"
          >
            <FaDiscord />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
