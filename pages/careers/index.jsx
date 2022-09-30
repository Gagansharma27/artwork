import { React, useEffect } from "react";
import { careers_data } from "../../data/careers_data";
import Recently_added_dropdown from "../../components/dropdown/recently_added_dropdown";
import Link from "next/link";
import Image from "next/image";
import { collectRenkingData } from "../../redux/counterSlice";
import { jobs_data } from "../../data/jobs_data";
import { useSelector, useDispatch } from "react-redux";
import Meta from "../../components/Meta";

const Careers = () => {
  const { filteredRenkingData } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const categoryText = [
    {
      id: 1,
      text: "All",
    },
    {
      id: 2,
      text: "Developer",
    },
    {
      id: 3,
      text: "Community Manager",
    },
  ];
  const locationSelect = [
    {
      id: 1,
      text: "Worldwide",
    },
    {
      id: 2,
      text: "Europe",
    },
    {
      id: 3,
      text: "Asia",
    },
    {
      id: 4,
      text: "America",
    },
  ];
  const last7DaysRanks = [
    {
      id: 1,
      text: "Last 7 Days",
    },
    {
      id: 2,
      text: "Last 14 Days",
    },
    {
      id: 3,
      text: "All Time",
    },
  ];

  useEffect(() => {
    dispatch(collectRenkingData(jobs_data));
  }, [dispatch]);

  return (
    <div>
      <Meta title="Careers || ArtFactory721 " />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- Benefits --> */}
        <section className="relative pt-32 pb-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <picture className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
            <img
              src="/images/gradient_dark.jpg"
              alt="gradient dark"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
                Join our Team and be a part of a new era
              </h1>
              <p className="dark:text-jacarta-200 mb-16 text-lg leading-normal">
                Welcome to a world without borders, a universe where the love of
                art and the blockchain are at the forefront. We’re happy you’ve
                found us and that your part of this movement.
              </p>
            </div>
            <h1 className="font-display text-jacarta-700 mb-6 text-center text-4xl font-medium dark:text-white">
              What makes us different
            </h1>
            <div className="grid gap-7 md:grid-cols-3">
              {careers_data.map(({ id, text, icon }) => {
                return (
                  <div
                    className="dark:bg-jacarta-800 rounded-2.5xl bg-white p-[3.75rem] text-center transition-shadow hover:shadow-xl"
                    key={id}
                  >
                    <div className="mb-6 inline-flex rounded-full bg-[#CDBCFF] p-2.5">
                      <div className="bg-accent inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full">
                        <svg className="icon h-[2.25rem] w-[2.25rem] fill-white">
                          <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                        </svg>
                      </div>
                    </div>
                    <p className="font-display text-jacarta-700 mx-auto mb-4 dark:text-white">
                      {text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <!-- end benefits --> */}
      </div>

      <div className="container">
        <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
          Shape with us a new era of art history.
        </h1>

        {/* <!-- Filters --> */}
        <div className="mb-8 flex flex-wrap items-center justify-between">
          <div className="flex flex-wrap items-center">
            {/* <!-- Categories --> */}
            <Recently_added_dropdown
              data={categoryText}
              dropdownFor="rankingCategories"
            />

            {/* <!-- Chains --> */}
            <Recently_added_dropdown
              data={locationSelect}
              dropdownFor="blockchain"
            />
          </div>

          {/* last 7 days */}
          <Recently_added_dropdown
            data={last7DaysRanks}
            dropdownFor="last7Days-ranks"
          />

          {/* <!--  --> */}
        </div>
        {/* <!-- end filters --> */}

        {/* <!-- Table --> */}
        <div className="scrollbar-custom overflow-x-auto">
          <div
            role="table"
            className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white"
          >
            <div
              className="dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex"
              role="row"
            >
              <div className="w-[4%] py-3 px-4" role="columnheader">
                <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                  S.No
                </span>
              </div>
              <div className="w-[28%] py-3 px-4" role="columnheader">
                <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                  Role
                </span>
              </div>
              <div className="w-[20%] py-3 px-4" role="columnheader">
                <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                  Location
                </span>
              </div>
              <div className="w-[28%] py-3 px-4" role="columnheader">
                <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                  Description
                </span>
              </div>
              <div className="w-[20%] py-3 px-4" role="columnheader">
                <span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
                  Apply Now
                </span>
              </div>
            </div>
            {filteredRenkingData.slice(0, 7).map((item) => {
              const {
                id,
                image,
                title,
                location,
                price,
                description,
                buttons,
                icon,
              } = item;
              const itemLink = image
                .split("/")
                .slice(-1)
                .toString()
                .replace(".jpg", "");
              // console.log(item.category.art);

              return (
                <Link href={/user/ + itemLink} key={id}>
                  <a
                    className="flex transition-shadow hover:shadow-lg"
                    role="row"
                  >
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[28%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span className="mr-2 lg:mr-4">{id}</span>
                      <figure className="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
                        {/* <img src={image} alt={title} className="rounded-2lg" loading="lazy" /> */}
                        <Image
                          src={image}
                          alt={title}
                          height={32}
                          width={32}
                          layout="responsive"
                          objectFit="contain"
                          className="rounded-2lg"
                        />

                        {icon && (
                          <div
                            className="dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
                            data-tippy-content="Verified Collection"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              className="h-[.875rem] w-[.875rem] fill-white"
                            >
                              <path fill="none" d="M0 0h24v24H0z"></path>
                              <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                            </svg>
                          </div>
                        )}
                      </figure>
                      <span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
                        {title}
                      </span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[22%] items-center whitespace-nowrap border-t py-4 px-4"
                      role="cell"
                    >
                      <span className="-ml-1" data-tippy-content="ETH"></span>
                      <span className="text-sm font-medium tracking-tight">
                        {location}
                      </span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[30%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <span>{description}</span>
                    </div>
                    <div
                      className="dark:border-jacarta-600 border-jacarta-100 flex w-[20%] items-center border-t py-4 px-4"
                      role="cell"
                    >
                      <button className="top-2 right-2 rounded-full px-6 py-2 text-sm text-white bg-accent hover:bg-accent-dark font-display">
                     {buttons}
                  </button>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
