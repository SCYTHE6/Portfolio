"use client";

import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
 } from 'react-icons/fa';

 import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "I have had the opportunity to work with leading companies, contributing to a variety of projects in front-end development. My expertise includes creating intuitive and responsive user interfaces, enhancing user experience, and delivering high-quality solutions to meet client needs.",
  items: [
    {
      company: "Xorblin Digital Pvt. Ltd.",
      position: "Front-end Developer",
      duration: "Aug 2024 - Dec 2024"
    },
    {
      company: "Teachnook",
      position: "Front-end Developer",
      duration: "Jan 2023 - March 2023"
    },
  ]
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "I am currently pursuing a B.Tech in Computer Science with a specialization in Artificial Intelligence and Machine Learning, building a strong foundation in software development, data structures, and advanced machine learning algorithms.",
  items: [
    {
      institute: "VIT, Bhopal",
      degree: "B.Tech in Computer Science(specialization in AI&ML)",
      duration: "Jul 2024 - Present"
    },
  ],
};

// certification data
const certification = {
  icon: '/assets/resume/cap.svg',
  title: 'My Certificates',
  description: "I have completed several specialized courses to enhance my skills in various fields, including web development, Python programming, AI & ML, and Java development on cloud platforms, all of which contribute to my growth as a well-rounded developer.",
  items: [
    {
      institute: "NPTEL",
      degree: "Privacy and Security in Online Social Media",
      duration: "2021 - 2025"
    },
    {
      institute: "Oracle University",
      degree: "Java Development on Oracle Cloud",
      duration: "Nov 2023 - March 2024"
    },
    {
      institute: "Coursera Project Network",
      degree: "Facial Expression Recognition with PyTorch",
      duration: "Feb 2024 - March 2024"
    },
    {
      institute: "Technook",
      degree: "Web Development Course",
      duration: "Jan 2023 - March 2023"
    },
    {
      institute: "Johns Hopkins University",
      degree: "HTML, CSS and Javascript for Web Developers",
      duration: "Oct 2022 - Dec 2022"
    },
    {
      institute: "Infosys Springboard",
      degree: "Mastering in Python",
      duration: "April 2022 - June 2022"
    },
    {
      institute: "Cognitive Class by IBM",
      degree: " Python 101 for Data Science",
      duration: "Jan 2022 - March 2022"
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description: "I possess a solid grasp of front-end and back-end technologies, including HTML5, CSS3, JavaScript, and frameworks like React.js and Next.js. I am also proficient in using design tools like Figma and have experience working with Tailwind CSS to build responsive, aesthetically pleasing websites.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

//  about data
const about = {
  title: "About me",
  description: "I am an experienced and versatile machine learning engineer, passionate about creating innovative and efficient solutions. With over 2+ years of experience in the tech industry, I specialize in front-end development, focusing on creating seamless and engaging user experiences. I am always eager to take on new challenges and collaborate with teams to bring ideas to life.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Divyanshu Chauhan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 7906625540"
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Email",
      fieldValue: "divyanshuchauhan0666@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, English"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
 } from '@/components/ui/tooltip';

 import { ScrollArea } from '@/components/ui/scroll-area';
 import { motion } from 'framer-motion';

const Resume = () => {
  return (
  <motion.div 
  initial={{opacity: 0}}
  animate={{opacity: 1,
    transition: {
      delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}

  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs 
      defaultValue="experience" 
      className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certification">Certification</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                          </h3>
                        <div className="flex items-center gap-3">
                          {/* {dot} */}
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

          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                          </h3>
                        <div className="flex items-center gap-3">
                          {/* {dot} */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>

          {/* certification */}
          <TabsContent value="certification" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{certification.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {certification.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certification.items.map((item, index) => {
                      return (
                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.institute}</span>
                        
                        <h3 className="text-xl max-w-[280px] min-h-[80px] text-center lg:text-left">
                          {item.degree}
                          </h3>
                
                          <span className="text-accent">{item.duration}</span>
                        
                        <div className="flex items-center gap-3">
                          {/* {dot} */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                  </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) =>{
                  return (
                    <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
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
            </div>
          </TabsContent>

          {/* about */}
          <TabsContent 
          value="about" 
          className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  );
};

export default Resume;
