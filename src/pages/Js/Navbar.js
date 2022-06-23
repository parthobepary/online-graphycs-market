import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = ({ children }) => {
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar bg-base-300">
            <div className="container mx-auto">
              <div class="flex-1 px-2 mx-2">
                <img className="w-24" src={logo} alt="logo img" />
              </div>
              <div class="flex-none lg:hidden">
                <label for="my-drawer-3" class="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>

              <div class="flex-none hidden lg:block">
                <ul class="menu menu-horizontal">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                  <a href="#service">Service</a>
                  </li>
                  <li>
                  <a href="#contuct">Contuct Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <Link to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="service" spy={true} smooth={true}>
                Our Service
              </Link>
            </li>
            <li>
              <Link to="contuct" spy={true} smooth={true}>
                Contuct Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
