"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaLaravel,
  FaPhp,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiApple,
  SiAndroid,
  SiArduino,
} from "react-icons/si";

// About Us Data
const abouts = {
  title: "About Us",
  description:
    "We are a team of passionate IT enthusiast dedicated to building high-quality web and mobile applications. Our expertise spans a wide range of technologies, allowing us to deliver innovative solutions tailored to our clients' needs.",
  info: [
    { fieldName: "Name", fieldValue: "simplecode" },
    { fieldName: "Email", fieldValue: "simplecode@mail.com" },
    { fieldName: "Phone", fieldValue: "+123 456 7890" },
    { fieldName: "Country", fieldValue: "Indonesia" },
    { fieldName: "Founded", fieldValue: "2022" },
    { fieldName: "Employees", fieldValue: "3" },
    { fieldName: "Website", fieldValue: "www.simplecode.com" },
    { fieldName: "Language", fieldValue: "English, Indonesia" },
  ],
};

//Experience Data
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "Our Experience",
  description:
    "With years of experience in the IT industry, our team has successfully delivered numerous projects across various domains. Our commitment to excellence and continuous learning ensures that we stay ahead of the curve in this ever-evolving field.",
  items: [
    {
      duration: "Q1 2023 - Q3 2023",
      project: "Landing Page Website",
      company:
        "Dinas Tanaman Pangan, Hortikultura, dan Peternakan Provinsi Kalimantan Tengah",
    },
    {
      duration: "Q1 2024",
      project: "Company Profile Website",
      company: "PT Mataram Nusantara Profitama",
    },
    {
      duration: "Q3 2024",
      project: "Hydroponic Automaton System",
      company: "Dinas Ketahanan Pangan Kabupaten Gunung Mas",
    },
    {
      duration: "Q4 2024 - Q2 2025",
      project: "Hydroponic Automaton System",
      company: "Dinas Ketahanan Pangan Kabupaten Sukamara",
    },
    {
      duration: "Q3 2025",
      project: "E-Monev Web Application",
      company:
        "Dinas Tanaman Pangan, Hortikultura, dan Peternakan Provinsi Kalimantan Tengah",
    },
    {
      duration: "Q4 2025 - Present",
      project: "Company Profile Website",
      company: "simplecode",
    },
  ],
};

// Skills Data
const skills = {
  title: "Our Skills",
  description:
    "Our team possesses a diverse set of skills across various technologies and frameworks. We continuously update our knowledge to stay current with industry trends and best practices.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiApple />, name: "iOS Hardware Fix" },
    { icon: <SiAndroid />, name: "Android Hardware Fix" },
    { icon: <SiArduino />, name: "Arduino" },
    { icon: <FaDocker />, name: "Docker" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="abouts"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="abouts">About Us</TabsTrigger>
            <TabsTrigger value="experiences">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* contents */}
          <div className="min-h-[70vh] w-full">
            {/* abouts */}
            <TabsContent
              value="abouts"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{abouts.title}</h3>
                <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {abouts.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {abouts.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* experiences */}
            <TabsContent value="experiences" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2d2d30] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.project}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#2d2d30] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
