import { JSX, useEffect, useState } from 'react';

import Card, { CardProps } from '../components/Card';
import Layout from '../components/Layout';

export default function Contact(): JSX.Element {
	const [randomEmail, setRandomEmail] = useState('r6wwx6onpjp [at] robinsch.net');

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setRandomEmail(`${Math.random().toString(36).slice(2)} [at] robinsch.net`);
	}, []);
	const contacts: CardProps[] = [
		{
			id: 'email',
			name: 'Email',
			description: <p>{randomEmail}</p>,
			badges: [],
			shortDesc: <p>Randomly generated to prevent spam</p>,
			tags: [],
			moreDescription: null,
			links: [
				{
					label: 'GPG key',
					url: '/gpg.txt',
					target: '_self',
				},
			],
			images: [],
			fullheight: true,
		},
		{
			id: 'signal',
			name: 'Signal',
			description: <p>@Robin.392</p>,
			badges: [],
			// eslint-disable-next-line no-irregular-whitespace
			shortDesc: <p>​</p>,
			tags: [],
			moreDescription: null,
			links: [],
			images: [],
			fullheight: true,
		},
	];

	return (
		<div className="container mx-auto p-4">
			<div className="w-full flex flex-col gap-16 p-8 max-w-6xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-fr">
					{contacts.map((contact, i) => {
						contact.reversed = i % 2 !== 0;
						return <Card key={i} data={contact} />;
					})}
				</div>
			</div>
		</div>
	);
}

Contact.getLayout = function getLayout(page: JSX.Element): JSX.Element {
	return <Layout>{page}</Layout>;
};
