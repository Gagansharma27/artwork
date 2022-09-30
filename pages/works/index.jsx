import Link from "next/link";
import React from "react";

import Meta from "../../components/Meta";

const Works = () => {
  return (
    <>
      <Meta title="Works || ArtFactory721 | Artists Marketplace " />
      {/* <!-- Works --> */}
      <section className="relative py-16 md:py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>

        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
              Become a featured Artist on Artfactory721
            </h1>
            <p className="dark:text-jacarta-200 mb-16 text-lg leading-normal">
              Talents and creativity need a free space for intellectual
              curiosity and digital art science. Here is a place for the free
              development of your personality and art.
            </p>
            <h3 className="font-display text-jacarta-700 mb-6 text-center text-lg font-medium dark:text-white">
              It´s more than a Vision, it´s a way of life and thinking
            </h3>
          </div>
          {/* <!-- Featured Post --> */}
          <article className="max-w-l">
            <div className="rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row md:items-center">
              {/* <!-- Body --> */}
              <div className="border-jacarta-100 rounded-b-[1.25rem]   md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                {/* <!-- Meta --> */}

                <h3 className="text-jacarta-700 mb-6 text-center p-10 m-10 text-sm font-medium dark:text-white">
                  At first glance, contradictory tendencies meet in this
                  manufacture of digital art. It´s a stronghold for
                  intellectuals, celebrities, and alternative art.
                </h3>
              </div>
              <figure className="group overflow-hidden md:w-1/3 h-1/2">
                <Link href="/single_post/post_1">
                  <a>
                    <img
                      src="/images/works/post_1.jpg"
                      alt="post 1"
                      className="h-full w-full object-cover rounded-lg transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </a>
                </Link>
              </figure>
            </div>
          </article>
          <article className="max-w-l">
            <div className=" rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row md:items-center md:justify-evenly ">
              {/* <!-- Body --> */}
              <figure className="group overflow-hidden md:w-1/3 h-1/2">
                <Link href="/single_post/post_1">
                  <a>
                    <img
                      src="/images/works/post_1.jpg"
                      alt="post 1"
                      className="h-full w-full object-cover rounded-lg transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </a>
                </Link>
              </figure>
              <div className=" border-jacarta-100 rounded-b-[1.25rem]   md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]  ">
                {/* <!-- Meta --> */}

                <h3 className="text-jacarta-700 mb-6 text-center text-sm p-10 m-10 font-medium dark:text-white">
                  Our collections make use of the advantages of the
                  revolutionary blockchain to create paradigms for a movement
                  and a new generation of art. As result, high-quality artworks
                  are presented to our community.
                </h3>
              </div>
            </div>
          </article>
          <article className="mb-[1.875rem] max-w-l">
            <div className="rounded-2xl flex flex-col overflow-hidden transition-shadow hover:shadow-lg md:flex-row  md:items-center">
              {/* <!-- Body --> */}
              <div className="border-jacarta-100 rounded-b-[1.25rem]  md:w-1/2 md:rounded-none md:rounded-r-[1.25rem]">
                {/* <!-- Meta --> */}

                <h3 className="text-jacarta-700 mb-6 text-center p-10 m-10 text-sm font-medium dark:text-white">
                  You will enter the Factory and leaves it as a recognized
                  artist. To give talents an equal chance, we support them with
                  marketing, distribution as well as with the technical
                  implementation and associated costs.
                </h3>
              </div>
              <figure className="group overflow-hidden md:w-1/3 h-1/2">
                <Link href="/single_post/post_1">
                  <a>
                    <img
                      src="/images/works/post_1.jpg"
                      alt="post 1"
                      className="h-full w-full rounded-lg object-cover transition-transform duration-[1600ms] will-change-transform group-hover:scale-105"
                    />
                  </a>
                </Link>
              </figure>
            </div>
          </article>

          <h2 className="font-display text-jacarta-700 mb-6 text-xl dark:text-white">
            Submit your work as artist
          </h2>

          <div className="mb-8">
            <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
              If you‘re an artist and you ‘d like to apply to ArtFactory721,
              please send our team the following information:
            </div>
            <p className="dark:text-jacarta-300">
              01 Please send our Team 5%-10% of the proposed collection as test
              mints/outputs or .jpeg file <br />
              02 Statement about the project, methodology and inspiration
              <br />
              03 Twitter, Instagram or Discord handle
              <br />
            </p>
          </div>

          <div className="mb-8">
            <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
              Additional information’s:
            </div>
            <p className="dark:text-jacarta-300">
              04 If the collection is still in process, how long will it take to
              complete?
              <br />
              05 Technical Requirements
              <br />
              06 Supply of the artworks
              <br />
              07 Desired price and auctions type
              <br />
            </p>
          </div>

          <div className="mb-8">
            <div className="dark:border-jacarta-600 border-jacarta-100 text-jacarta-700 mb-4 border-b pb-4 text-lg font-medium dark:text-white">
              Optional:
            </div>
            <p className="dark:text-jacarta-300">
              08 Artist’s Statement
              <br />
              09 Artist’s CV
              <br />
              10 Links to your artworks
              <br />
            </p>
          </div>
          <h3 className="font-display text-jacarta-700 mb-6 text-center text-lg font-medium dark:text-white">
            More information about royalty and process will follow here.
          </h3>
          <div className="text-center">
            <button className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
              Submit Work
            </button>
          </div>
        </div>
      </section>
      {/* <!-- end works --> */}
    </>
  );
};

export default Works;
