import React from 'react';
import HeadLine from '../headLine';
import Feature_collections_carousel from '../carousel/Feature_collection_carousel';
import Image from 'next/image';

const Feature_collections = ({ bgWhite = false }) => {
	return (
		<div>
			<section className="py-12 relative">
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
				<div className="container">
					<HeadLine
						
						text="Art Facrtoy 721"
						classes="font-display text-jacarta-700 mb-8 text-center text-3xl dark:text-white"
					/>
					<h2 className='font-display text-jacarta-700 mb-8 text-center text-xl dark:text-white'>Discover Our Collection</h2>
					
					<div className="container flex justify-between">
					<h3 className='text-jacarta-700 dark:text-white text-m font-display'>Upcoming Collection</h3>
					<button  className="top-2 right-2 rounded-full px-4 py-1 text-sm text-white bg-accent hover:bg-accent-dark font-display">
                     View all
                  	</button>
					</div>
					
					<div className="relative">
						<Feature_collections_carousel />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Feature_collections;
