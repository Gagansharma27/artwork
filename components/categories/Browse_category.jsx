import React from 'react';
import { HeadLine } from '../component';
import Browse_category_carousel from '../carousel/Browse_category_carousel';
import Image from 'next/image';

const Browse_category = ({ bgWhite }) => {
	return (
		<div>
			<section className={bgWhite ? 'pt-24 pb-16 relative' : 'py-12 relative'}>
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
				<div className=" container flex  justify-between h-6 mb-6 px-7">
				<HeadLine
					text="Artists"
					classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
				/>
				<button  className=" rounded-full px-4 py-1 text-sm text-white bg-accent hover:bg-accent-dark font-display">
                     View all
                  	</button>
				</div>
				<div className="relative">
					{/* <!-- Slider --> */}
					<Browse_category_carousel />
				</div>
			</section>
		</div>
	);
};

export default Browse_category;
