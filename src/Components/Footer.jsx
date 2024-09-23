import React from "react";

const Page5 = () => {
  const data = [
    {
      h1: "Getting Started",
      h2: "Documentation",
      h3: "Tutorials",
      h4: "API Reference",
      h5: "Community Forums",
      head: "Resources",
    },
    {
      h1: "Features",
      h2: "Supported Devices",
      h3: "System Requirements",
      h4: "Downloads",
      h5: "Release Notes",
      head: "Platform",
    },
    {
      h1: "Events",
      h2: "Meetups",
      h3: "Conferences",
      h4: "Hackathons",
      h5: "Jobs",
      head: "Community",
    },
  ];
  return (
    <div>
      <div className="w-full h-[1px] bg-white mt-10"></div>
      <div className="flex mt-10 py-5 px-[7vw] justify-start gap-[20vw]">
        {data.map((item) => (
          <div className="foot gap-5 text-zinc-200 hover:text-white">
            <h3 className="mb-3 text-xl font-semibold">{item.head}</h3>
            <h4>{item.h1}</h4>
            <h4>{item.h2}</h4>
            <h4>{item.h3}</h4>
            <h4>{item.h4}</h4>
            <h4>{item.h5}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
