import React, { useEffect } from "react";
import Collection_category from "../../components/collectrions/collection_category";
import {
  NewseLatter,
  Feature_collections,
  Careers,
  Browse_category,
  Hero_3,
} from "../../components/component";
import Meta from "../../components/Meta";
import { careers_data, header_data } from "../../data/careers_data";

const Home_3 = () => {
  useEffect(() => {
    const header = document.querySelector("header");
    header.classList.add("bg-white/[.15]");
  }, []);

  return (
    <>
      <Meta title="ArtFactory721 | Artists Marketplace " />
      <Hero_3 />
      <div className="container flex flex-col justify-evenly mt-6 md:space-x-6 md:flex-row">
            {header_data.map(({ id, text, icon }) => {
              return (
                <div
                  className=" text-center transition-shadow hover:shadow-xl"
                  key={id}
                >
                  <div className="mb-6 mr-4 inline-flex left rounded-full bg-[#CDBCFF] p-2.5">
                    <div className="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
                      <svg className="icon h-[2.25rem] w-[2.25rem] fill-white">
                        <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                      </svg>
                    </div>
                  </div>
                  <p className="text-black-300  max-w-lg  text-left text-sm dark:text-jacarta-300">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
      <Feature_collections bgWhite={true} />
      <Browse_category />
      <NewseLatter bgWhite={false} />
    </>
  );
};

export default Home_3;
