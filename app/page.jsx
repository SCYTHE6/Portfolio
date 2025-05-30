"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import {Typewriter} from 'react-simple-typewriter';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {

  // Define handleDone and handleType functions
  const handleDone = () => {
    console.log("Typing animation completed!");
  };

  const handleType = (count) => {
    console.log(`Typing event fired ${count} times`);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
          <div className="text-xl">
            <Typewriter
            words={['Frontend Developer', 'Prompt Engineer', 'Machine Learning Engineer']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
          {/* <span >Frontend Developer</span> */}
          </div>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Divyanshu Chauhan</span>
            </h1>
            <p className="max-w-[500px} mb-9 text-white/80">
            I specialize in designing and developing sophisticated, 
            visually appealing digital websites and possess extensive expertise 
            in a diverse range of programming languages and technologies. 
            Additionally, 
            I have a strong proficiency in the training and development of 
            advanced artificial intelligence and machine learning models, 
            enabling innovative and data-driven solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/assets/resume/Divyanshu Chauhan_Resume.pdf" download="Divyanshu Chauhan_Resume.pdf">
              <Button 
              variant="outline" 
              size="lg" 
              className="uppercase flex items-center gap-2"
              >
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
    
  );
};

export default Home;

 