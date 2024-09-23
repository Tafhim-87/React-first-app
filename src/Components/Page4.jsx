import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { VscCheck } from "react-icons/vsc";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  useGSAP(() => {
    gsap.from(".price, #amount", {
      scale: 0.8,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#Page4",
        start: "top 80%",
        end: "bottom top",
      },
    });
  });
  const data = [
    {
      head: "Free",
      price: "$0",
      h1: "Private board sharing",
      h2: "5 Gb Storage",
      h3: "Web Analytics",
      h4: "Private Mode",
    },
    {
      head: "Pro",
      price: "$10",
      h1: "Private board sharing",
      h2: "10 Gb Storage",
      h3: "Web Analytics (Advance)",
      h4: "Private Mode",
    },
    {
      head: "Enterprise",
      price: "$200",
      h1: "Private board sharing",
      h2: "Unlimited Storage",
      h3: "High Performance Network",
      h4: "Private Mode",
    },
  ];
  return (
    <section id="Page4">
      <div className="mt-[10vh] flex items-center justify-center flex-col">
        <h1 className="price text-[6vw]">Pricing</h1>
        <div
          id="amount"
          className="w-full flex px-[4vw] items-center justify-between mt-5"
        >
          {data.map((item) => (
            <div className="w-[32%] h-screen border-solid border-[1px] border-white rounded-md px-5 py-7 gap-10 flex flex-col">
              <h3 className="text-orange-300 text-[3vw]">{item.head}</h3>
              <h3 className="text-[3.5vw] ">
                {item.price}{" "}
                <span className="text-gray-500 text-[1.5vw]">/month</span>
              </h3>
              <h6 className="flex gap-2 items-center">
                <VscCheck className="text-sm" /> {item.h1}
              </h6>
              <h6 className="flex gap-2 items-center">
                <VscCheck className="text-sm" /> {item.h2}
              </h6>
              <h6 className="flex gap-2 items-center">
                <VscCheck className="text-sm" /> {item.h3}
              </h6>
              <h6 className="flex gap-2 items-center">
                <VscCheck className="text-sm" /> {item.h4}
              </h6>
              <button className="px-5 py-2 border-solid border-[1px] border-orange-500 rounded-md hover:bg-orange-700 ease-in duration-300 mt-10">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page4;
