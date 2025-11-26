import clsx from 'clsx';
import Link from 'next/link';
import { JSX } from 'react';

type InlineLinkProps = {
	url: string;
	label: string;
	className?: string;
	target?: '_blank' | '_self';
	rel?: string;
};

export default function InlineLink({ url, label, className, target = '_self', rel }: InlineLinkProps): JSX.Element {
	const safeRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined); // default to "noopener noreferrer" if target="_blank"

	return (
		<Link href={url} target={target} rel={safeRel} className={clsx('text-red-700 hover:text-red-900 underline', className)}>
			{label}
		</Link>
	);
}
