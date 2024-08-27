"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider,
  TooltipTrigger,
 } from "@radix-ui/react-tooltip";

 import Link from "next/link";
 import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

 const projects = [
  {
    num: "01",
    category: "Frontend, AI & ML",
    title: "Symphonic AI & ML Based Orchestra",
    description: 
    "Virtual ML based orchestra that uses computer vision to detect human body posture and create music in real time. Using only your web browser and webcam, Symphonic AI enables you to direct a virtual orchestra. It maps out your movements through your webcam using Pose Net, a machine learning library that works in the browser.",
    stack: [{ name: "Vanilla.js"}, {name: "Posenet"}, {name: "Tensorflow.js"}, {name: "Tone.js"}],
    image: "/assets/work/symphonic-ai.gif",
    live: "",
    github: "https://github.com/SCYTHE6/Symphonic-AI",
  },
  {
    num: "02",
    category: "Frontend, AI & ML",
    title: "Crop Doctor",
    description: 
    "Crop-Doctor is a Progressive Web APP (PWA) designed for automated plant disease detection and proposal of method for the prevention and cure of the disease. This app will help farmers to detect the diseases and how can they overcome it. It will also generate a detail report which will contain the disease names in number of species.",
    stack: [{ name: "Node.js"}, {name: "Tailwind.css"}, {name:"React.js"}, {name: "ResNet9"}, {name: "PyTorch"},  {name: "OpeCV"}, {name: "MongoDB"}, {name: "Redis"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/SCYTHE6/Crop_Doctor",
  },
  {
    num: "03",
    category: "Frontend,",
    title: "Satkartar Immigration Website",
    description: 
    "Developed a Front & Back-end website. Featuring the user admission in the Immigration school and providing the features and information on anything of the field.",
    stack: [{ name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"},],
    image: "/assets/work/thumb3.png",
    live: "https://scythe6.github.io/Satkartar-Immigration/",
    github: "https://github.com/SCYTHE6/Satkartar-Immigration",
  },
 ];

const Work = () => {
  const [project, setProject] = useState(projects[0]);


const handleSlideChange = (swiper) => {
  // get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index
  setProject(projects[currentIndex]);
}

  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
                </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index)=> {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                      </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
              {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
              </div>
            </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=> {
                return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify center items-center bg-pink-50/20">
                  {/* overlay */}
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  {/* image */}
                  <div className="relative w-full h-full">
                    <Image 
                    src={project.image} 
                    fill 
                    className="object-cover" 
                    alt="" />
                  </div>
                  </div>
                </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
        </div>
    </motion.section>
  );
};

export default Work;
