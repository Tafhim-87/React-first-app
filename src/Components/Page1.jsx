import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#title", {
      opacity: 0,
      duration: 0.5,
      ease: "ease",
      y: 50,
      delay: 1,
    });
    tl.from(
      "#text",
      {
        opacity: 0,
        duration: 0.5,
        ease: "ease",
        y: 50,
      },
      "-=0.2"
    );
    tl.from(
      "#btnPage1 button",
      {
        opacity: 0,
        duration: 0.5,
        ease: "ease",
        scale: 0,
        stagger: 0.2,
      },
      "-=0.5"
    );
    gsap.from("#image img", {
      x: -200,
      y: 200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#Page1",
        scroller: "body",
        start: "top 5%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });
  const image = [
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      img: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="Page1">
      <div>
        <div className="flex justify-center items-center mt-[8vw] flex-col px-[2vw]">
          <h1 id="title" className="text-[6vw] ">
            VirtualR build tools{" "}
            <span className="text-orange-500">for developers</span>
          </h1>
          <h6
            id="text"
            className="text-center w-[78%] flex justify-center mt-5"
          >
            Empower your craetivity and bring your VR app ideas to life with our
            initiative development tools.Get started today and turn your
            imagination into impressive reality
          </h6>
          <div id="btnPage1" className="flex gap-5 mt-10">
            <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-700 rounded hover:scale-105">
              Start for free
            </button>
            <button className="btn1 px-5 py-2 rounded-md hover:scale-105">
              Documentation
            </button>
          </div>
          <div id="vdo" className="mt-10 flex gap-5">
            {image.map((elem, index) => (
              <div id="image" className="w-[47vw] h-[27vw]  rounded-md">
                <img
                  src={elem.img}
                  className="w-full h-full rounded-md object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
