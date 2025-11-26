import { StaticImageData } from 'next/image';
import { JSX, useState } from 'react';

import { Carousel } from './Carousel';
import Button from './Links/Button';

type Tag = { label: string; type: 'primary' | 'success' | 'warning' };

export type CardProps = {
	id: string;
	name: string;
	badges: { label: string; img: StaticImageData }[];
	shortDesc: JSX.Element | null;
	tags: Tag[];
	description: JSX.Element | null;
	moreDescription: JSX.Element | null;
	links: { label: string; url: string; target: '_blank' | '_self' }[];
	images: StaticImageData[];
	reversed?: boolean;
	fullheight?: boolean;
};

export default function Card({ data }: { data: CardProps }): JSX.Element {
	const { id, name, badges, shortDesc, tags, description, moreDescription, links, images, reversed = false, fullheight = false } = data;
	const [isOpen, setIsOpen] = useState(false);

	const tagClass = (type: Tag['type']): string => {
		switch (type) {
			case 'success':
				return 'bg-green-700 text-white';
			case 'warning':
				return 'bg-yellow-400 text-gray-900';
			case 'primary':
			default:
				return 'bg-blue-700 text-white';
		}
	};

	return (
		<div id={id} className={`grid grid-cols-1 md:grid-cols-3 items-center gap-12 ${reversed ? 'md:grid-flow-col-dense' : ''}`}>
			{images.length > 0 && (
				<div className={`md:col-span-1 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
					<Carousel images={images} />
				</div>
			)}
			<div className={`${fullheight && 'h-full'} ${images.length > 0 ? 'md:col-span-2' : 'md:col-span-3'} ${reversed ? 'md:order-1' : 'md:order-2'}`}>
				<div className={`${fullheight && 'h-full'} rounded-md shadow p-6 bg-gray-900 border border-gray-200`}>
					<h2 className="text-2xl font-bold mb-2">{name}</h2>
					{(shortDesc || tags.length > 0) && (
						<div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
							{shortDesc && <span className="text-gray-300">{shortDesc}</span>}
							{tags.map((tag) => (
								<span key={tag.label} className={`${tagClass(tag.type)} px-2 py-1 rounded-full text-xs`}>
									{tag.label}
								</span>
							))}
						</div>
					)}

					<div className="flex flex-wrap gap-3 mb-4">
						{badges.map((b) => (
							<div key={b.label} className="group relative flex items-center">
								<img
									src={b.img.src}
									alt={b.label}
									title={b.label}
									className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-110 drop-shadow"
								/>
								<span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
									{b.label}
								</span>
							</div>
						))}
					</div>

					<div className="text-base mb-4">{description}</div>
					{moreDescription && (
						<>
							<button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-900 transition-colors">
								{isOpen ? 'Less info' : 'More info'}
							</button>
							<div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible max-h-0'}`}>
								<div className="mt-2 space-y-2">{moreDescription}</div>
							</div>
						</>
					)}

					<div className="flex flex-wrap gap-3 mt-4">
						{links.map(({ url, label, target }) => (
							<Button key={label} url={url} label={label} target={target} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
