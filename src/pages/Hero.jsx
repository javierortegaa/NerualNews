import React, { useEffect, useState } from "react";
import { getData } from "../services/firebase_db";

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-background">
      <h1 className="text-5xl font-bold text-primaryPurple">
        Welcome to Neura
      </h1>
      <p className="mt-4 text-lg text-textColor">
        Your trusted source for the latest in AI, Machine Learning, and LLM
        news.
      </p>

      <button className="mt-8 px-6 py-3 bg-primaryPurple hover:bg-secondaryPurple text-white font-semibold rounded-lg transition duration-300">
        Explore Insights
      </button>

      <div className="mt-8">
        {data?.map((item, index) => (
          <div key={index} className="text-left">
            <h2 className="text-xl font-bold text-primaryPurple">{item}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
