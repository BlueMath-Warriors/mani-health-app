"use client";
import { useEffect, useState } from "react";
const Preloader = () => {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".lines").classList.add("ready");
    }, 3000);
    setTimeout(() => {
      setPreloader(false);
      document.querySelector(".lines").classList.add("finish");
    }, 1000);
  }, []);
  return (
    <>
      <div
        className="preloader"
        style={{ display: preloader ? "block" : "none" }}
      >
        <div className="w-full max-w-full h-full relative z-10 flex items-center justify-center">
          <div className="flex items-center justify-center h-full">
            <div className="spinner">
              <div className="double-bounce1" />
              <div className="double-bounce2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preloader;
