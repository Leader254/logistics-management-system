import { Button } from "primereact/button";
import Image from 'next/image';

function Hero() {
  return (
    <div className="hero-section p-col-12 flex align-items-center relative" style={{ height: '100vh', position: 'relative' }}>
      <Image
        src="/assets/logistics-import-export.jpg"
        alt="Logistics Import Export"
        layout="fill"
        objectFit="cover"
      />
      <div className="ml-7 absolute top-1/4 left-0 text-white">
        <h5>Logistics Solutions</h5>
        <h1 className="text-7xl">
          Seamless Solutions
          <br />
          for Your <span style={{ color: "#EBFF00" }}>Supply Chain</span>
          <br />
          Success.
        </h1>
        <div className="">
          <Button
            label="About Us"
            className="border-round-lg p-button-md"
            style={{ backgroundColor: "#EBFF00", borderColor: "#EBFF00", color: "black" }}
          />
          <Button
            label="Contact Us"
            className="border-round-lg p-button-md ml-5"
            style={{ borderColor: "#EBFF00", color: "#fff" }}
            outlined
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;