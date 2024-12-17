import logo from "../assets/kitty_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3">
      <div
        className="flex flex-shrink-0 items-center text-4xl "
        style={{ color: ` rgba(165, 79, 3, 1)` }}
      >
        <img width={50} height={50} src={logo} alt="" />
        {/*<LuCat />*/}
        {/*<BiSolidCat />*/}
      </div>
    </nav>
  );
};

export default Navbar;
