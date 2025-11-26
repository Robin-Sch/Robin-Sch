import clsx from 'clsx';
import Link from 'next/link';
import { JSX } from 'react';

type ButtonProps = {
	url: string;
	label: string;
	className?: string;
	target?: '_blank' | '_self';
	rel?: string;
};

export default function Button({ url, label, className, target = '_self', rel }: ButtonProps): JSX.Element {
	const safeRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined); // default to "noopener noreferrer" if target="_blank"

	return (
		<Link
			href={url}
			target={target}
			rel={safeRel}
			className={clsx('px-4 py-2 bg-red-700 text-white font-medium rounded-md shadow hover:bg-red-900 transition-colors duration-200', className)}
		>
			{label}
		</Link>
	);
}
