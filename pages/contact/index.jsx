import React from "react";
import ImageTitle from "../../components/imageTitle";
import Meta from "../../components/Meta";
import ContactForm from "../../components/contact/ContactForm";
import Address from "../../components/contact/address";
import Link from "next/link";

const Contact = () => {
  const bgImage = "/images/page-title/knowledge_base_banner.jpg";

  return (
    <div>
      <Meta title="Contact || ArtFactory721 | Artists Marketplace " />
      <div className="pt-[5.5rem] lg:pt-24">
        <ImageTitle text="Get in touch" image={bgImage} />

        {/* <!-- Contact --> */}
        <section className="dark:bg-jacarta-800 relative py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <img
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full"
            />
          </picture>
          <div className="container">
            <div className="lg:flex" >
            
              {/* <!-- Contact Form --> */}

              {/* <!-- Info --> */}
              <Address />
            
              <div className="mb-12 lg:mb-0 lg:w-1/2 lg:pr-12 ml-0 lg:ml-12 ">
                <h2 className="font-display text-jacarta-700 mb-4 text-xl dark:text-white mt-16">
                  Contact Us
                </h2>
                {/* <p className="dark:text-jacarta-300 mb-16 text-lg leading-normal">
                  {
                    " This is the place to start. Find the answer you need from the Community or our support team."
                  }
                </p> */}

                <ContactForm />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mx-auto max-w-2xl py-16 text-center">
              <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white">
                JOIN OUR GROWING TEAM
              </h1>
              <p className="dark:text-jacarta-300 text-lg leading-normal">
                We‘re always looking for passionate people to help us make a NFT
                experience better.
              </p>
              <br />
              <Link href="/careers">
                <a className="text-accent weight-bolder">
                  View current job postings
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- end contact --> */}
      </div>
    </div>
  );
};

export default Contact;
