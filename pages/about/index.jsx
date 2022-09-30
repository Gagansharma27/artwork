import React, { useState } from "react";
import { careers_data } from "../../data/careers_data";
import { accordion_data } from "../../data/help_center_data";
import HeadLine from "../../components/headLine";
import Accordion from "../../components/accordion";
import { newseLatterData } from "../../data/newseLatterData";
import Meta from "../../components/Meta";

const About = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const handleAccordion = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  const [video, setVideo] = useState(false);
  return (
    <>
      <Meta title="About || ArtFactory721 | Artists Marketplace" />
      {/* <!-- Page title --> */}
      <section className="relative pt-24 pb-20">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          {/* <!-- Page Title --> */}
          <div className="mx-auto max-w-2xl py-16 text-center">
            <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white">
              We are a community of visionaries and art lovers
            </h1>
            <p className="dark:text-jacarta-300 text-lg leading-normal">
              Our collections, which house the most innovative artists of our
              time, make use of the advantages of the revolutionary blockchain
              to create paradigms for a movement and a new generation of art.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {careers_data.map(({ id, text, icon }) => {
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
                  <p className="font-display text-jacarta-500 mx-auto text-left text-sm dark:text-white">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-2xl">
          <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white">
            " It's more than a Vision, it's a way of life and thinking "
          </h1>
          <p className="text-orange-bright mb-4 font-medium">Manifest</p>
          <div className="mb-6">
            <p className="dark:text-jacarta-300">
              <strong className="text-jacarta-700 dark:text-white">
                Purpose
              </strong>{" "}
              - On behalf of contemporary art and culture, we are committed to
              supporting new types, methodologies, and forms of art.
            </p>
          </div>
          <div className="mb-6">
            <p className="dark:text-jacarta-300">
              <strong className="text-jacarta-700 dark:text-white">
                World View
              </strong>{" "}
              - Diversity promotes innovation, creativity, and artistic
              potential. To ensure this, we are committed to equal opportunities
              and against categorization of any kind.
            </p>
          </div>
          <div className="mb-6">
            <p className="dark:text-jacarta-300">
              <strong className="text-jacarta-700 dark:text-white">
                Politics
              </strong>{" "}
              - we are free from religious, political, or other influences of
              any kind and encourage free thinking. For more justice, we stand
              up for the socially disadvantaged and enable them equal rights and
              opportunities.
            </p>
          </div>
          <div className="mb-6">
            <p className="dark:text-jacarta-300">
              <strong className="text-jacarta-700 dark:text-white">
                Transparency
              </strong>{" "}
              - Openness and clarity are indispensable for sustainable success.
              From communication to royalty structure, we always want to be
              transparent.
            </p>
          </div>
          <div className="mb-6">
            <p className="dark:text-jacarta-300">
              <strong className="text-jacarta-700 dark:text-white">Law</strong>{" "}
              - All members have exclusive rights and can participate with
              voting rights in the development of the Factory. This is for the
              common good and cannot be revoked.
            </p>
          </div>
          <div className="mb-6">
            <p className="dark:text-jacarta-300">
              <strong className="text-jacarta-700 dark:text-white">
                Sustainability
              </strong>{" "}
              - We offset our carbon emissions by 721% and are committed to the
              regeneration and healing of our natural environment.
            </p>
            <time className="dark:text-jacarta-300 text-sm">
              ARTFACTORY 721 <br />
              Basel, 02 July 2022
            </time>
          </div>
        </div>
      </section>

      <section className="dark:bg-jacarta-800 relative py-24 mb-6">
        <div className="container">
          <HeadLine
            text="The Power of a Community"
            classes="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-3">
            {newseLatterData.map((item) => {
              const { id, icon, title, text } = item;
              return (
                <div className="container flex">
                <h1 className="text-7xl mx-4">{id}</h1>
                <div className="text-justify newseLatter-item" key={id}>
                
                  {/* <div
                    className={`mb-6 inline-flex rounded-full p-3`}
                    style={{ backgroundColor: icon.parentBg }}
                  >
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full`}
                      style={{ backgroundColor: icon.childBg }}
                    >
                      <svg className="icon icon-wallet h-5 w-5 fill-white">
                        <use xlinkHref={`/icons.svg#${icon.svg}`}></use>
                      </svg>
                    </div>
                  </div> */}
                  <p className="dark:text-jacarta-300 mb-6">{text}</p>

                  <button className="top-2 right-2 rounded-full px-6 py-2 text-sm text-white bg-accent hover:bg-accent-dark font-display">
                     {title}
                  </button>
                </div>
                
                </div>
              );
            })}
          </div>

          {/* <p className="text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating
            ArtFactory721
          </p>

          <div className="mx-auto mt-7 max-w-md text-center">
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
              />
              <button className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>
      </section>

      {/* <!-- FAQ --> */}
      <Accordion data={accordion_data} />
      {/* <!-- FAQ ends --> */}
    </>
  );
};

export default About;
