import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page2 = () => {
  useGSAP(() => {
    gsap.from("#headPage2", {
      opacity: 0,
      duration: 0.5,
      ease: "ease",
      y: 50,
      scrollTrigger: {
        trigger: "#headPage2",
        start: "top 40%",
        end: "bottom top",
      },
    });
    gsap.from("#boxes .boxPage2", {
      opacity: 0,
      duration: 0.5,
      ease: "ease",
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#boxes .boxPage2",
        start: "top 40%",
        end: "bottom top",
      },
    });
  });

  const data = [
    {
      head: "Drag-and-Drop Interface",
      discription:
        "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
    },
    {
      head: "Multi-Platform Compatibility",
      discription:
        "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
    },
    {
      head: "Built-in Templates",
      discription:
        "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
    },
    {
      head: "Real-Time Preview",
      discription:
        "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
    },
    {
      head: "Collaboration Tools",
      discription:
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
    },
    {
      head: "Analytics Dashboard",
      discription:
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
    },
  ];
  return (
    <section id="Page2">
      <div className="w-full min-h-[100vh] mt-[30vh]">
        <div
          id="headPage2"
          className="flex justify-center items-center flex-col"
        >
          <h3 className="px-3 py-1 bg-[#111] rounded-full w-[7vw] text-[1vw] flex justify-center text-orange-500">
            FEATURES
          </h3>
          <h1 className="text-[5vw] mt-[3vh]">
            Easyli Build <span className="text-orange-500">Your code</span>
          </h1>
        </div>
        <div id="boxes" className="flex flex-wrap ">
          {data.map((elem) => (
            <div className="boxPage2 p-10 w-[33%] gap-5">
              <h1>{elem.head}</h1>
              <p className="text-[1.3vw] text-gray-500 mt-3 ml-1">
                {elem.discription}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-zinc-300 mt-5"></div>
      </div>
    </section>
  );
};

export default page2;
