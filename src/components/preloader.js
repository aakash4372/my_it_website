import React from "react";
import "ldrs/ring";
import './preloader.css'
import { ping } from "ldrs";

const Preloader = () => {
  ping.register();
  return (
    <div className="preloader">
      <l-ping size="45" speed="2" color="#e34fc3"></l-ping>
    </div>
  );
};

export default Preloader;
