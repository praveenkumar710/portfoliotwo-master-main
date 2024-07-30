import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Certifications" icon={<MdWork />} />
        <a href="">
        <ResumeCard
          
          title="Full Stack Development"
          subTitle="KGiSL Micro College"
          des=""
        />
        </a>
       <a href=""> <ResumeCard
          
          title="Meta Frontend Developer"
          
          subTitle="coursera"
          // des="Learn to create responsive, dynamic websites and applications with HTML, CSS, JavaScript, and modern frameworks like React. "
        /></a>
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021 - 2023"
          title="Master of Computer Applications"
          subTitle="CGPA: 8.0"
          des="Gnanamani College of Technology, Anna University"
        />
        <ResumeCard
          badge="2018 - 2021"
          title="Bachelor of Computer Science"
          subTitle="CGPA: 7.2"
          des="Muthayammal College of Arts and Science, Periyar University"
        />
       
      </div>
    </div>
  );
};

export default Education;
