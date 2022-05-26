import React from "react";
import useService from "../../hooks/useService";
import Service from "./Service";

const Services = () => {
  const [services] = useService();
  const toolsCopy = [...services];
  const reversedTools = toolsCopy?.reverse();
  return (
    <div className="py-5">
      <h2 className="text-4xl font-bold text-cyan-500 text-center ">
        Services {services.length}
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 my-40 gap-10">
        {reversedTools.slice(0, 6).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
