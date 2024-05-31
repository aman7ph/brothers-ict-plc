import React from "react";
import Circle from "../components/Circle";
import Kaspersky from "../assets/companies/Kaspersky.png";
import acer from "../assets/companies/acer.png";
import cisco from "../assets/companies/cisco.svg";
import dell from "../assets/companies/dell.svg";
import dlink from "../assets/companies/dlink.png";
import epson from "../assets/companies/epson.png";
import hp from "../assets/companies/hp.svg";
import ibm from "../assets/companies/ibm.svg";
import kaspersky from "../assets/companies/kaspersky.svg";
import microsoft from "../assets/companies/microsoft.svg";
import mitsumi from "../assets/companies/mitsumi.png";
import samsung from "../assets/companies/samsung.svg";
import toshiba from "../assets/companies/toshiba.png";
import tplink from "../assets/companies/tplink.png";
import intel from "../assets/companies/Intel.svg";
import huawei from "../assets/companies/huawei.svg";
import fortinet from "../assets/companies/fortinet.svg";
const companies = [
  { icon: cisco, name: "CISCO" },
  { icon: dell, name: "Dell" },
  { icon: hp, name: "hp" },
  { icon: ibm, name: "IBN" },
  { icon: microsoft, name: "Microsoft" },
  { icon: tplink, name: "Tp-Link" },
  { icon: toshiba, name: "Toshiba" },
  { icon: mitsumi, name: "Mitsumi" },
  { icon: kaspersky, name: "Kaspersky" },
  { icon: epson, name: "Epson" },
  { icon: dlink, name: "D-link" },
  { icon: acer, name: "Acer" },
  { icon: samsung, name: "Samsung" },
  { icon: Kaspersky, name: "Kaspersky" },
  { icon: intel, name: "Intel" },
  { icon: huawei, name: "Huawei" },
  { icon: fortinet, name: "Fortinet" },
];
function Partners() {
  return (
    <div
      id="partners"
      className="my-12 min-h-[800px] p-12"
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
