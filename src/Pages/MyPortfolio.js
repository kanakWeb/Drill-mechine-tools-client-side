import React from "react";
import Portfolio from "../Assets/img/protfolio.jpg";
const MyPortfolio = () => {
  return (
    <div className=" py-8 bg-base-300 ">
      <div className="  flex justify-center items-center">
        <div className="container-fluid p-3 md:p-5">
          <figure className="md:flex bg-white rounded-xl p-2 md:p-0 overflow-hidden">
            <img
              className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
              src={Portfolio}
              alt=""
              width="384"
              height="512"
            />
            <div className=" md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <div className="text-green-700 text-lg lg:text-2xl py-4 font-bold">
                  Kanak Chandra
                </div>
                <p className="lg:text-lg text-sm font-semibold">
                  I’m a graduate student at Daffodil International
                  University, Dhaka Bangladesh majoring in Computer
                  Science and Engineering. I have some technical and
                  analytical skills acquired by pursing my degree also
                  have some knowledge working across the Font-end web
                  development proficient in front end. I’m looking for
                  a role where I can contribute my knowledge also grow
                  and learn from other experienced team members.
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-cyan-600 lg:text-xl">
                  Email : kanakchandra143@gmail.com
                </div>
                <div className="text-gray-500">
                  Software Designer & Developer
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      <div className="rounded-lg shadow-lg border-amber-300 shadow-amber-50 border-2 px-4 py-8 my-4 mx-8">
        <span className="space-y-2 font-bold text-2xl text-blue-600 mt-16">
          Skill :
        </span>
        <div className="flex flex-wrap">
          <span className="text-md mx-1 my-1  font-bold text-white bg-cyan-600 rounded-full py-1/2 px-2">
            Basic c
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-blue-600 rounded-full py-1/2 px-2">
            HTml
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-orange-600 rounded-full py-1/2 px-2">
            CSS
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-green-600 rounded-full py-1/2 px-2">
            Bootstrap-5
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-gray-600 rounded-full py-1/2 px-2">
            Tailwind-CS
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-yellow-600 rounded-full py-1/2 px-2">
            Git
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-cyan-600 rounded-full py-1/2 px-2">
            GitHub
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-red-600 rounded-full py-1/2 px-2">
            Netlify
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-yellow-400 rounded-full py-1/2 px-2">
            Java Scrip
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-pink-600 rounded-full py-1/2 px-2">
            ES6
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-black rounded-full py-1/2 px-2">
            API
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-cyan-600 rounded-full py-1/2 px-2">
            Figma
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-green-400 rounded-full py-1/2 px-2">
            React-(component base)
          </span>
          <span className="text-md mx-1 my-1 font-bold text-white bg-blue-600 rounded-full py-1/2 px-2">
            Firebase,Mongodb,some, -NodeJs
          </span>
        </div>
      </div>
      <div className="rounded-lg shadow-lg border-blue-300 shadow-amber-50 border-2 px-4 py-8 my-4 mx-8">
        <span className="space-y-2 font-bold text-2xl text-blue-600 mt-16">
          Project link :
        </span>
        <div className="flex flex-col">
          <span className="text-md mx-1 my-1 mt-3 font-bold  text-cyan-600 rounded-full py-1/2 px-2">
            1.Mr-tutor-- (https://mr-tutor-e4f3b.web.app)
          </span>
          <span className="text-md mx-1 my-2 font-bold  text-cyan-600 rounded-full py-1/2 px-2">
            2.Fresh-Fruits WearHouse--(
            https://fresh-fruits-f5235.web.app)
          </span>
          <span className="text-md mx-1 my-1 font-bold  text-cyan-600 rounded-full py-1/2 px-2">
            3.(Drill machine tools) Manufecture--
            (https://drill-machine-tools.web.app)
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
