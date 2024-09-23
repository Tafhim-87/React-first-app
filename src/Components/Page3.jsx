import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(".headPage3", {
      y: -70,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#Page3",
        start: "top 80%",
        end: "bottom top",
      },
    });
    gsap.from("#imgPage3", {
      opacity: 0,
      x: -200,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#Page3",
        start: "top 90%",
        end: "bottom top",
      },
    });
    gsap.from("#tik ", {
      opacity: 0,
      x: 200,
      duration: 0.5,
      stagger: true,
      scrollTrigger: {
        trigger: "#Page3",
        start: "top 90%",
        end: "bottom top",
      },
    });
  });

  const para = [
    {
      head: "Code merge made easy",
      discription:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      head: "Review code without worry",
      discription:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      head: "AI Assistance to reduce time",
      discription:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      head: "Share work in minutes",
      discription:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
  ];
  return (
    <section id="Page3">
      <div className="mt-[15vh] flex items-center justify-center flex-col">
        <h1 className="headPage3 text-[6vw]">
          Accelerate Your <span className="text-orange-500">Coding flow</span>
        </h1>
        <div className="flex gap-4 px-5">
          <img
            src="https://virtual-r-seven.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcode.c10d46d3.jpg&w=1920&q=75"
            id="imgPage3"
            className="w-[50vw] h-[50vw] object-cover"
            alt=""
          />
          <div id="tik" className="flex flex-col">
            {para.map((elem, index) => (
              <>
                <div className="discript flex mt-8">
                  <div class="text-green-400 mx-6 bg-neutral-900 border border-green-400 h-10 w-10 p-2 justify-center items-center rounded-full text-2xl ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bg-transparent"
                    >
                      <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                    </svg>
                  </div>
                  <h1>{elem.head}</h1>
                </div>
                <h6 className="text-gray-400 ml-20 text-[1.3vw]">
                  Track the performance of your VR apps and gain insights into
                  user behavior.
                </h6>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3;
