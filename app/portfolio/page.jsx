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
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "1",
    category: "Web Development",
    title: "Landing Page Website",
    description:
      "Developing a modern, responsive landing page website for Dinas Tanaman Pangan, Hortikultura, dan Peternakan (Dinas TPHP) Palangka Raya. The website serves as an official digital gateway to showcase the department’s mission, programs, and services in food crop cultivation, horticulture, and livestock management.",
    stack: [
      { name: "Html 5" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "Laravel 11" },
      { name: "Tailwind CSS" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "2",
    category: "Web Development",
    title: "Company Profile Website",
    description:
      "Developing a clean, professional, and responsive company profile website for PT Mataram Nusantara Profitama, delivering a modern digital presence that reflects corporate credibility and accessibility.",
    stack: [
      { name: "Html 5" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "Laravel 11" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "3",
    category: "IoT",
    title: "Hydroponic Automaton",
    description:
      "Developing a scalable, IoT-enabled hydroponic infrastructure for Dinas Perikanan dan Ketahanan Pangan Kabupaten Gunung Mas (DPKP Gumas), located in the lush, tropical landscapes of Central Kalimantan, Indonesia. This innovative system leverages soilless hydroponic cultivation integrated with Internet of Things (IoT) technologies to enhance food security, optimize resource use, and simplify farming operations for local smallholder farmers, aligning with Gumas' 'Tambun Bungai Mandiri' program for agricultural modernization and self-sufficiency.",
    stack: [
      { name: "Arduino" },
      { name: "Android" },
      { name: "Hardware Management" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "4",
    category: "IoT",
    title: "Hydroponic Automaton",
    description:
      "Developing a scalable, IoT-enabled hydroponic infrastructure for Dinas Ketahanan Pangan Kabupaten Sukamara, Central Kalimantan — a forward-thinking, technology-driven solution designed to strengthen local food security, empower smallholder farmers, and promote sustainable agriculture in one of Indonesia’s most biodiverse yet agriculturally challenged regions.",
    stack: [
      { name: "Arduino" },
      { name: "Android" },
      { name: "Hardware Management" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "5",
    category: "Web Development",
    title: "E-Monev Website",
    description:
      "Transforming complex financial data into clear, actionable insights — making money tracking, reporting, and decision-making effortless for individuals, SMEs, and government institutions, for the Dinas Tanaman Pangan, Hortikultura, dan Peternakan (Dinas TPHP) Palangka raya.",
    stack: [
      { name: "Filament" },
      { name: "Laravel 12" },
      { name: "Tailwind CSS" },
      { name: "Docker" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "6",
    category: "Web Development",
    title: "Company Profile Website",
    description:
      "Developing a Clean, Professional Company Profile Website for simplecode, Empowering digital innovation through a sleek, responsive online showcase to highlight simplecode's expertise in custom software, web, and mobile app development.",
    stack: [
      { name: "Next.js" },
      { name: "Laravel 12" },
      { name: "Tailwind CSS" },
      { name: "NPM" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
];

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-0">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline Num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
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
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
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
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
