import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#logo h1", {
      opacity: 0,
      duration: 0.5,
      ease: "ease",
      y: -50,
    });
    tl.from(
      ".menu ul li a",
      {
        y: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "ease",
      },
      "-=0.5"
    );
    tl.from("#btn button", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "ease",
    });
  });
  return (
    <div className="relative">
      <div
        id="nav"
        className="px-[2vw] py-[1vw] flex justify-between items-center fixed top-0 left-0 w-full z-10"
      >
        <div id="logo" className="flex items-center bg-transparent">
          <img
            src="https://virtual-r-seven.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.da0bdb04.png&w=640&q=75"
            className="w-[3vw] h-[3vw] object-cover bg-transparent"
            alt=""
          />
          <h1 className="bg-transparent">VirtualR</h1>
        </div>
        <div className="menu bg-transparent">
          <ul className="bg-transparent">
            <li className="flex gap-[5vw] text-[1.4vw] bg-transparent">
              <a href="#Page1">Home</a>
              <a href="#Page2">Fetures</a>
              <a href="#Page3">Workflow</a>
              <a href="#Page4">Pricing</a>
            </li>
          </ul>
        </div>
        <div id="btn" className="gap-[5vw] text-sm bg-transparent">
          <button className="btn1 px-2 py-1 mr-7 rounded-md active:scale-105 bg-transparent">
            Sign in
          </button>
          <button className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-[1.3vw] hover:scale-105 bg-transparent">
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
