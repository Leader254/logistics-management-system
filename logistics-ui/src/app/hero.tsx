"use client";
import { Button } from "primereact/button";

function Hero() {
  return (
    <div className="hero-section p-col-12 flex align-items-center" style={{ height: '100vh' }}>
      <div className="ml-7">
        <h5>Logistics Solutions</h5>
        <h1 className="text-white text-7xl">
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
