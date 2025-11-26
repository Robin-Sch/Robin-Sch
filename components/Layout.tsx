import { JSX } from 'react';

import Navbar from './Navbar';

import '../assets/globals.css';

export default function Layout({ children }: { children: JSX.Element }): JSX.Element {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
