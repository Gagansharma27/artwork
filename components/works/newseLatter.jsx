import React from "react";
import HeadLine from "../headLine";
import { newseLatterData } from "../../data/newseLatterData";
import Image from "next/image";
import Link from "next/link";
import { socialIcons } from "../../data/footer_data";


const NewseLatter = ({ bgWhite = true }) => {
  return (
    <section className="dark:bg-jacarta-800 relative py-20 md:py-10">
      {bgWhite && (
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full"
            layout="fill"
          />
        </picture>
      )}

      <div className="container flex flex-col justify-between md:flex-row">
        {/* <HeadLine
          text="Create and sell your NFTs"
          classes="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
        /> */}

        {/* <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {newseLatterData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className="text-center newseLatter-item" key={id}>
                <div
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
                </div>
                <h3 className="font-display text-jacarta-700 mb-4 text-lg dark:text-white">
                  {id}. {title}
                </h3>
                <p className="dark:text-jacarta-300">{text}</p>
              </div>
            );
          })}
        </div> */}
        <div className="container flex flex-col">
        <h1 className="font-bold font-display text-6xl  dark:text-white">Stay in Loop</h1>
          <p className="text-jacarta-300  max-w-lg  text-m dark:text-jacarta-300">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating
            ArtFactory721
          </p>

          <div className=" mt-7 max-w-md text-center">
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
          </div>
        </div>
        <div>
        <h1  className="font-bold font-display text-6xl mx-4 max-w-2xl  dark:text-white py-4 md:py-0 ">Join the Communtiy</h1>
        <div className="flex mx-4 space-x-7 pt-4">
        {socialIcons.map((item) => {
              const { id, href, text } = item;
              return (
                <Link href={href} key={id}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group cursor-pointer"
                  >
                    <svg className="icon group-hover:fill-accent fill-jacarta-300 h-10 w-10 dark:group-hover:fill-white">
                      <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                    </svg>
                  </a>
                </Link>
              );
            })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewseLatter;
