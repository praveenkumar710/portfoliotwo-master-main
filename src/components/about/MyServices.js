import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle=" Specialize in creating high-performance, scalable, and visually appealing websites tailored to your unique needs. Our expertise covers the entire development lifecycle, ensuring a seamless and engaging user experience."
      />
      {/* <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      /> */}
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Backend Deveploment"
        subTitle=" Specialize in delivering robust backend development services that form the backbone of your digital solutions. Our expertise ensures your applications are secure, scalable, and optimized for high performance, capable of managing complex operations and large datasets seamlessly."
      />
      {/* <ServicesCard
        icons={<FaAppStoreIos />}
        title="Bankend Deveploment"
        subTitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, provident. Accusamus at dolorem expedita dicta."
      /> */}
    </div>
  );
};

export default MyServices;
