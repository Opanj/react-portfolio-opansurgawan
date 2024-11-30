// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedinIn, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa"; // tweterX

const sosialMedia = [
  {
    name: "Linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/m-taopan-surgawan",
  },
  { name: "Github", icon: FaGithub, link: "https://github.com/Opanj" },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/opanjrs",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/channels/@opanastro",
  },
];

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" className="mx-2 w-10" /> */}
        <h1 className="mx-2 w-10 text-3xl font-semibold">O.</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {sosialMedia.map((item, index) => (
          <a key={index} href={item.link} target="_blank">
            <item.icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
