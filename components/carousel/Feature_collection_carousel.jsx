import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "tippy.js/dist/tippy.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Feature_collections_data from "../../data/Feature_collections_data";
import Link from "next/link";

const Feature_collections_carousel = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className=" card-slider-4-columns !py-5"
      >
        {Feature_collections_data.map((item) => {
          const {
            id,
            bigImage,
            userImage,
            title,
            itemsCount,
            userName,
            eth,
            quantity,
            auction,
            liscense,
            date,
          } = item;

          const itemLink = bigImage
            .split("/")
            .slice(-1)
            .toString()
            .split("_")
            .slice(1, 2)
            .toString();

          return (
            <SwiperSlide key={id}>
              <article>
                <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
                  <Link href={`/item/item_${itemLink}`}>
                    <a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
                      {title}
                    </a>
                  </Link>

                  <div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight mb-2">
                    <div className="flex flex-wrap items-center">
                      <Link href={`/item/item_${itemLink}`}>
                        <a className="mr-2 shrink-0">
                          <img
                            src={userImage}
                            alt="owner"
                            className="h-5 w-5 rounded-full"
                          />
                        </a>
                      </Link>
                      <span className="dark:text-jacarta-400 mr-1">by</span>
                      <Link href={`/item/item_${itemLink}`}>
                        <a className="text-accent">
                          <span>{userName}</span>
                        </a>
                      </Link>
                    </div>
                    <span className="dark:text-jacarta-300 text-sm">
                      {itemsCount} Items
                    </span>
                  </div>
                  <Link href={`/item/item_${itemLink}`}>
                    <a className="flex space-x-[0.625rem]">
                      <figure className="w-full h-full">
                        <Image
                          src={bigImage}
                          alt="item 1"
                          className="rounded-[0.625rem]"
                          width={150}
                          height={240}
                          objectFit="cover"
                          layout="responsive"
                        />
                      </figure>
                      {/* <span className="flex w-1/3 flex-col space-y-[0.625rem]">
												<img
													src={subImage1}
													alt="item 1"
													className="h-full rounded-[0.625rem] object-cover"
													loading="lazy"
												/>

												<img
													src={subImage2}
													alt="item 1"
													className="h-full rounded-[0.625rem] object-cover"
													loading="lazy"
												/>
												<img
													src={subImage3}
													alt="item 1"
													className="h-full rounded-[0.625rem] object-cover"
													loading="lazy"
												/>
											</span> */}
                    </a>
                  </Link>
                  <div className="container mt-4 flex justify-between">
                    <div className=" flex flex-col justify-evenly">
                      <span className="dark:text-jacarta-300 text-sm">
                        {eth}
                      </span>
                      <span className="dark:text-jacarta-300 text-sm">
                        {quantity}
                      </span>
                      <span className="dark:text-jacarta-300 text-sm">
                        {auction}
                      </span>
                      <span className="dark:text-jacarta-300 text-sm">
                        {liscense}
                      </span>
                      <span className="dark:text-jacarta-300 text-sm">
                        {date}
                      </span>
                    </div>
                    <div className="inline-block align-top">
                      <button className="rounded-full px-4 py-1 mb-4 text-sm text-white bg-green hover:bg-white hover:text-green font-display">
                        lorem
                      </button>
                    </div>
                  </div>

                  <div className=" container mt-4 flex flex-col justify-between">
                    <button className="top-2 right-2 rounded-full px-4 py-1 mb-4 text-sm text-white bg-accent hover:bg-accent-dark font-display">
                      Remind me
                    </button>
                    <button className="top-2 right-2 rounded-full px-4 py-1 text-sm text-white bg-accent hover:bg-accent-dark font-display">
                      Discover Collection
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <!-- Slider Navigation --> */}
      <div className="group swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base sm:!-left-6 after:hidden">
        <MdKeyboardArrowLeft />
      </div>
      <div className="group swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base sm:!-right-6 after:hidden">
        <MdKeyboardArrowRight />
      </div>
    </>
  );
};

export default Feature_collections_carousel;
