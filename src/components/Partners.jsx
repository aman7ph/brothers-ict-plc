import React from "react";
import appleIcon from "../assets/companies/apple.svg";
import awsIcon from "../assets/companies/aws.svg";
import azureIcon from "../assets/companies/azure.svg";
import ciscoIcon from "../assets/companies/cisco.svg";
import dellIcon from "../assets/companies/dell.svg";
import foxconnIcon from "../assets/companies/foxconn.svg";
import googleIcon from "../assets/companies/google.svg";
import hpIcon from "../assets/companies/hp.svg";
import huggingIcon from "../assets/companies/hugging-face.svg";
import ibmcon from "../assets/companies/ibm.svg";
import lenovoIcon from "../assets/companies/lenovo.svg";
import metaIcon from "../assets/companies/meta.svg";
import microsoftIcon from "../assets/companies/microsoft.svg";
import minabIcon from "../assets/companies/minab.png";
import nvidiaIcon from "../assets/companies/nvidia.svg";
import openaiIcon from "../assets/companies/openai.svg";
import oracleIcon from "../assets/companies/oracle.svg";
import panasonicIcon from "../assets/companies/panasonic.svg";
import samsungIcon from "../assets/companies/samsung.svg";
import vodafoneIcon from "../assets/companies/vodafone.svg";
import Circle from "./Circle";

const companies = [
  { icon: appleIcon, name: "Apple" },
  { icon: awsIcon, name: "Aws" },
  { icon: azureIcon, name: "Azure" },
  { icon: ciscoIcon, name: "CISCO" },
  { icon: dellIcon, name: "Dell" },
  { icon: foxconnIcon, name: "Foxconn" },
  { icon: googleIcon, name: "Google" },
  { icon: hpIcon, name: "hp" },
  { icon: huggingIcon, name: "hugging-face" },
  { icon: ibmcon, name: "IBN" },
  { icon: lenovoIcon, name: "lenovo" },
  { icon: metaIcon, name: "Meta" },
  { icon: microsoftIcon, name: "Microsoft" },
  { icon: minabIcon, name: "Minab" },
  { icon: nvidiaIcon, name: "nvidia" },
  { icon: openaiIcon, name: "openai" },
  { icon: oracleIcon, name: "Oracle" },
  { icon: panasonicIcon, name: "panasonic" },
  { icon: samsungIcon, name: "Samsung" },
  { icon: vodafoneIcon, name: "Vodafone" },
];
function Partners() {
  return (
    <div
      id="services"
      className="my-12 h-[800px] p-12"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 41%, rgba(162,28,160,1) 87%)",
      }}
    >
      <h3 className="font-bold text-2xl text-center text-white p-12">
        Our Partners and Clients
      </h3>

      <div className="flex items-center gap-12 justify-center animate-fade-in flex-wrap">
        {companies.map((companie, index) => (
          <Circle key={index} {...companie} />
        ))}
      </div>
    </div>
  );
}

export default Partners;
