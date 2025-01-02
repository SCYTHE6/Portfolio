"use client";

import React, { useState } from "react"; // Ensure useState is imported from React
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Ensure this import is correct

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7906625540",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "divyanshuchauhan0666@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Near Stadium, Kashipur, Uttarakhand",
  },
];

const Contact = () => {
  const [result, setResult] = useState(""); // Define state for result

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5a1bda9f-95b6-4da1-b2fe-e5e39b27ae51");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work Together</h3>
              <p className="text-white/60">
                Let’s collaborate and bring your vision to life. I’m eager to
                work with you on your next project
              </p>
              <div>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Firstname"
                    name="firstname"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Lastname"
                    name="lastname"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    name="number"
                    required
                  />
                </div>
                {/* select */}
                <div className="flex flex-col gap-6 mt-6">
                  <Select required>
                    <SelectTrigger className="w-full pt-2 pb-2 h-auto leading-normal">
                      <SelectValue placeholder="Select a service"  />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="est">Web Development</SelectItem>
                        <SelectItem value="cst">Software Development</SelectItem>
                        <SelectItem value="mst">Machine Learning Engineer</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* textarea */}
                  <Textarea
                    name="message"
                    className="h-[200px]"
                    placeholder="Type your message here."
                    required
                  />
                  {/* btn */}
                  <Button type="submit" size="md" className="max-w-40">
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
            {result && <p className="mt-4 text-white">{result}</p>}
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none md-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;