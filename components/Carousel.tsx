import { StaticImageData } from 'next/image';
import { JSX, useState } from 'react';

export function Carousel({ images }: { images: StaticImageData[] }): JSX.Element {
	const [index, setIndex] = useState(0);

	const prev = (): void => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
	const next = (): void => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

	return index < images.length ? (
		<div className="relative w-full mx-auto">
			<img src={images[index].src} alt={`carousel-${index}`} className="rounded-2xl w-full h-auto max-h-80 object-contain shadow" />

			{images.length > 1 && (
				<>
					<button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow">
						◀
					</button>

					<button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow">
						▶
					</button>
				</>
			)}
		</div>
	) : (
		<></>
	);
}
